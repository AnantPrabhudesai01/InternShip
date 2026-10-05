# FUNCTIONAL_REQUIREMENTS

FR-AUTH: register/login/logout, verify, reset, session, RBAC.
FR-WS: workspace CRUD, invite by email/role, member list/remove.
FR-PROJ: project CRUD per workspace, member roles.
FR-TASK: task/issue CRUD, assignee, labels, priority, status, due dates.
FR-SPRINT: create/start/close, capacity, burndown source data.
FR-KANBAN: columns (Todo/InProgress/Review/Done), drag-drop with optimistic update + server reconcile.
FR-COMMENT: threaded, mentions → notifications.
FR-NOTIF: in-app + realtime; read/unread.
FR-FILE: upload/list/attach to task, type/size limits, virus-scan `UNRESOLVED` (ADR-009).
FR-SEARCH: keyword + semantic; filters in URL state.
FR-DOC: project docs CRUD, chunked for RAG.
FR-AI: generators, summarizer, RAG Q&A (citations), tools (read vs write-gated), agent loop with permission+confirm+audit, rate/cost caps.
FR-RT: task/comment/notify/presence/activity events (see WEBSOCKET_EVENTS.md).
FR-AUDIT: every tool write + auth/role change logged.

Validation + authz on every endpoint; OpenAPI kept in sync.
