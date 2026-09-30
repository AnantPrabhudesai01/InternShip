# DATABASE_DESIGN (MongoDB + Mongoose)

Collections: User, Workspace, WorkspaceMember, Project, Task, Issue (or Task type=`UNRESOLVED`), Sprint, Comment, Notification, Attachment, Document, Activity, AIConversation, AIMessage, EmbeddingReference, AuditLog. Full field/index/validation/lifecycle per collection to be finalized at slice time.

Principles: embed where read-together (e.g., labels on task), reference where shared/authz (members, projects); indexes for (workspace,project,status), text index TBD vs vector store; TTL for ephemeral tokens/notifs TBD.

See `DATABASE_DIAGRAM.dbml`. Sample docs + Mongoose validators land with VS-01.
