# Aung Zaw Myo Portfolio

A personal portfolio for Aung Zaw Myo, built with Vite, React, TypeScript, and Tailwind CSS. The site presents professional experience, selected projects, technical expertise, education, and contact options in a restrained editorial style.

## Highlights

- Responsive single-page portfolio with smooth section navigation.
- Dark charcoal/navy surfaces, editorial serif typography, and a portrait-led hero following `DESIGN.md`.
- Responsive layouts, keyboard navigation, visible focus states, and reduced-motion support.
- Four featured projects with an expandable list of all projects.
- JSON-backed content rendered into HTML at build time for projects, tools, experience, and education.
- Contact form integration through EmailJS, loaded only when a message is submitted.
- Prerendered HTML with React hydration; the core portfolio is readable without JavaScript.
- Canonical URL, Open Graph and Twitter metadata, JSON-LD profile data, sitemap, and robots.txt.
- Type-safe React components with shared portfolio domain types.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- EmailJS

## Project Structure

```text
src/
  components/        Reusable UI sections and shared presentation components
  data/              Shared profile and contact details
  hooks/             Accessible scroll-reveal behavior
  pages/             Route-level page composition
  types/             Shared TypeScript domain types
public/
  data/              JSON content imported during the build
  profile/           Portrait used by the hero
  projects/          Project screenshots referenced by public/data/projects.json
```

## Content Management

Portfolio content is intentionally kept in static JSON files so it can be updated without changing component logic:

- `public/data/projects.json`
- `public/data/tools.json`
- `public/data/experiences.json`
- `public/data/education.json`

Project screenshots should be placed in `public/projects/`, then referenced with paths such as `/projects/example.png`.

The hero uses `public/profile/dark-portfolio.png`. Shared design tokens, responsive layouts, and motion preferences live in `src/index.css`; `DESIGN.md` defines the visual direction. Cormorant Garamond and DM Sans are hosted locally in `public/fonts/`, with their SIL Open Font Licenses, so rendering does not depend on a third-party font service.

Toolkit tiles use the `icon` and `category` fields in `tools.json`. Icons are stored in `public/tools/` and sourced from Devicon v2.16.0; the MIT license is included as `public/tools/LICENSE.devicon`.

The first four entries in `projects.json` are featured by default. Shared contact links are defined in `src/data/profile.ts`. Optional demo credentials appear in an expandable panel on a project card. Rebuild and redeploy after editing the JSON files so the initial HTML and interactive content stay in sync.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Validation

Run these before committing changes:

```bash
npm run lint
npm run build
```

There is no test runner configured yet. Current validation relies on ESLint, TypeScript checks through the build command, and manual browser inspection.

## Configuration Notes

The contact form uses EmailJS service, template, and public key values from the contact component. Do not commit private secrets or local environment files. `.env`, `.env.*`, generated builds, caches, coverage output, and deployment metadata are ignored by Git.

## Deployment

This project builds to static files in `dist/`, making it suitable for Vercel, Netlify, GitHub Pages, or any static hosting provider.

## SEO and prerendering

The production URL is `https://azmnostalgic.from-mm.dev/`. Update `src/data/site.ts` if the domain, page title, description, or social image changes. `plugins/seo.ts` uses that single configuration to generate the canonical link, search and social metadata, `WebSite` / `ProfilePage` / `Person` JSON-LD, `robots.txt`, and `sitemap.xml`. The sitemap lists only the homepage because section anchors are not separate pages.

`npm run build` compiles the browser app, then `scripts/prerender.mjs` renders the same React components into `dist/index.html` through `src/entry-server.tsx`. No production Node server is required. React hydrates this HTML to enable the menu, project expansion, and contact form. With JavaScript disabled, the core content and email link remain usable.

Use `npm run preview` to inspect the production HTML; `npm run dev` still uses the normal Vite development flow. View the page source or disable JavaScript to verify that the featured projects, experience, education, and contact information are present. Browser inspection should also check that hydration produces no console errors.

After deployment, verify the domain in Google Search Console and submit `https://azmnostalgic.from-mm.dev/sitemap.xml`. Use URL Inspection and the Rich Results Test to check the deployed page. Indexing and rich-result display are controlled by search engines and are not guaranteed by the metadata.
