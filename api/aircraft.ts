// Serverless proxy for the airplanes.live point query.
//
// Why this exists: the browser can't call airplanes.live directly (no CORS), and
// the public API is rate-limited to ~1 request/second. Routing through this
// function fixes CORS and lets Vercel's edge cache (s-maxage below) coalesce
// many viewers of the same area into a single upstream hit.
//
// GET /api/aircraft?lat=37.62&lon=-122.38&r=5   (r = radius in nautical miles)

import type { VercelRequest, VercelResponse } from "@vercel/node";

const UPSTREAM = "https://api.airplanes.live/v2/point";

function num(v: unknown): number | null {
  const n = typeof v === "string" ? Number(v) : NaN;
  return Number.isFinite(n) ? n : null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const lat = num(req.query.lat);
  const lon = num(req.query.lon);
  if (lat === null || lon === null || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
    return res.status(400).json({ error: "lat and lon are required numbers", ac: [] });
  }
  const r = Math.max(1, Math.min(250, Math.round(num(req.query.r) ?? 5)));
  const url = `${UPSTREAM}/${lat}/${lon}/${r}`;

  try {
    const upstream = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "skylight-web/1.0 (+https://github.com/cpaczek/skylight)",
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!upstream.ok) {
      return res.status(502).json({ error: `upstream ${upstream.status}`, ac: [] });
    }
    const data = await upstream.json();
    // Short edge cache: shared across all viewers of this lat/lon/r, so we stay
    // well under the 1 req/sec limit even with several people watching.
    res.setHeader("Cache-Control", "max-age=0, s-maxage=2, stale-while-revalidate=8");
    return res.status(200).json(data);
  } catch {
    return res.status(504).json({ error: "upstream timeout", ac: [] });
  }
}
