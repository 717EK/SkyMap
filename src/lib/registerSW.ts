// Registers the service worker that makes Skylight installable as a PWA.
//
// Only runs in production builds: a service worker in `vite dev` aggressively
// caches modules and fights HMR. Locally, use `npm run build && npm run preview`
// (or the deployed site) to install the app.
export function registerSW(): void {
  if (!import.meta.env.PROD) return;
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.warn("Service worker registration failed:", err);
    });
  });
}
