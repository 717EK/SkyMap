// Client-side enrichment — the work the Node server used to do, moved into the
// browser so the whole thing can run as a static site.
//
//  - normalizeRaw():  readsb/airplanes.live record  ->  our Aircraft shape
//  - lookupType / lookupAirline:  instant lookups from bundled tables
//  - RouteEnricher:  lazy adsbdb route + type lookups via /api/route, cached in
//    memory and localStorage (negative-cached + TTL'd) so we never re-hammer it.

import type { Aircraft } from "../shared/index.js";
import airlines from "./tables/airlines.json";
import types from "./tables/types.json";

const AIRLINES = airlines as Record<string, string>;
const TYPES = types as Record<string, string>;

/** ICAO type code (e.g. "B738") -> human name. */
export function lookupType(code: string | undefined): string | undefined {
  if (!code) return undefined;
  return TYPES[code.toUpperCase()];
}

/** Airline-style callsign (LLLdddd) -> airline name via its 3-letter prefix. */
export function lookupAirline(callsign: string | undefined): string | undefined {
  if (!callsign) return undefined;
  const cs = callsign.trim().toUpperCase();
  if (cs.length < 4) return undefined;
  const prefix = cs.slice(0, 3);
  if (!/^[A-Z]{3}$/.test(prefix) || !/\d/.test(cs[3])) return undefined;
  return AIRLINES[prefix];
}

/** Raw readsb-style record (the subset we read). */
interface RawAircraft {
  hex?: string;
  flight?: string;
  lat?: number;
  lon?: number;
  alt_baro?: number | "ground";
  alt_geom?: number;
  gs?: number;
  track?: number;
  baro_rate?: number;
  squawk?: string;
  category?: string;
  r?: string;
  t?: string;
  seen?: number;
  rssi?: number;
}

export function normalizeRaw(raw: RawAircraft, ts: number): Aircraft | null {
  if (!raw.hex) return null;
  const onGround = raw.alt_baro === "ground";
  return {
    hex: raw.hex,
    flight: raw.flight?.trim() || undefined,
    lat: raw.lat,
    lon: raw.lon,
    altBaro: onGround ? null : ((raw.alt_baro as number | undefined) ?? null),
    altGeom: raw.alt_geom ?? null,
    gs: raw.gs,
    track: raw.track,
    baroRate: raw.baro_rate ?? null,
    squawk: raw.squawk,
    category: raw.category,
    onGround,
    registration: raw.r,
    typeCode: raw.t,
    seen: raw.seen,
    rssi: raw.rssi,
    ts,
  };
}

// --- adsbdb route/type enrichment (lazy + cached) ---

interface RouteInfo {
  airline?: string;
  origin?: string;
  destination?: string;
  originName?: string;
  destName?: string;
  originLat?: number;
  originLon?: number;
  destLat?: number;
  destLon?: number;
}
interface AircraftInfo {
  typeName?: string;
  registration?: string;
}
interface Entry<T> {
  data: T | null; // null = looked up, nothing found (negative cache)
  at: number;
}

const LS_ROUTES = "skylight.routes.v1";
const TTL_MS = 12 * 3600_000;
const MAX_ENTRIES = 4000;

export class RouteEnricher {
  private routes = new Map<string, Entry<RouteInfo>>();
  private aircraft = new Map<string, Entry<AircraftInfo>>();
  private inflight = new Set<string>();
  private saveTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.load();
  }

  /** Whatever we have cached right now; fires a lookup for anything missing. */
  get(
    hex: string,
    callsign: string | undefined,
    now: number,
  ): { route?: RouteInfo; aircraft?: AircraftInfo } {
    const cs = callsign ? callsign.trim().toUpperCase() : "";
    const aEntry = this.aircraft.get(hex);
    const rEntry = cs ? this.routes.get(cs) : undefined;
    const needA = !this.fresh(aEntry, now);
    const needR = !!cs && !this.fresh(rEntry, now);
    if (needA || needR) this.fetch(hex, cs, needA, needR);
    return {
      aircraft: this.fresh(aEntry, now) ? (aEntry!.data ?? undefined) : undefined,
      route: rEntry && this.fresh(rEntry, now) ? (rEntry.data ?? undefined) : undefined,
    };
  }

  dispose(): void {
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = null;
    this.save();
  }

  private fresh<T>(e: Entry<T> | undefined, now: number): boolean {
    return !!e && now - e.at < TTL_MS;
  }

  private fetch(hex: string, cs: string, needA: boolean, needR: boolean): void {
    const key = `${hex}|${cs}|${needA ? "a" : ""}${needR ? "r" : ""}`;
    if (this.inflight.has(key)) return;
    this.inflight.add(key);

    const params = new URLSearchParams();
    if (needA) params.set("hex", hex);
    if (needR && cs) params.set("callsign", cs);

    fetch(`/api/route?${params.toString()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j: { route?: RouteInfo; aircraft?: AircraftInfo } | null) => {
        const at = Date.now();
        if (needA) this.aircraft.set(hex, { data: j?.aircraft ?? null, at });
        if (needR && cs) this.routes.set(cs, { data: j?.route ?? null, at });
        this.scheduleSave();
      })
      .catch(() => {
        /* leave uncached so we retry on a later tick */
      })
      .finally(() => this.inflight.delete(key));
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(LS_ROUTES);
      if (!raw) return;
      const parsed = JSON.parse(raw) as {
        routes?: Record<string, Entry<RouteInfo>>;
        aircraft?: Record<string, Entry<AircraftInfo>>;
      };
      const now = Date.now();
      for (const [k, v] of Object.entries(parsed.routes ?? {})) {
        if (now - v.at < TTL_MS) this.routes.set(k, v);
      }
      for (const [k, v] of Object.entries(parsed.aircraft ?? {})) {
        if (now - v.at < TTL_MS) this.aircraft.set(k, v);
      }
    } catch {
      /* ignore corrupt cache */
    }
  }

  private scheduleSave(): void {
    if (this.saveTimer) return;
    this.saveTimer = setTimeout(() => {
      this.saveTimer = null;
      this.save();
    }, 1500);
  }

  private save(): void {
    try {
      this.trim(this.routes);
      this.trim(this.aircraft);
      localStorage.setItem(
        LS_ROUTES,
        JSON.stringify({
          routes: Object.fromEntries(this.routes),
          aircraft: Object.fromEntries(this.aircraft),
        }),
      );
    } catch {
      /* storage full or unavailable — fine, it's only a cache */
    }
  }

  /** Keep the cache bounded: drop the oldest entries past MAX_ENTRIES. */
  private trim<T>(map: Map<string, Entry<T>>): void {
    if (map.size <= MAX_ENTRIES) return;
    const sorted = [...map.entries()].sort((a, b) => a[1].at - b[1].at);
    for (let i = 0; i < sorted.length - MAX_ENTRIES; i++) map.delete(sorted[i][0]);
  }
}
