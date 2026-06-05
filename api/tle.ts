// Serverless proxy for Celestrak's visual-satellite TLE set.
//
// Celestrak sends no CORS headers, so the browser can't fetch it directly. We
// pull the plain-text TLE list, parse it into {name, line1, line2} records, and
// edge-cache the result. The client computes positions from these with
// satellite.js (see src/display/celestial.ts).
//
// GET /api/tle  ->  [{ name, line1, line2 }, ...]

import type { VercelRequest, VercelResponse } from "@vercel/node";

const TLE_URL = "https://celestrak.org/NORAD/elements/gp.php?GROUP=visual&FORMAT=tle";

interface Tle {
  name: string;
  line1: string;
  line2: string;
}

function parseTle(text: string): Tle[] {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trimEnd())
    .filter((l) => l.length);
  const out: Tle[] = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i].startsWith("1 ") && lines[i + 1]?.startsWith("2 ")) {
      const name = (lines[i - 1] ?? "SAT").replace(/^0 /, "").trim();
      out.push({ name, line1: lines[i], line2: lines[i + 1] });
      i++;
    }
  }
  return out;
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const upstream = await fetch(TLE_URL, { signal: AbortSignal.timeout(15000) });
    if (!upstream.ok) return res.status(200).json([]);
    const tles = parseTle(await upstream.text());
    res.setHeader("Cache-Control", "max-age=0, s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json(tles);
  } catch {
    return res.status(200).json([]);
  }
}
