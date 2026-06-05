// Drop-in replacement for the old WebSocket connection, re-implemented for a
// serverless / static deploy. Same public surface (state + subscribe +
// patchConfig + resetConfig) so the renderer and control panel are unchanged.
//
// Instead of a server pushing over a socket, this:
//   - polls /api/aircraft on a timer, normalizes + enriches client-side,
//   - keeps config in localStorage (no backend to persist it), and
//   - syncs config live across tabs of the same browser (BroadcastChannel +
//     the storage event) so the control panel can drive a display tab.

import type { Aircraft, Config, SourceStatus } from "../shared/index.js";
import { DEFAULT_CONFIG, mergeConfig } from "../shared/index.js";
import { normalizeRaw, lookupAirline, lookupType, RouteEnricher } from "./enrich.js";

const LS_CONFIG = "skylight.config.v1";
const BC_NAME = "skylight.config";
const NM_PER_MILE = 0.868976;
/** airplanes.live is rate-limited to ~1 req/sec; this + the edge cache keep us
 *  comfortably under it. The renderer interpolates between fixes, so motion
 *  stays smooth even at this cadence. */
const POLL_MS = 1500;
/** Drop sticky enrichment for aircraft long gone, to keep the map small. */
const STICKY_TTL_MS = 600_000;

export interface StreamState {
  connected: boolean;
  config: Config | null;
  now: number;
  aircraft: Aircraft[];
  status: SourceStatus | null;
}

type Listener = (state: StreamState) => void;

interface Sticky {
  typeName?: string;
  airline?: string;
  origin?: string;
  destination?: string;
  registration?: string;
  originName?: string;
  destName?: string;
  originLat?: number;
  originLon?: number;
  destLat?: number;
  destLon?: number;
  lastSeen: number;
}

function loadConfig(): Config {
  try {
    const raw = localStorage.getItem(LS_CONFIG);
    if (raw) return mergeConfig(DEFAULT_CONFIG, JSON.parse(raw) as Partial<Config>);
  } catch {
    /* ignore */
  }
  return DEFAULT_CONFIG;
}

export class Connection {
  state: StreamState;

  private listeners = new Set<Listener>();
  private timer: ReturnType<typeof setInterval> | null = null;
  private closed = false;
  private inFlight = false;
  private bc: BroadcastChannel | null = null;
  private enricher = new RouteEnricher();
  private sticky = new Map<string, Sticky>();

  // `role` is kept for API compatibility with the old socket version.
  constructor(_role: "display" | "control") {
    this.state = {
      connected: false,
      config: loadConfig(),
      now: 0,
      aircraft: [],
      status: { source: "api", ok: false, count: 0, lastOk: null },
    };
  }

  connect(): void {
    this.closed = false;
    try {
      this.bc = new BroadcastChannel(BC_NAME);
      this.bc.onmessage = (e: MessageEvent) => {
        const d = e.data as { type?: string; config?: Config };
        if (d?.type === "config" && d.config) this.update({ config: d.config });
      };
    } catch {
      /* BroadcastChannel unsupported — storage event still covers cross-tab */
    }
    window.addEventListener("storage", this.onStorage);
    void this.tick();
    this.timer = setInterval(() => void this.tick(), POLL_MS);
  }

  close(): void {
    this.closed = true;
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.bc?.close();
    this.bc = null;
    window.removeEventListener("storage", this.onStorage);
    this.enricher.dispose();
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    fn(this.state);
    return () => this.listeners.delete(fn);
  }

  patchConfig(patch: Partial<Config>): void {
    const config = mergeConfig(this.state.config ?? DEFAULT_CONFIG, patch);
    this.persist(config);
    this.update({ config });
  }

  resetConfig(): void {
    this.persist(DEFAULT_CONFIG);
    this.update({ config: DEFAULT_CONFIG });
  }

  // --- internals ---

  private onStorage = (e: StorageEvent): void => {
    if (e.key !== LS_CONFIG || !e.newValue) return;
    try {
      this.update({ config: mergeConfig(DEFAULT_CONFIG, JSON.parse(e.newValue)) });
    } catch {
      /* ignore */
    }
  };

