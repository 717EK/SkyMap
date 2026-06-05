// Serverless proxy for adsbdb enrichment (CORS shield + light shaping).
//
// One request resolves both the flight route (by callsign) and the aircraft
// type/registration (by hex), so the client makes a single call per aircraft.
// Results are stable, so we cache them hard at the edge.
//
// GET /api/route?callsign=UAL1234&hex=a1b2c3   (both params optional)

import type { VercelRequest, VercelResponse } from "@vercel/node";

const API = "https://api.adsbdb.com/v0";

async function getJson(url: string): Promise<any | null> {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!r.ok) return null;
    return await r.json();
  } catch {
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const callsign =
    typeof req.query.callsign === "string" ? req.query.callsign.trim().toUpperCase() : "";
  const hex = typeof req.query.hex === "string" ? req.query.hex.trim().toLowerCase() : "";

  const out: { route: unknown; aircraft: unknown } = { route: null, aircraft: null };
  const tasks: Promise<void>[] = [];

  if (callsign) {
    tasks.push(
      (async () => {
        const j = await getJson(`${API}/callsign/${encodeURIComponent(callsign)}`);
        const fr = j?.response?.flightroute;
        if (fr) {
          out.route = {
            airline: fr.airline?.name,
            origin: fr.origin?.iata_code ?? fr.origin?.icao_code,
            destination: fr.destination?.iata_code ?? fr.destination?.icao_code,
            originName: fr.origin?.municipality,
            destName: fr.destination?.municipality,
            originLat: fr.origin?.latitude,
            originLon: fr.origin?.longitude,
            destLat: fr.destination?.latitude,
            destLon: fr.destination?.longitude,
          };
        }
      })(),
    );
  }

  if (hex) {
    tasks.push(
      (async () => {
        const j = await getJson(`${API}/aircraft/${encodeURIComponent(hex)}`);
        const a = j?.response?.aircraft;
        if (a) {
          out.aircraft = {
            typeName: a.manufacturer && a.type ? `${a.manufacturer} ${a.type}` : a.type,
            registration: a.registration,
          };
        }
      })(),
    );
  }

  await Promise.all(tasks);

  // Routes + types rarely change; cache for 12h at the edge.
  res.setHeader("Cache-Control", "max-age=0, s-maxage=43200, stale-while-revalidate=86400");
  return res.status(200).json(out);
}
