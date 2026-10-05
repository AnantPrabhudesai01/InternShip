# PRD — AI DevFlow

## 1. What / Why / Who

- What: workspace-based SaaS: auth, workspaces/members, projects, backlog/tasks/issues, sprints, Kanban, comments/mentions, notifications, files, dashboards, realtime, docs + AI (generator, planner, summarizer, semantic search, RAG assistant, tools, gated agent).
- Why: reduce planning overhead + context loss; make AI useful via retrieval + safe actions.
- Who: developers, PMs, reviewers, owners (see TARGET_USERS/PERSONAS).

## 2. Major Workflows

Visitor→register→onboard→workspace→project→backlog→sprint→Kanban→comment→upload→notify→analytics→AI assist. See `docs/02-workflows/USER_WORKFLOWS.md`.

## 3. Functional Requirements

Summary; detail in FUNCTIONAL_REQUIREMENTS.md: auth+verification, RBAC, CRUD for workspace/project/task/sprint/comment/doc, mentions, notifications, uploads, search, realtime events, AI endpoints with rate/cost limits + audit.

## 4. Non-functional

Security (OWASP), perf (measured), a11y (WCAG-minded), responsive (mobile→large desktop), test layers + AI eval, observability (logs/audit). See NON_FUNCTIONAL_REQUIREMENTS.md.

## 5. Constraints / Risks / Out-of-scope

- Constraints: single dev, portfolio scope, modular monolith, docs↔code sync.
- Risks: AI hallucination/cost/prompt-injection/RAG poisoning; realtime scale; scope creep.
- Out-of-scope (MVP): billing, SSO/SAML, advanced analytics ML, multi-region, native apps. Changes need ADR + MVP_SCOPE update.

## 6. MVP

See MVP_SCOPE.md: Auth→Workspace→Project→Task/Kanban→Comments/Notifications→Files→Realtime→AI (in that dependency order).
