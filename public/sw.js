// Skylight service worker.
//
// This app needs the network for live flight data, so the goal here isn't full
// offline use — it's installability (so the app can be added to a home screen /
// installed as a desktop app and launched in its own window) plus a fast,
// resilient app shell. Strategy:
//   - navigations (HTML):  network-first, fall back to cached shell when offline
//   - static assets (JS/CSS/img/fonts): stale-while-revalidate
//   - /api/* (live data):  network-only, never cached
//
// Asset filenames are content-hashed by Vite, so we cache them at runtime by URL
// rather than precaching a build manifest. Bumping CACHE_VERSION drops old caches.

const CACHE_VERSION = "skylight-v1";
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const ASSET_CACHE = `${CACHE_VERSION}-assets`;

// App-shell entry points we want available offline after first load.
const SHELL_URLS = ["/", "/control", "/index.html", "/control.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      // Best-effort: a missing clean-URL alias shouldn't fail the whole install.
      await Promise.allSettled(SHELL_URLS.map((u) => cache.add(u)));
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k !== SHELL_CACHE && k !== ASSET_CACHE)
          .map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // let cross-origin pass through

  // Live data: always go to the network, never serve stale aircraft/TLEs.
  if (url.pathname.startsWith("/api/")) return;

  // HTML navigations: network-first with a cached-shell fallback.
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          const cache = await caches.open(SHELL_CACHE);
          cache.put(req, fresh.clone());
          return fresh;
        } catch {
          const cache = await caches.open(SHELL_CACHE);
          return (
            (await cache.match(req)) ||
            (await cache.match("/")) ||
            (await cache.match("/index.html")) ||
            Response.error()
          );
        }
      })(),
    );
    return;
  }

  // Everything else (hashed JS/CSS, icons, fonts): stale-while-revalidate.
  event.respondWith(
    (async () => {
      const cache = await caches.open(ASSET_CACHE);
      const cached = await cache.match(req);
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      return cached || (await network) || Response.error();
    })(),
  );
});
