# MVP_SCOPE

## In (dependency order)

1. Auth + onboarding + dashboard shell
2. Workspace + invites/roles
3. Project CRUD
4. Task/Issue + Kanban + validations + authz
5. Comments/mentions + notifications + realtime
6. Files (scoped types/sizes)
7. Dashboards/analytics (basic)
8. Semantic search + RAG assistant + generators + tools/agent (gated)

## Out (v1)

Billing, SSO/SAML, native apps, advanced ML analytics, multi-region, complex multi-LLM orchestration.

## Slice Rule

Each: DESIGN→ARCH→IMPL→TEST→REVIEW→DOCS→COMPLETE per §40. Scope creep needs ADR + doc update.
