# DECISIONS — Confirmed Decision Index

> Full records in `docs/14-decisions/ADR-*.md`. Labels: DECISION / ASSUMPTION / UNRESOLVED.

## DECISION D001 — Modular monolith first (2026-09-30, S001)

- Context: portfolio, single dev, no scale evidence.
- Decision: single frontend + single API + MongoDB; no microservices/Kafka/K8s/event-sourcing.
- Reason: MASTER §43; lower ops cost, clearer interviews.
- Consequences: must enforce module boundaries (routes→services→repos; feature folders).
- Status: Accepted.

## DECISION D002 — Docs-first, incremental vertical slices (2026-09-30, S001)

- Decision: no app code until R-001 + ADRs; then Auth→Workspace→Project→Task→Kanban→Comments→Notifications→Files→Analytics→Realtime→AI.
- Reason: MASTER §39/§40/§48.
- Status: Accepted.

## DECISION D004 — Split memory: public portfolio vs local-only anti-hallucination (2026-09-30, S002)

- Context: owner requires context/session files NOT on GitHub; MASTER §3 says repo is memory.
- Decision: track `START_HERE, MASTER_CONTEXT, CURRENT_STATE, DECISIONS` + product/arch/ADRs; gitignore `SESSION_HANDOFF, SESSION_LOG, INCONSISTENCIES, ACTIVE_PLAN` (see `.gitignore`, `INCONSISTENCIES.md` INC-001).
- Reason: model reads ignored files locally (no hallucination loss); GitHub stays portfolio-clean.
- Consequences: fresh clone lacks private logs → must mark UNKNOWN, reconstruct from public snapshots + code. Never `git add -f` private files.
- Status: Accepted.

## ASSUMPTIONS (require R-001 verification)

- A001: React + TS + Router + Tailwind + shadcn + TanStack Query + RHF + Zod preferred (§44 default, not immutable).
- A002: Express + Mongoose layered backend.
- A003: Provider-abstracted LLM with RAG + tools + gated agent.

## UNRESOLVED (need ADR + research)

- U001 auth token strategy (ADR-003) | U002 state-mgmt split (ADR-002) | U003 data modelling (ADR-004)
- U004 AI provider/model (ADR-005) | U005 RAG/vector (ADR-006/007) | U006 WS lib (ADR-008)
- U007 file storage (ADR-009) | U008 deploy target (ADR-010) | U009 all package versions
