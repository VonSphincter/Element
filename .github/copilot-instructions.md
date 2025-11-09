## Purpose

This short guide helps AI coding agents become productive quickly in this repository. It focuses on the concrete, discoverable facts about how the project is structured, how to run and build it, and project-specific conventions you must follow when making changes.

## Quick facts

- Tech: Vite + React + TypeScript + TailwindCSS. PWA support via `vite-plugin-pwa`.
- App code lives in `project 2/` (note the space in the directory name — always quote or escape this path in scripts/CI).
- Run commands from inside `project 2/` (where `package.json` is). Example:

  ```bash
  cd "project 2" && npm install
  cd "project 2" && npm run dev
  cd "project 2" && npm run build
  ```

## Key files and where to look

- `project 2/package.json` — scripts and deps. All developer scripts (dev/build/lint) are defined here.
- `project 2/src/` — application source (notably `App.tsx` and `main.tsx`). UI is heavily Tailwind-based.
- `project 2/vite.config.ts` — important build/runtime configuration:
  - `VitePWA` plugin configuration and manifest.
  - `build.rollupOptions.output.manualChunks` creates `vendor` and `icons` chunks.
  - `optimizeDeps.exclude = ['lucide-react']` — lucide icons are intentionally excluded from pre-bundling.
  - `build.terserOptions` drops console/debug statements in production.
- `project 2/index.css` and `postcss.config.js` / `tailwind.config.js` — Tailwind setup.
- `public/` — public assets used in the PWA and by Vite.
- No `firebase.json` in this repository — hosting is handled externally (for this project we use Hostinger). Do not add Firebase-specific deploy steps unless hosting changes.
- `.github/workflows/` — workflows may be incomplete; `firebase-hosting-merge.yml` exists but currently empty in this workspace.

- `api/` — a minimal Node/Express backend scaffold (new). See `api/index.js`, `api/.env.example`, and `api/README.md`.

## Architecture & patterns (concrete)

- Single-page React app built with Vite. PWA configured in `vite.config.ts` (manifest + auto-update service worker).
- Icons: `lucide-react` is used heavily in `App.tsx`. Because `optimizeDeps.exclude` excludes it, changes to icon import patterns may require clearing Vite cache or adjusting `optimizeDeps`.
- Error handling: `main.tsx` adds a lightweight `ErrorBoundary` and uses `Suspense` with a loading fallback — follow this pattern for top-level error handling.
- External integrations: the app references external video URLs, booking links (`dispatch.me`), `tel:` and `mailto:` links. These are hard-coded in the UI.

## Developer workflows (explicit commands)

- Install and develop (from repo root):

  ```bash
  cd "project 2"
  npm ci      # or npm install
  npm run dev
  ```

- Build for production:

  ```bash
  cd "project 2"
  npm run build
  ```

- Lint:

  ```bash
  cd "project 2"
  npm run lint
  ```

Notes: `npm` commands run in `project 2/` — there is no top-level `package.json` for scripts.

## Project-specific conventions & gotchas

- Directory name contains a space: `project 2`. CI scripts and editors can fail if this is not quoted or escaped.
- Files import extensions explicitly, e.g. `import App from './App.tsx'`. Preserve extension style when moving/renaming files.
- Build removes console/debug statements (see `vite.config.ts`). Don't rely on console logs for production debugging.
- When adding or upgrading packages that affect the Vite pre-bundling step (esbuild/optimizeDeps), update `vite.config.ts` as needed and clear Vite cache.
- PWA icons and service worker assets are defined in `vite.config.ts` and `public/` — update both when adding icons.

## CI / deployment notes (what I observed)

- README says there is a GitHub Actions workflow for building a Docker image and deploying to Tencent Kubernetes Engine, but I couldn't find a complete workflow file — double-check `.github/workflows/` in the repo or remote branches.
- This repo does not use Firebase Hosting. Hosting is expected to be handled externally (Hostinger). The included CI workflow now only builds the app and uploads the `dist` artifact; deployment should be implemented separately for your hosting provider.

## Concrete examples to reference

- To change how icons are chunked, edit `project 2/vite.config.ts` -> `build.rollupOptions.output.manualChunks` and consider `optimizeDeps.exclude` for pre-bundling behavior.
- To update the PWA manifest, edit the `VitePWA` section in `project 2/vite.config.ts` (name/short_name/icons).
- For top-level error handling or lazy-loading patterns, mirror `project 2/src/main.tsx` which wraps `<App />` with `ErrorBoundary` and `Suspense`.

- Backend scaffold: `api/index.js` exposes two endpoints:
  - `GET /ping` — basic liveness check
  - `GET /db-time` — runs `SELECT NOW()` against the MySQL DB using env vars `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS`.
  - See `api/.env.example` for environment variable names and `api/README.md` for local run instructions.

## What not to assume

- There are no tests, CI checks, or working GitHub Actions included here by default — assume you need to add them if required.
- Do not assume Firebase or other cloud configs are enabled just because `firebase.json` or `.github` exist.

If any of these notes are incomplete or you want the file expanded with examples for PR templates, codeowners, or testing conventions, tell me which area to expand next.
