# START_HERE — AI DevFlow Session Entry Point

> Read this file first in every new session. Then follow the order below.

## 1. Synchronization Order

1. `docs/00-ai-memory/START_HERE.md` (this file)
2. `docs/00-ai-memory/MASTER_CONTEXT.md`
3. `docs/00-ai-memory/CURRENT_STATE.md`
4. `docs/00-ai-memory/ACTIVE_PLAN.md`
5. `docs/00-ai-memory/DECISIONS.md`
6. `docs/00-ai-memory/SESSION_HANDOFF.md`
7. Relevant architecture docs (`docs/03-system-design/`, `docs/05-frontend/`, `docs/06-backend/`, `docs/07-database/`, `docs/08-ai/`)
8. Relevant source files (`frontend/`, `backend/`, `ai/`)

## 2. Source-of-Truth Hierarchy

1. Current code
2. Current architecture documentation
3. `DECISIONS.md` / ADRs
4. `CURRENT_STATE.md`
5. `MASTER_CONTEXT.md`
6. Research records
7. Session handoff
8. Conversation context

On conflict: record in `docs/00-ai-memory/INCONSISTENCIES.md`, resolve by evidence, update authoritative doc. Never invent.

## 3. Session Command

Owner says: "Read /docs/00-ai-memory/START_HERE.md and synchronize with the project."

You must reconstruct goal, phase, completed/incomplete work, architecture, decisions, unresolved issues, active task, next work — from repo, not chat memory.

## 4. Labels

- `DECISION` — confirmed
- `ASSUMPTION` — unverified, needs validation
- `UNRESOLVED` — open question
- `UNKNOWN — REQUIRES VERIFICATION` — when evidence missing

## 5. Repo Map (2026-09-30)

- `frontend/` — React app (empty, planned)
- `backend/` — Express + Mongoose API (empty, planned)
- `ai/` — provider abstraction, RAG, tools, agent (empty, planned)
- `docs/00-ai-memory/` — persistent memory (SPLIT per D004: `START_HERE, MASTER_CONTEXT, CURRENT_STATE, DECISIONS` tracked + public; `SESSION_HANDOFF, SESSION_LOG, INCONSISTENCIES, ACTIVE_PLAN` local-only gitignored — model reads from disk, GitHub stays clean)
- `docs/01-product/` — vision, PRD, requirements, MVP
- `docs/02-workflows/` — user workflows
- `docs/03-system-design/` — system design + diagrams
- `docs/04-data-flow/` — data flows
- `docs/05-frontend/` — frontend arch + design system
- `docs/06-backend/` — backend arch + API overview
- `docs/07-database/` — DB design + DBML
- `docs/08-ai/` — AI, RAG, tools, agent
- `docs/09-realtime/` — WebSocket contract
- `docs/10-security/` — security architecture
- `docs/11-testing/` — testing strategy
- `docs/12-devops/` — DevOps strategy
- `docs/13-research/` — research log
- `docs/14-decisions/` — ADRs
- `docs/15-portfolio/` — case study
- `scripts/`, `tests/` — tooling, cross-cutting tests

## 6. Current Phase

Phase 0 — Foundation. No code. Docs-first per MASTER prompt §46/§48.
See `CURRENT_STATE.md` and `ACTIVE_PLAN.md`.
