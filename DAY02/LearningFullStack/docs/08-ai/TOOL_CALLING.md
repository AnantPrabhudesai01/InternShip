# TOOL_CALLING

Tools: getProject, getTasks, getIssues, getSprint, searchDocumentation, searchComments, createTask, updateTask, createSprint, summarizeProject. Each: JSON schema + permissions + validation + audit + errors.

Policy: reads auto (scoped to member workspaces); writes propose→diff→confirm; destructive (delete/close sprint) explicit confirm + undo note where feasible. Never raw DB access. All executions logged to AuditLog with actor/tool/args/result.
