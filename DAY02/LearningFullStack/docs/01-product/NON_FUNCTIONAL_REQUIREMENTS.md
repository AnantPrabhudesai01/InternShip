# NON_FUNCTIONAL_REQUIREMENTS

- Security: OWASP ASVS-minded, input validation (Zod/server), RBAC per resource, secrets via env, file checks, AI injection/RAG-poisoning mitigations. Re-verify at Auth slice.
- Performance: measure first (bundle, render, API p95, WS fanout); code-split/lazy, query cache, virtualize long lists. No blind memo.
- Accessibility: semantic HTML, keyboard, focus mgmt/restore, ARIA, contrast, reduced motion, tested.
- Responsive: mobile/tablet/desktop/large; define collapse/stack/drawer/bottom-sheet per screen.
- Reliability: retries/fallbacks for AI, reconnection for WS, idempotent writes where needed.
- Observability: structured logs, audit log, token/cost/latency tracking for AI.
- Maintainability: small modules, typed contracts, ADRs, docs sync.

All metrics reported only when measured — never invented.
