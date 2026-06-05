import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const SHARED = resolve(__dirname, "src/shared");

// The /api/*.ts files are Vercel serverless functions in production. In `vite
// dev` there's no Vercel runtime, so this plugin runs them in-process: it shims
// the (req, res) pair Vercel passes to a handler, loads the TypeScript handler
// through Vite's module pipeline, and calls its default export. This keeps a
// single source of truth — the same files serve both `npm run dev` and prod.
function devApi(): Plugin {
  const routes: Record<string, string> = {
    "/api/aircraft": "/api/aircraft.ts",
    "/api/route": "/api/route.ts",
    "/api/tle": "/api/tle.ts",
  };
  return {
    name: "skylight-dev-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const rawUrl = req.url ?? "";
        const url = new URL(rawUrl, "http://localhost");
        const modPath = routes[url.pathname];
        if (!modPath) return next();

        const query: Record<string, string> = {};
        for (const [k, v] of url.searchParams.entries()) query[k] = v;

        const shimReq = { query, method: req.method, headers: req.headers };
        const shimRes = {
          statusCode: 200,
          status(code: number) {
            this.statusCode = code;
            return this;
          },
          setHeader(key: string, value: string) {
            res.setHeader(key, value);
            return this;
          },
          json(body: unknown) {
            res.statusCode = this.statusCode;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(body));
            return this;
          },
          send(body: string) {
            res.statusCode = this.statusCode;
            res.end(body);
            return this;
          },
        };

        try {
          const mod = await server.ssrLoadModule(modPath);
          await mod.default(shimReq, shimRes);
        } catch (err) {
          server.config.logger.error(`[dev-api] ${url.pathname} failed: ${String(err)}`);
          if (!res.writableEnded) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "dev api handler threw" }));
          }
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), devApi()],
  resolve: {
    alias: { "@shared": SHARED },
  },
  server: {
    host: true, // expose dev server on the LAN (handy for a phone as remote)
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        control: resolve(__dirname, "control.html"),
      },
    },
  },
});
