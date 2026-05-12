# Repository Guidelines

## Project Structure & Module Organization

This is a Vite React portfolio app written in TypeScript. Application code lives in `src/`: `main.tsx` boots React, `App.tsx` defines routing, `pages/` contains route-level views, and `components/` contains reusable UI sections such as `Hero`, `Projects`, and `Navbar`. Source-managed images are in `src/assets/`. Public runtime assets are in `public/`, including project data at `public/data/projects.json` and project screenshots in `public/projects/`. Built output goes to `dist/` and should not be edited directly.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite development server with hot reload.
- `npm run build`: run TypeScript project checks, then create a production build in `dist/`.
- `npm run lint`: run ESLint over the repository.
- `npm run preview`: serve the production build locally for final inspection.

Run commands from the repository root.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep component files in PascalCase, for example `ExperienceTimeline.tsx`; use camelCase for functions, variables, and state names. Match the existing style: 2-space indentation, double quotes in app source, semicolons, and explicit prop types for reusable components. Prefer small helper functions for repeated logic, such as link validation or data fetching. Styling is primarily Tailwind utility classes, with shared global styles in `src/index.css` and `src/App.css`.

## Testing Guidelines

No test framework or `npm test` script is currently configured. For now, validate changes with `npm run lint` and `npm run build`, then manually inspect affected pages through `npm run dev` or `npm run preview`. If tests are added later, colocate them near the related component using a clear pattern such as `ComponentName.test.tsx`, and add the test command to `package.json`.

## Commit & Pull Request Guidelines

Recent commit history uses short, imperative summaries, often with prefixes like `add:` or `update:`. Follow that style, for example `add: add project screenshot` or `update: refine hero layout`. Pull requests should include a concise description, screenshots or screen recordings for visual changes, validation commands run, and any related issue or deployment note.

## Security & Configuration Tips

Do not commit secrets, API keys, or local environment files. Static project metadata can live in `public/data/projects.json`; keep image paths stable because components load them at runtime.
