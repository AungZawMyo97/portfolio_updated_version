# Aung Zaw Myo Portfolio

A personal portfolio for Aung Zaw Myo, built with Vite, React, TypeScript, and Tailwind CSS. The site presents professional experience, selected projects, technical expertise, education, and contact options in a restrained editorial style.

## Highlights

- Responsive single-page portfolio with smooth section navigation.
- Warm neutral colors, responsive layouts, keyboard navigation, and reduced-motion support.
- Four featured projects with an expandable list of all projects.
- Static JSON-backed content for projects, tools, experience, and education.
- Contact form integration through EmailJS, loaded only when a message is submitted.
- Lightweight client data loading using the browser `fetch` API.
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
  hooks/             Client-side data loading hooks
  pages/             Route-level page composition
  types/             Shared TypeScript domain types
  assets/            Source-managed images used by the app
public/
  data/              Static JSON content loaded at runtime
  projects/          Project screenshots referenced by public/data/projects.json
```

## Content Management

Portfolio content is intentionally kept in static JSON files so it can be updated without changing component logic:

- `public/data/projects.json`
- `public/data/tools.json`
- `public/data/experiences.json`
- `public/data/education.json`

Project screenshots should be placed in `public/projects/`, then referenced with paths such as `/projects/example.png`.

Toolkit tiles use the `icon` and `category` fields in `tools.json`. Icons are stored in `public/tools/` and sourced from Devicon v2.16.0; the MIT license is included as `public/tools/LICENSE.devicon`.

The first four entries in `projects.json` are featured by default. Shared contact links are defined in `src/data/profile.ts`. Optional demo credentials appear in an expandable panel on a project card.

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
