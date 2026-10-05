# MASTER_CONTEXT — AI DevFlow Snapshot

Date: 2026-09-30 | Session: S001-foundation | Status: Phase 0

## Product

- Name: AI DevFlow — AI-Powered Developer Collaboration and Project Management Platform
- One-line: SaaS for software teams to plan, track, collaborate, and use AI for real project work.
- Objective: Production-style portfolio demonstrating MERN + WebSockets + AI (RAG, embeddings, tool-calling, controlled agent).
- Target users: developers, project managers, reviewers, workspace owners (see `docs/01-product/TARGET_USERS.md`).
- Problem: Planning + context scattered across issues, docs, comments; AI chatbots detached from project data/actions.
- Value: One workspace where tasks/sprints/docs/discussions are searchable, summarizable, and actionable by AI with permissions + audit.

## Technology

- `DECISION`: Modular monolith first (no microservices/Kafka/K8s unless justified).
- Frontend (planned): React + React Router + Tailwind + shadcn/ui + Lucide + TanStack Query + React Hook Form + Zod + Vitest/RTL + Playwright + Storybook. TypeScript where practical. Redux Toolkit only if justified. Versions: `UNKNOWN — REQUIRES VERIFICATION` (see `docs/13-research/RESEARCH_LOG.md`, task R-001).
- Backend (planned): Node.js + Express.js + MongoDB + Mongoose, layered routes→middleware→controllers→services→repositories. WebSockets: `UNRESOLVED` — Socket.IO vs `ws` (ADR-008 pending research).
- AI (planned): Provider abstraction + LLM API + structured output + streaming + embeddings + vector search + RAG + tool-calling + controlled agent. Provider/model/vector store: `UNRESOLVED` (ADR-005/006/007 pending).
- Testing: unit + component + integration + E2E + AI eval (see `docs/11-testing/TESTING_STRATEGY.md`).
- DevOps: Git/GitHub + Docker + CI/CD; cloud target `UNRESOLVED` (see `docs/12-devops/DEVOPS.md`).

## Architecture (planned, docs-first)

- Frontend: feature-sliced components, URL state for filters, TanStack Query for server state, Context for auth/workspace/theme.
- Backend: REST + OpenAPI, JWT/cookie `UNRESOLVED` (ADR-003 pending), RBAC at workspace/project/resource level.
- DB: MongoDB document model (User, Workspace, Project, Task, Sprint, Comment, etc.).
- AI: retrieval pipeline doc→chunk→embed→vector→retrieve→filter→context→LLM→citations; tools gated by permission + confirmation for destructive ops.
- Realtime: rooms per workspace/project/task, auth + reconnection + reconciliation.
- Deployment: single frontend static + single API + MongoDB Atlas/local + object storage + email `UNRESOLVED`.

## Features (all PLANNED, none implemented)

Auth, workspaces/members, projects, tasks/issues, sprints, Kanban, comments/mentions, notifications, files, dashboards/analytics, realtime, search, docs, AI task generator, AI planner, AI doc generator, discussion summarizer, issue assistant, semantic search, RAG assistant, tool-calling, controlled agent.

## Current Phase

Phase 0 — Foundation (docs-first). See `CURRENT_STATE.md`.

## Current Objective

Establish authoritative docs + roadmap + ADRs, then run version/compatibility research (R-001) before vertical slice 1 (Auth).

## Important Decisions

- D001 modular monolith — see `docs/14-decisions/ADR-000-template.md` / `DECISIONS.md`
- All stack versions pending verification — do not code until R-001 complete.
