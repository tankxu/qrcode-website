# QR Code — Website & Blog

Astro-powered marketing site and blog for the QR Code project.

## Stack

- [Astro 5](https://astro.build/) — static site framework
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- TypeScript (strict)
- Markdown + MDX content collections (`src/content/blog/`)
- RSS feed + sitemap

## Project structure

```
qrcode-website/
├── public/                # static assets served as-is
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/            # imported images
│   ├── components/        # reusable Astro components
│   ├── content/blog/      # blog posts (.md / .mdx)
│   ├── layouts/           # page + post layouts
│   ├── pages/             # routes (file-based)
│   │   ├── blog/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── rss.xml.ts
│   ├── styles/global.css  # Tailwind entry + design tokens
│   ├── consts.ts          # site title / nav / metadata
│   ├── content.config.ts  # blog collection schema
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting started

```bash
# install dependencies
npm install

# start the dev server at http://localhost:4321
npm run dev

# type-check the project
npm run check

# build the production site to ./dist/
npm run build

# preview the built site
npm run preview
```

## Authoring blog posts

Add a Markdown or MDX file to `src/content/blog/`. Frontmatter schema:

```yaml
---
title: 'Post title'
description: 'Short summary used for SEO + listings.'
pubDate: 2026-04-28
updatedDate: 2026-05-01    # optional
heroImage: './hero.png'    # optional, relative to the post
tags: ['tag-1']            # optional
draft: false               # set true to hide from listings, RSS, and routes
---
```

## Customizing

- Site title / nav links: `src/consts.ts`
- Global styles + design tokens: `src/styles/global.css`
- Page chrome: `src/layouts/Layout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`
- Production URL: `site` in `astro.config.mjs`
