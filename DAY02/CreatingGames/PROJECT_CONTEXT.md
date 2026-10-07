# READ THIS FIRST - New Session Start Here
> If user says their directory is `D:\Anant\INTERNSHIP\DAY02\CreatingGames`, read this file first. This file is the single source of truth.

## 1. Working Directory
`D:\Anant\INTERNSHIP\DAY02\CreatingGames`
- Empty starter folder (verified 2026-10-05). Do NOT use `C:\Users\anant\Documents\Default Project`.
- All commands must use `workdir="D:\\Anant\\INTERNSHIP\\DAY02\\CreatingGames"`.

## 2. Goal
Build portfolio-grade full-stack 3D game: **NEON RUSH 3D**
- User types everything himself. Teach from scratch.
- Explain every file, every command, every line. What to create, what to install, why.
- Portfolio proper: clean structure, README, live deploy.

## 3. User Level
- Knows HTML/CSS + basic JavaScript. NOT intermediate, NOT expert.
- Needs absolute basics for Node/npm/Vite/React/Express/Mongo.
- Language: simple English, short steps, one task at a time. Wait for `DONE` before next.

## 4. Locked Stack (MERN + Three.js)
- M MongoDB Atlas (free cloud, no local install) + mongoose
- E Express.js API: `POST /api/auth/register`, `POST /api/auth/login`, `GET/POST /api/scores`
- R React (Vite template react) + Three.js (`three` npm package, plain three inside useEffect, NOT react-three-fiber for learning)
- N Node.js v24.14.0 + npm 11.11.1 (already installed) + Vite + JWT (jsonwebtoken + bcryptjs) + cors + dotenv
- Structure:
```
D:\Anant\INTERNSHIP\DAY02\CreatingGames\
  PROJECT_CONTEXT.md (this file)
  client/  // Vite React + three
  server/  // Node Express + mongoose
```

## 5. Time Estimate (told to user)
~16-20 hrs total: Setup 1-1.5h, Three.js game 6-8h, Backend 5-6h, Connect+Leaderboard+Deploy 4-5h. 5-6 days at 3h/day.

## 6. Current Status
- [x] Lesson 0: basics explained, folder confirmed empty
- [ ] Task 1 PENDING: user must run in VS Code terminal in above folder:
  `npm create vite@latest client -- --template react`
  Meaning: npm=installer, vite starter, folder=client, template=react for MERN.
- Next after DONE: teach `client/package.json` line-by-line, then `npm install`, then `npm install three`, then start `index.html` -> `src/` line-by-line.
- Do NOT skip ahead. Do NOT create files for user. Instruct, then wait.

## 7. Teaching Rules for Any New Session
1. Always confirm working directory is `D:\Anant\INTERNSHIP\DAY02\CreatingGames`.
2. Never assume other paths.
3. One small task at a time. Explain each word of each command.
4. Keep responses short and concise but complete for a beginner.
5. Ask for `DONE` + output before continuing.
6. Update this file's Current Status as lessons complete.
