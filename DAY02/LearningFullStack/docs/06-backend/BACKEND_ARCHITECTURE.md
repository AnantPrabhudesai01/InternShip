# BACKEND_ARCHITECTURE

Layers: `routes → middleware → controllers → services → repositories → MongoDB`. No business logic in controllers; no DB in routes.

Planned layout: `src/{routes,models,controllers,services,repos,middleware,utils,config,ws,ai,workers}`.

Cross-cutting: validation (server-side, Zod or Joi — `UNRESOLVED`, decide at VS-01), authN/authZ (RBAC per workspace/project/resource), AppError + centralized handler, rate-limit, logging (pino TBD), config via env, audit log writes.

Realtime: gateway with auth, rooms `workspace:{id} project:{id} task:{id}`, events in WEBSOCKET_EVENTS.md.
Background: in-process first (embeddings, notifications); extract only on evidence.

Each endpoint: OpenAPI + validation + authz + tests.
