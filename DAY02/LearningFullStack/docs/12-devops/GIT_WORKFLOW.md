# GIT_WORKFLOW — AI DevFlow inside InternShip repo

Repo: `https://github.com/AnantPrabhudesai01/InternShip` | Root: `D:\Anant\INTERNSHIP` | Project dir: `DAY02\LearningFullStack`
Evidence (2026-09-30): branches `DAY02, Day_01, main`; remote `origin`; `DAY02` has `M DAY01/...App.tsx` + `?? DAY02/LearningFullStack/...` (40 docs files). No `.gitignore` at root.

## 1. Model — Scoped GitHub Flow

- `main` = always portfolio-ready. Never commit directly.
- `DAY02` = integration for Day-2 work only. Merge features here, then PR to `main`.
- `feature/devflow-<slice>` = one vertical slice, one branch. Examples:
  - `feature/devflow-foundation` (current docs)
  - `feature/devflow-auth`, `feature/devflow-workspace`, `feature/devflow-project`, `feature/devflow-task-kanban`, `feature/devflow-comments-notifs`, `feature/devflow-files`, `feature/devflow-ai-rag-tools`
- `ASSUMPTION`: single-dev portfolio, no GitFlow `develop/release/hotfix` needed. `DECISION` D003 (this file): use this.

## 2. Separation Rules (everything separate)

1. Branch per slice. Never mix Auth + Workspace in one branch.
2. Folder per concern: `DAY02/LearningFullStack/{frontend,backend,ai,docs,scripts,tests}`. Never touch `DAY01/` from a `devflow-*` branch.
3. Scoped adds only. Never `git add .` at repo root. Always:
   `git add DAY02/LearningFullStack/<path>`
4. One PR = one slice passing Definition of Done (§40). Squash-merge to keep `DAY02`/`main` clean.
5. Docs sync in same branch as code that changed the contract (API→OpenAPI, DB→DBML, etc.).

## 3. WHEN to run WHAT

| When | What |
|---|---|
| Start slice | `checkout DAY02, pull, create feature branch` |
| Daily / logical unit | `status → add scoped → commit` (docs/impl/tests separately) |
| Push for backup/review | `push -u origin feature/...` (first time), then `push` |
| Slice Done (§40) | `push, gh pr create → merge to DAY02 → delete branch` |
| Release to portfolio | PR `DAY02` → `main` after 1+ slices green |
| Dirty tree with other day's file | `stash` or `restore`, never commit DAY01 into devflow branch |

## 4. Exact Commands (PowerShell 5.1, run from repo root `D:\Anant\INTERNSHIP`)

See §5 for current cleanup. General cycle:

```powershell
# 0. Always start at root, confirm clean
git rev-parse --show-toplevel
git status --short
git branch --show-current

# 1. Sync integration branch
# NOTE 2026-09-30: origin/DAY02 does NOT exist yet (only origin/main, origin/Day_01).
# So `git pull origin DAY02` fails with "couldn't find remote ref" until first `git push -u origin DAY02`.
git checkout DAY02
git pull origin DAY02
# If above fails with missing ref → run: git push -u origin DAY02 (creates remote), then pull works after.

# 2. New feature branch (one slice)
git checkout -b feature/devflow-auth

# 3. Work, then scoped commit (repeat; separate docs/impl/tests)
git status --short
git add DAY02/LearningFullStack/docs/06-backend/BACKEND_ARCHITECTURE.md
git commit -m "feat(devflow-auth): backend auth design"
git add DAY02/LearningFullStack/backend/src/routes/auth.js
git commit -m "feat(devflow-auth): login route + validation"

# 4. Push (first time sets upstream)
git push -u origin feature/devflow-auth

# 5. Open PR to DAY02 (needs gh CLI; else use GitHub web)
gh pr create --base DAY02 --head feature/devflow-auth --title "feat(devflow-auth): <slice>" --body "Closes: VS-01. Done per §40."

# 6. After merge approval, update + cleanup
git checkout DAY02
git pull origin DAY02
git branch -d feature/devflow-auth
git push origin --delete feature/devflow-auth
```

## 5. Current Cleanup (do this now, in order)

You have `M DAY01/...` + 40 untracked devflow docs on `DAY02`. Keep them separate:

