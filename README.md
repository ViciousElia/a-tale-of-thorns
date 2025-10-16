# A Tale of Thorns

A Tale of Thorns is a Markdown-first web-serial: the story is written in Obsidian-flavoured Markdown and served by a small TypeScript viewer. This repository is a public archive for code + story visibility rather than an actively collaborative project. The viewer uses the app router and a tiny local data layer to turn YAML frontmatter + MD mainmatter into navigable, slug-based chapters.

This README explains how the pieces fit together, how to preview locally, and the conventions used for chapters and assets.

---

## What this repo is for
- Host the serialized story as Obsidian-style Markdown, and expose the viewer implementation (TypeScript + bundler) so readers and coders can inspect how the site is built.
- Not intended for broad external contribution; forks and experiments are welcome, but unsolicited PRs will typically not be merged. Open issues only for security or critical problems.

## Quick map of the codebase
- /content
  - All Obsidian-flavoured Markdown files (the chapters) live here.
  - Images and assets referenced by Markdown are kept near the Markdown or under content/assets.
- /app
  - App router (Next.js / Next-style app router or similar) and page routes live here.
  - The navigation uses slug-based routes under /app/p/ (for example, /app/p/[slug]/) — the actual page references are resolved from the local database and then served by reading the corresponding Markdown file.
- /components
  - Presentational and UI components used by the viewer.
- /lib
  - Data-services: the local "database" that reads YAML frontmatter and builds the page metadata index. This is currently local and file-backed; look here to find seeding, queries, and migration logic.
- /util
  - Utility functions used across the app (date handling, slug helpers, markdown-related helpers).
- /public
  - Static assets copied through to the build (icons, fonts, static images).
- package.json, tsconfig.json, bundler config (vite.config.ts / next.config.js) — scripts and build settings.

### How Markdown is organized and parsed
- Each chapter file in /content is split into two concerns:
  - YAML frontmatter: structured metadata used by the local database to provide titles, published dates, slugs, ordering, tags, and other structured fields the viewer needs.
  - MD mainmatter: the actual narrative content parsed with mdx-bundler and remark-obsidian so Obsidian-style features (wikilinks, transclusions, embeds) are supported.
- Parsing pipeline:
  - The local data-service reads frontmatter and stores or indexes metadata in the local DB layer.
  - When a slug route is requested the DB lookup returns the file reference, the file is read, and mdx-bundler + remark-obsidian compiles the mainmatter for rendering.
- Example chapter file (conventional structure)

```markdown
---
title: "Thorns"
published: 2025-10-31
---
# Chapter 4: Thorns
> Epigraph (if present)

## The Thorn
I wasn't prepared for this.
```

### Naming, slugs, and navigation
- Use clear slugs in frontmatter or let the data-service derive slugs from filenames. Navigation in the UI is slug-based under /app/p/ — the UI queries the local DB (in /lib) to get the canonical slug list, metadata, and next/previous navigation.
- Files are served by reference: the DB controls routing decisions and visibility; files themselves live in /content and are loaded/compiled when needed.

### Release cadence & date handling
- New chapters ("chapters") are released on the 5th, 10th, 15th, 20th, 25th, and the last day of each month.
- The repository supports adding chapters ahead of time because the viewer uses the published date and date-handling logic to decide what to surface. You can commit future-dated chapters and the DB/renderer will honor the published field when building feeds or navigation.
- Note: later arcs may call them "episodes", but the current canonical name is "chapters".

## Local setup & common commands
### Requirements
- Node.js LTS (18.x+ recommended)
- npm, pnpm, or yarn
- A modern browser for previewing

### Typical quick start (check package.json for exact script names)
1. Clone
   - git clone https://github.com/ViciousElia/a-tale-of-thorns.git
   - cd a-tale-of-thorns

2. Install
   - npm install
   - or pnpm install / yarn install

3. Dev server
   - npm run dev
   - Visit the dev URL printed by the bundler (commonly http://localhost:3000 or http://localhost:5173)

4. Build for production
   - npm run build
   - Output will typically be in dist/ or .next/ depending on the bundler — check the build logs or package.json.

5. Preview production build
   - npm run preview
   - or: npx serve dist

If your repo uses different script names, open package.json and use those scripts.

## Authoring workflow (how to add a chapter)
- Create a new Markdown file under /content with YAML frontmatter and the chapter body.
- Typical frontmatter fields:
  - title (string)
  - published (YYYY-MM-DD) — used to control release timing
  - draft (boolean) — optional, used to hide incomplete chapters
  - tags, excerpt, slug — optional useful metadata
- Use Obsidian-style wikilinks to connect chapters (e.g. [[chapter-5-thorns]]).
- Place images next to the Markdown file or in content/assets and reference with ![[image.png]] or a relative path consistent with remark-obsidian’s handling.
- Commit ahead: you can set published to a future release date and the viewer will only surface it at the appropriate time due to date-handling logic in /lib.

## Where to look first (for developers or curious readers)
- /content — the story: read chapter Markdown directly.
- /lib — database and data-services: see how frontmatter is indexed and how page metadata is served.
- /app/p/ — page route handling and slug-based navigation.
- /components — rendering building blocks.
- /util — date helpers and other small utilities.
- package.json — available scripts and dependency list (mdx-bundler, remark-obsidian, etc).

## Deployment & routing notes
- The site builds to static assets and can be hosted on Vercel, Netlify, GitHub Pages, etc.
- For SPA-style client routing, configure the host to fallback to index.html (or follow the hosting provider’s SPA routing instructions).
- CI: if you add GitHub Actions it should run install, lint, build, and optionally a static preview.

## Contributing & project intent
- This repository is intentionally public for visibility; it is not intended as a community-maintained project.
- Forks and personal experiments are welcome. Please refrain from opening unsolicited PRs; issues may be opened for critical bugs or security problems.
- If you’d like to contribute narrative edits or technical changes, open an issue first to discuss.

## Notes for maintainers
- Frontmatter ↔ DB: if you change frontmatter fields, update the mapper in /lib so the index can be rebuilt.
- Embeds & wikilinks: mdx-bundler + remark-obsidian are configured for current Obsidian patterns. If you need extra plugins, add them to the bundler config and adjust the build steps.
- Date schedule: the release schedule helpers live in /util; adjust them if you change your cadence.

License & contact
- Maintainer: ViciousElia — the repo is a personal archive and exhibition of the project.
