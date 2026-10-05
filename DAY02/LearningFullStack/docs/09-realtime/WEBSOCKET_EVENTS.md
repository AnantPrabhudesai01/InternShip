# WEBSOCKET_EVENTS

Rooms: `workspace:{id} project:{id} task:{id} user:{id}`. Auth on connect; membership check on join.

Events: `task.created/updated/moved`, `comment.added`, `notify.created`, `presence.update`, `activity.appended`, `sprint.updated`, `ai.job.*` (TBD).

Contract per event: name, room, payload schema, sender,3755 auth rule, client reconcile (patch query cache, refetch on miss), retry/backoff. Full schemas at realtime slice.