```powershell
# A. Inspect
git status -uall --porcelain=v1 | Select-Object -First 50

# B. Park DAY01 change (do NOT commit it into devflow)
git stash push -m "park-day01-tictactoe" -- DAY01/Projects/Tic-Tac-Toe/src/App.tsx
# Later, on correct branch: git stash pop

# C. Commit foundation on its own branch (private files auto-skipped by .gitignore)
git checkout DAY02
git checkout -b feature/devflow-foundation
git add DAY02/LearningFullStack/README.md DAY02/LearningFullStack/docs DAY02/LearningFullStack/.gitignore
git status --short
# Expect: NO SESSION_HANDOFF/SESSION_LOG/INCONSISTENCIES/ACTIVE_PLAN in list. Verify:
git check-ignore -v DAY02/LearningFullStack/docs/00-ai-memory/SESSION_LOG.md DAY02/LearningFullStack/docs/00-ai-memory/ACTIVE_PLAN.md
git commit -m "docs(devflow): foundation memory+product+arch per MASTER S48"
git push -u origin feature/devflow-foundation
gh pr create --base DAY02 --head feature/devflow-foundation --title "docs(devflow): foundation" --body "Phase 0 docs-first, no code. Private memory gitignored per D004."
```

If `gh` missing: push branch, then open PR on `github.com/AnantPrabhudesai01/InternShip` web: base `DAY02`, compare `feature/devflow-foundation`.

## 6. Commit Message Format

`type(devflow-<slice>): subject` — types: `feat, fix, docs, test, refactor, chore, sec`.
Separate commits: `docs()`, `feat()`, `test()`. Never `feat: auth + workspace + fixes`.

## 7. .gitignore + Private Memory (D004 — local-only, off GitHub)

Nested `DAY02/LearningFullStack/.gitignore` covers `node_modules, .env, dist, coverage` + PRIVATE:
`SESSION_HANDOFF.md, SESSION_LOG.md, INCONSISTENCIES.md, ACTIVE_PLAN.md`.

- WHY private: they prevent hallucination locally (full context, working notes, `D:\` paths) but pollute portfolio. Model reads them from disk; GitHub doesn't need them.
- WHAT happens: `git add .../docs` auto-skips ignored files; `git status --short` won't show them as `??`; `git check-ignore -v <path>` proves it. Never `git add -f` them.
- PUBLIC tracked: `START_HERE, MASTER_CONTEXT, CURRENT_STATE, DECISIONS` + `01-product/`–`15-portfolio/` + ADRs. Fresh clone reconstructs from these; missing private → mark UNKNOWN.
- See `INCONSISTENCIES.md` INC-001.

## 8. Next After Foundation

1. Merge `feature/devflow-foundation` → `DAY02`.
2. `feature/devflow-research-r001` for version research (docs-only).
3. `feature/devflow-auth` for VS-01 (needs ADR-003). Each with own branch/PR.

## 9. Command Reference — WHY + WHAT HAPPENS

| Command | WHY you run it | WHAT happens if you do |
|---|---|---|
| `git rev-parse --show-toplevel` | Confirm you are in `D:/Anant/INTERNSHIP`, not a sub-shell, before scoped adds | Prints root path; no changes. If wrong path, you risk `git add .` polluting DAY01 |
| `git status --short` | See dirty vs untracked before any commit; catch DAY01 leakage early | Lists `M` (modified) + `??` (untracked). No changes. Ignored memory files hidden |
| `git branch --show-current` | Confirm source branch (must be `DAY02` or `feature/...`, never `main` directly) | Prints name; no changes |
| `git checkout DAY02` | Move to integration branch to base new work on latest | Switches files on disk to DAY02 state. Fails if uncommitted changes conflict → stash first |
| `git pull origin DAY02` | Sync others' merges; avoid diverging | Fetches + merges remote. May create merge conflict → resolve, then commit |
| `git checkout -b feature/devflow-X` | Isolate one slice; everything separate per your rule | Creates + switches to new branch. No remote yet until push |
| `git add DAY02/LearningFullStack/<path>` | Stage ONLY this project; never root `add .` | Stages that path (ignored private files auto-skipped). Wrong path → `git restore --staged <path>` to unstage |
| `git commit -m "type(...): ..."` | Snapshot staged work with searchable history | Creates commit locally only. Nothing on GitHub until push |
| `git push -u origin feature/...` | Backup + enable PR; `-u` links local→remote once | Uploads branch; sets upstream. Next times just `git push` |
| `git push` | Upload later commits on same branch | Uploads; no new upstream needed |
| `gh pr create --base DAY02 ...` | Request review/merge; enforces Done gate | Opens PR on GitHub. Without `gh`, push then use web UI |
| `git stash push -m "..." -- <path>` | Park DAY01 change without committing into devflow | Removes change from working tree into stash. Recover with `git stash pop` on correct branch |
| `git check-ignore -v <path>` | Prove private memory is ignored before committing | Prints ignore rule + pattern, or empty (not ignored). No changes |
| `git branch -d feature/...` | Delete merged local branch to stay clean | Deletes locally. Fails if unmerged → use `-D` only if you intend to discard |
| `git push origin --delete feature/...` | Delete remote branch after merge | Removes from GitHub. Local PR shows Merged |
