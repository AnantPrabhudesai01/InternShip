# USER_WORKFLOWS + Diagrams

Visitor: landing → explore → register/login.
New user: register → verify → onboard → create/join workspace → dashboard.
Owner: workspace → configure → invite → project → configure.
PM: project → backlog → sprint → assign → monitor → analytics.
Dev: assigned task → inspect → work → comment → upload → status → complete.
Reviewer: view → inspect → comment → approve/request changes.
AI user: open assistant → request → context retrieval → cited response → propose tool → confirm (destructive) → execute → audit.

```mermaid
flowchart LR
  V[Visitor] --> R[Register/Login]
  R --> O[Onboard]
  O --> W[Workspace]
  W --> P[Project]
  P --> B[Backlog]
  B --> S[Sprint]
  S --> K[Kanban]
  K --> C[Comment/Mention]
  C --> N[Notify/Realtime]
  N --> AI[AI Assist + Tools]
  AI --> A[Audit]
```
