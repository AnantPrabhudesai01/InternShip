# SECURITY

AuthN/Z: RBAC (owner/admin/member/viewer TBD), per-resource checks, session/JWT-cookie `UNRESOLVED` (ADR-003, OWASP re-check). Passwords: argon2/bcrypt `UNRESOLVED` + strength rules. Validation server-side always. Rate-limit (esp. auth/AI). Upload: type/size caps, scan TBD. Secrets env-only. XSS/CSRF/injection per OWASP. Audit: auth/role/tool-write events. AI: injection filtering, tenant-scoped RAG, tool allowlist, confirm-destructive, PII redaction TBD. Review gate per slice (§40/§42).
