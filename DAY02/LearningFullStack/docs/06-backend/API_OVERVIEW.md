# API_OVERVIEW (OpenAPI lives here at VS-01)

Base: `/api/v1`. Auth: Bearer/cookie `UNRESOLVED` (ADR-003). Format: JSON + problem+json errors. Pagination: cursor/page `UNRESOLVED` at design time. Rate limits per route (esp. AI).

Groups: `/auth /workspaces /projects /tasks /sprints /comments /notifications /files /search /docs /ai/*`.

Every endpoint will document method/path/purpose/auth/authz/request/validation/response/errors/rate/example. Implementation↔spec drift is a release blocker (§37).
