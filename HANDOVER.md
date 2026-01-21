# Handover: Simon Purdie's Bento Portfolio

## Project Overview
A premium, bento-box style data analysis portfolio for Simon Purdie, built with **Astro 5.0** and **Tailwind CSS 4.0**.

## Current State
- **Environment Fixed**: Node.js and NPM are now correctly installed in the Linux (WSL) environment using `fnm`. This was a critical blocker in the first attempt.
- **Project Initialized**: Astro 5.0 (minimal template) with Tailwind CSS integration is set up in the root directory.
- **Design System**: Core theme tokens (colors, radii, shadows) are defined in `src/styles/global.css` using Tailwind 4.0's `@theme` syntax.

## Technical Details
- **Node Version**: v25.4.0 (managed via `fnm`)
- **Framework**: Astro 5.0
- **Styling**: Tailwind CSS 4.0 (Vite-based integration)
- **Deployment Target**: GitHub Pages

## Critical Path / Next Steps
1.  **Layout**: Create a base layout in `src/layouts/Layout.astro` that imports `../styles/global.css`.
2.  **Data Structure**: Create `src/data/projects.ts` to manage the portfolio content (CV data and project highlights).
3.  **Components**: Build a `BentoCard.astro` component and implement the main grid on the index page.
4.  **Aesthetic Check**: Maintain the "Muted & Warm" palette (creams, warm grays, sage greens) and `rounded-3xl` aesthetic.

## Recent Context
- Refer to `context/project_brief.md` for the full professional narrative and design vision.
- `context/first_attempt/LESSONS_LEARNED.md` contains the details on the environment issues we solved today.

## Deployment Note
The repository is a git repo. Follow the `repo-policy.md` for commits (prefix with task ID if applicable, though we've been working on a fresh start).

Good luck, Agent!
