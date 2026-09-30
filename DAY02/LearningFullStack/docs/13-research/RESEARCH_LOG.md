# RESEARCH_LOG

Template per entry: Date / Question / Why / Sources / Version / Findings / Decision / Impact.

## R-001 QUEUE (all `UNKNOWN — REQUIRES VERIFICATION`, official sources only)

- [x] React current version (2026-09-30, S004)
- [x] Node LTS vs Current (2026-09-30, S004)
- [x] Express + Mongoose (2026-09-30, S004)
- [ ] Router (React Router v7 compat with React 19 — pending)
- [ ] Tailwind + shadcn/ui reqs | TanStack Query | RTK | RHF + Zod | Storybook | Vitest | Playwright
- [ ] WS: Socket.IO vs ws (auth/rooms/reconnect)
- [ ] AI providers/embeddings/vector (Atlas Vector/pgvector/dedicated)/RAG/tool/agent patterns
- [ ] OWASP auth/session + upload guidance | OpenAPI tooling | deploy options

## R-001-01 | 2026-09-30 | React latest stable?

- Question: React latest stable for new SPA?
- Why: need version pin before `npm init` frontend; React 18 vs 19 breaking (compiler, Server Components, memo changes).
- Sources: `https://react.dev/versions` (Latest: 19.2), `https://www.npmjs.com/package/react` (19.2.8 latest tag, 45M weekly), `https://versionlog.com/react` (19.2.8 released 21 Jul 2026).
- Version: `DECISION` pin `react@19.2.8`, `react-dom@19.2.8` (stable Latest channel, MIT).
- Findings: 19.x stable since Dec 2024; 19.3 canary adds View Transitions/Fragment Refs but unreleased — do NOT use. 18.3.1 still security-supported but old.
- Decision: use 19.2.8; verify `react-router`, `TanStack Query` peer compat for React 19 before init.
- Impact: frontend base; ADR-001; interview: why 19 over 18 (stable + security backports, no fixed EOL).

## R-001-02 | 2026-09-30 | Node LTS vs Current for Express API?

- Question: which Node line for backend dev + deploy?
- Why: Current has newest V8/npm but short support; LTS required for portfolio stability.
- Sources: `https://nodejs.org/en/blog/release` (v24.20.0 Latest LTS, v26.8.1 Latest Release, Aug 26 2026), `https://nodejs.org/en/download/archive/` (v24.x Krypton LTS, v22.x Jod LTS, v26.x Current).
- Version: `DECISION` dev + deploy on `Node 24.x LTS (v24.20.0)`, npm 11.x bundled; avoid v26 Current for now.
- Findings: v26.8.1 Current (npm 11.19, V8 14.6); v24 LTS gets security + maintenance; v25/v23 EOL.
- Decision: `.nvmrc`/`engines` pin Node 24; CI tests on 24.
- Impact: backend + DevOps (ADR-010); interview: LTS vs Current tradeoff.

## R-001-03 | 2026-09-30 | Express latest stable?

- Question: Express 4 vs 5 for new API on Node 24?
- Why: v5 breaking (promise handling, path regex, `res.redirect` XSS fix); must pick supported line before routes.
- Sources: `https://expressjs.com/en/blog/2025-03-31-v5-1-latest-release` (5.1 default ACTIVE Mar 2025), `https://www.npmjs.com/package/express` (5.2.1 latest, 4.21.2 legacy), OSV audit 2026-08-29 (5.2.1 patched CVE-2024-43796/29041).
- Version: `DECISION` `express@5.2.1` (ACTIVE, MIT, requires Node 18+ → OK on Node 24).
- Findings: 5.x stable since Sep 2024; 4.x maintenance only, EOL clock started. 5.2.1 fixes open-redirect/XSS.
- Decision: all new routes on v5; check middleware compat (body-parser built-in, query parser changes) at VS-01.
- Impact: BACKEND_ARCHITECTURE + API; ADR-010; interview: why v5 (security + promise support).

## R-001-04 | 2026-09-30 | Mongoose + Mongo compat?

- Question: Mongoose line compatible with Atlas/local Mongo 6/7/8 on Node 24?
- Why: schema/validation layer; wrong major breaks transactions/change-streams.
- Sources: `https://mongoosejs.com/` (v9.10.3 latest), `https://github.com/Automattic/mongoose/blob/master/docs/compatibility.md` (8.x→^8.7/^9, 7.x→^7.4/^8/^9, 6.x→^7/^8/^9), `https://mongoosejs.com/docs/version-support.html` (8.x maintained to Feb 2026, 9.0 Nov 2025).
- Version: `DECISION` `mongoose@^9.10.3`, target Mongo 7.x/8.x (Atlas free tier compatible).
- Findings: v9 needs Node 16+ → OK; driver supports replica-set transactions required for sprints/bulk writes.
- Decision: pin ^9, verify Atlas vector-search compat separately in ADR-007.
- Impact: DATABASE_DESIGN + ADR-004; interview: ODM vs driver tradeoff.

## R-001-05 | 2026-09-30 | React Router version + React 19 compat?

- Question: which Router line works with React 19.2.8 in library mode (no framework lock-in)?
- Why: routing + URL state for filters/sort/page/search; v6→v7→v8 baselines differ.
- Sources: `https://reactrouter.com/` (v7 bridges 18→19; v8 needs Node 22+/React 19+/ESM-only), `https://www.npmjs.com/package/react-router-dom` (7.18.3 latest Aug 2026), changelog 7.14/7.7 (React 19 NODE_ENV fix #12578).
- Version: `DECISION` `react-router@7.18.3` (`react-router-dom` re-export), library mode `createBrowserRouter + RouterProvider`.
- Findings: v7 non-breaking from v6, React 19 supported; v8 modern baseline too strict for portfolio now. CVE-2025-31137 patched in 7.4.1+ (Express adapter spoof) — use 7.18.3.
- Decision: stay v7 library, defer framework features; verify data-router loaders at VS-01.
- Impact: FRONTEND_ARCHITECTURE + ADR-001; interview: why library over framework.