  private persist(config: Config): void {
    try {
      localStorage.setItem(LS_CONFIG, JSON.stringify(config));
    } catch {
      /* ignore */
    }
    try {
      this.bc?.postMessage({ type: "config", config });
    } catch {
      /* ignore */
    }
  }

  private apiUrl(c: Config): string {
    const r = Math.min(250, Math.ceil(c.radiusMiles * NM_PER_MILE) + 1);
    return `/api/aircraft?lat=${c.centerLat}&lon=${c.centerLon}&r=${r}`;
  }

  private async tick(): Promise<void> {
    if (this.closed || this.inFlight) return;
    this.inFlight = true;
    const c = this.state.config ?? DEFAULT_CONFIG;
    const now = Date.now();
    try {
      const res = await fetch(this.apiUrl(c));
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as { aircraft?: unknown[]; ac?: unknown[] };
      const rawList = json.aircraft ?? json.ac ?? [];

      const list: Aircraft[] = [];
      for (const raw of rawList) {
        const ac = normalizeRaw(raw as Parameters<typeof normalizeRaw>[0], now);
        if (ac) list.push(ac);
      }
      for (const ac of list) this.enrich(ac, now);
      this.pruneSticky(now);

      this.update({
        connected: true,
        now,
        aircraft: list,
        status: { source: "api", ok: true, count: list.length, lastOk: now },
      });
    } catch (err) {
      // Keep the last aircraft on screen; the renderer ages them out by staleSec.
      this.update({
        connected: false,
        status: {
          source: "api",
          ok: false,
          count: this.state.aircraft.length,
          lastOk: this.state.status?.lastOk ?? null,
          message: err instanceof Error ? err.message : "fetch failed",
        },
      });
    } finally {
      this.inFlight = false;
    }
  }

  /** Mirror of the server's enrich(): tables first, then cached adsbdb, then a
   *  sticky merge so resolved fields never flicker back to undefined. */
  private enrich(ac: Aircraft, now: number): void {
    ac.typeName = lookupType(ac.typeCode);
    ac.airline = lookupAirline(ac.flight);

    const e = this.enricher.get(ac.hex, ac.flight, now);
    if (e.route) {
      ac.airline = ac.airline ?? e.route.airline;
      ac.origin = e.route.origin ?? ac.origin;
      ac.destination = e.route.destination ?? ac.destination;
      ac.originName = e.route.originName ?? ac.originName;
      ac.destName = e.route.destName ?? ac.destName;
      ac.originLat = e.route.originLat ?? ac.originLat;
      ac.originLon = e.route.originLon ?? ac.originLon;
      ac.destLat = e.route.destLat ?? ac.destLat;
      ac.destLon = e.route.destLon ?? ac.destLon;
    }
    if (e.aircraft) {
      ac.typeName = ac.typeName ?? e.aircraft.typeName;
      ac.registration = ac.registration ?? e.aircraft.registration;
    }

    const prev = this.sticky.get(ac.hex);
    ac.typeName = ac.typeName ?? prev?.typeName;
    ac.airline = ac.airline ?? prev?.airline;
    ac.origin = ac.origin ?? prev?.origin;
    ac.destination = ac.destination ?? prev?.destination;
    ac.registration = ac.registration ?? prev?.registration;
    ac.originName = ac.originName ?? prev?.originName;
    ac.destName = ac.destName ?? prev?.destName;
    ac.originLat = ac.originLat ?? prev?.originLat;
    ac.originLon = ac.originLon ?? prev?.originLon;
    ac.destLat = ac.destLat ?? prev?.destLat;
    ac.destLon = ac.destLon ?? prev?.destLon;

    this.sticky.set(ac.hex, {
      typeName: ac.typeName,
      airline: ac.airline,
      origin: ac.origin,
      destination: ac.destination,
      registration: ac.registration,
      originName: ac.originName,
      destName: ac.destName,
      originLat: ac.originLat,
      originLon: ac.originLon,
      destLat: ac.destLat,
      destLon: ac.destLon,
      lastSeen: now,
    });
  }

  private pruneSticky(now: number): void {
    for (const [hex, s] of this.sticky) {
      if (now - s.lastSeen > STICKY_TTL_MS) this.sticky.delete(hex);
    }
  }

  private update(partial: Partial<StreamState>): void {
    this.state = { ...this.state, ...partial };
    for (const fn of this.listeners) fn(this.state);
  }
}
