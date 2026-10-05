# FRONTEND_ARCHITECTURE

Stack: React + Router + Tailwind + shadcn/ui + Lucide + TanStack Query + RHF + Zod (+ RTK only if justified) + Storybook + Vitest/RTL + Playwright. TS where practical. Versions `UNKNOWN — REQUIRES VERIFICATION`.

## Structure (planned)

`src/{app(router,providers),pages,features(auth,workspace,project,board,sprint,comments,notifications,files,analytics,ai),components/ui,hooks,lib(api-client,query-keys,ws),stores,styles,tokens}`

## State

- Local: modal/tab/form/dropdown (useState/useReducer).
- URL: filters/sort/page/search (Router search params — shareable).
- Global client: auth/session, workspace, theme (Context; RTK only if cross-feature updates justify).
- Server: tasks/projects/users/comments/notifs via TanStack Query (cache, optimistic Kanban moves, invalidation on WS events).
- Realtime: WS → query cache patch + refetch fallback.

## React Concepts (learn-by-building)

JSX/props/children, conditional/lists/keys, events/forms (RHF+Zod), lift/compose, useState/Effect/Ref/Memo/Callback/Reducer, Context, custom hooks, memo, ErrorBoundary, Suspense/lazy/split, Transition/Deferred, Router + URL state, optimistic + realtime, a11y/perf. Each only when slice needs it, with bottleneck-first optimization.

## UX States

Every page: loading/skeleton, empty, error (retry), success, responsive (drawer/bottom-sheet), a11y focus.
