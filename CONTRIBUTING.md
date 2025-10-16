# Contributing to A Tale of Thorns

Thank you for looking into contributing. This repository is primarily a public archive of a Markdown-first web-serial and a compact, opinionated story viewer. The project is set up to make the content and the engine visible and inspectable; it is not maintained as a broad community project. That said, high-quality contributions that respect the repo’s content ownership and the maintainer’s time are welcome.

This document explains what is open for contribution, how to submit changes, expectations for proof-of-build, and a few suggested tasks if you want to help improve the engine.

## Table of contents
- [Long-term goal](#long-term-goal)
- [Pull requests: requirements and process](#pull-requests-requirements-and-process)
- [Forks and using your own content](#forks-and-using-your-own-content)
- [Local development & build checklist](#local-development--build-checklist)
- [Contact & maintainers](#contact--maintainer)

## Long-term goal
The project aims to be a small, reusable story engine built around Markdown-first workflows (Obsidian-style). The long-term idea is a portable structure and set of utilities that make it easy to build and re-use serial storytelling sites with minimal friction.

Suggested tasks (good first issues)

- Dynamic database structure at build time
  - Current: static index derived at seed time.
  - Improvement: derive a dynamic DB schema/structure at build time based on the full set of frontmatter fields (and their types) present in /content. This would allow flexible metadata, optional fields, and new taxonomies without manual mapper updates.
- Improved caching
  - Implement cached MD/MDX compilation with strong invalidation semantics (watch file timestamps, frontmatter changes, and plugin list changes) to speed dev builds and CI.
- Improved / faster rendering
  - Profile the renderer and reduce re-renders in the app router (memoization, streaming render, partial hydration, or splitting heavy components).
  - Consider pre-rendering commonly-read pages to cut time-to-first-byte.
- Additional possible tasks
  - Better RS/CI artifacts of build output for PR proof.
  - More robust remark/mdx plugins to support additional Obsidian patterns.
  - A small example content generator script to scaffold new chapters with frontmatter and slug naming.

## Pull requests: requirements and process
Pull requests are allowed, but they must:

- Clearly explain what you changed and why — link to an issue when possible.
- Include a proof of build. The maintainer will not necessarily build PRs locally, so you must prove that the changes build and (if relevant) render correctly.
  - Proof can be one of:
    - A successful GitHub Actions or other CI run URL that shows the build step succeeded and attaches build artifacts, or
    - A short, copy-pasteable build log showing build success and the exact commands used, or
    - A downloadable zip/tar of the built output attached to the PR (or placed in CI artifacts) plus a short guide to reproduce.
    - Screenshots or a short screencast that demonstrates the change in the running app are helpful but not sufficient alone unless accompanied by a build artifact or CI run.
- Pass linting and tests (if present) or clearly explain why a test cannot be provided and what manual checks were performed.

**Rationale:** simply put, the maintainer is unlikely to run a build for each incoming PR — provide the proof so your change can be reviewed without extra friction.

If your PR touches build/config or parser logic, include any compatibility notes for existing frontmatter fields and a short migration note if needed.

### What you can and can't change
**Ownership:** The narrative content and author assets are owned by the project and live under:
- /content (Markdown chapters)
- /public (author-provided static assets)

Anything inside /content or /public is considered author-owned and is not open for outside editing without explicit permission. Do not submit changes to those directories unless you have direct permission from the maintainer.

Everything else in the repository (code, tooling, build scripts, configuration files, utilities, examples, test harnesses) is open to outside contribution.

### PR template / what to include
- Title: concise summary of the change
- Description:
  - What changed
  - Why it changed
  - Files / modules touched
  - Migration notes (if any)
- Proof of build:
  - CI pass URL or
  - Build log paste + exact commands + environment (node/npm versions) or
  - Attached build artifact (zip) with instructions to verify
- How to review:
  - Steps to run the change locally, including example commands and sample content if needed
  - Expected behavior and screenshots/examples
- Tests & lint:
  - Show the results of lint/test runs or include instructions for running them
- Checklist
  - [ ] I have not modified /content or /public without explicit permission
  - [ ] I provided proof of build
  - [ ] I ran lint and tests locally
  - [ ] I documented any migration or compatibility notes

### Tone & expectations
- Keep PR descriptions clear and technical — this is primarily a code + tooling project.
- The maintainer values small, well-documented PRs with reproducible build artifacts.
- You may be asked to split large changes into smaller PRs for easier review.

## Forks and using your own content
Forks are encouraged for experimentation, personal deployment, or narrative edits.

If you fork and want to show off a running instance, please use your own:

- /content (your chapters) and
- /public (your public assets)

These directories are the author’s assets — for public forks, keep your own content in those folders to avoid using the author’s material.

If you’re experimenting with the engine only, you may create example content under a folder like /examples/content and /examples/public inside your fork.

If you want to assist: focus on logic, not content

Contributions that improve the engine, tooling, or developer experience are the most useful:

- Parser, bundler, caching, performance, static index generation, build-time DB improvements.
- Tests, CI, performance benchmarks, documentation about the pipeline.

Contributions to narrative, prose, or the core content should be coordinated with the maintainer first — open an issue to propose content edits.

## Local development & build checklist
- Clone and install
  - git clone https://github.com/ViciousElia/a-tale-of-thorns.git
  - cd a-tale-of-thorns
  - npm install (or pnpm/yarn)
- Recommended dev commands
  - npm run dev — start dev server
  - npm run build — produce production build
  - npm run preview — preview the production build
  - npm run lint — run linting
  - npm run test — run tests (if present)
- What to include as proof of build
  - Re-run the exact commands you used (npm run build, etc.), copy the build output summary and paste it into the PR (or include it as an attached artifact). If using CI, include the run URL.

## Contact & maintainer
- Maintainer: ViciousElia
- If your change is large, invasive, or affects content mapping, open an issue first to discuss approach and acceptance criteria.

Thanks again for taking an interest. If you want, open an issue proposing a specific improvement from the list above and I can mark it as a "good first task" or provide extra guidance on the integration points (especially in /lib and /util).