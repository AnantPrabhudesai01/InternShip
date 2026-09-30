# ROADMAP_TIMELINE — AI DevFlow Phase Gates (model must not skip)

> Binding order. No code before gates pass. Each phase needs branch + PR + Done check.

## P0 Foundation — DONE (72b1a02, PR #1; 545f3de, PR #2 MERGED)

Docs-first per MASTER §46/§48. Output: memory + product + arch + GIT_WORKFLOW + D004/D005.

## P1 R-001 Research — IN PROGRESS (`feature/devflow-research-r001`)

Gate to pass before any `npm init`: every row in `docs/13-research/RESEARCH_LOG.md` has official source + version + decision.
Done: React 19.2.8, Node 24 LTS, Express 5.2.1, Mongoose 9.x. TODO: Router, Tailwind/shadcn, Query, RHF/Zod, Storybook/Vitest/Playwright, WS, AI/vector/RAG, OWASP/OpenAPI/deploy.
Rule: `UNKNOWN — REQUIRES VERIFICATION` blocks init.

## P2 ADRs 001–010 — BLOCKED on P1

One ADR per decision (frontend, state, auth, Mongo, AI provider, RAG, vector, WS, files, deploy). Gate: ADRs accepted → update MASTER_CONTEXT/CURRENT_STATE.

## P3 Vertical Slices — BLOCKED on P2 (one branch each, strict order)

VS-01 Auth → VS-02 Workspace → VS-03 Project → VS-04 Task/Kanban → VS-05 Comments/Notifs → VS-06 Files → VS-07 Analytics → VS-08 Realtime → VS-09 AI generators → VS-10 Semantic/RAG → VS-11 Tools/Agent.
Branch: `feature/devflow-<slice>`. Per slice: DESIGN→ARCH→IMPL→TEST→REVIEW→DOCS→COMPLETE (§40). Docs sync same PR (§37). Never mix slices.

## P4 Hardening + Portfolio — BLOCKED on P3

E2E green, AI eval measured, security review, perf measured (no invented numbers), CASE_STUDY filled, `DAY02` → `main` release PR.

## Model Constraint

Before any action, read `START_HERE.md` → check this timeline → confirm current phase gate. If gate unmet, stop and complete gate. Log deviations in `ERROR_LOG.md` (local-only).
