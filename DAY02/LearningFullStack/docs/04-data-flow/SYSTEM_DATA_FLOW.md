# SYSTEM_DATA_FLOW

## Standard Request

Browser→React→TanStack Query→API client→Express route→middleware(auth/validate/rate)→controller→service→repo→MongoDB→response→cache update→render. Error: typed AppError→middleware→problem+json; audit on writes.

## AI Request / Streaming / RAG

Prompt→guardrails→retrieve (embed query→vector top-k→filter)→context build→LLM (stream SSE)→citations→persist conversation. Fail: retry once → fallback message, log latency/tokens.

## WebSocket

Connect (auth)→join rooms (workspace/project/task)→events→optimistic UI→server reconcile→presence/activity. Reconnect with backoff + resync query.

## Upload / Notify

Signed upload→validate type/size→store→attach doc→notify rooms→in-app + realtime.

Each slice will add input/validation/authz/transform/persist/external/response/cache/error/log/audit tables.
