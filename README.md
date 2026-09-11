# Sri Lakshmi Family Restaurant — Website

A fast, mobile-first website for Sri Lakshmi Family Restaurant (Jaffna Road,
Sandamalgama, Rambewa, Anuradhapura), built to be reached primarily via a QR
code on restaurant tables. Built with Next.js (App Router, TypeScript),
Tailwind CSS, and Framer Motion, and statically generated for deployment on
Vercel.

## Pages

- `/` — Home: hero with the main "View Menu" call-to-action, why-us
  features, featured dishes, and a "Visit Us" section.
- `/menu` — Full menu with category navigation and a live search/filter.
- `/about` — About Us: story, what makes the restaurant special, and a
  photo gallery.
- `/contact` — Contact & location, opening hours, service availability, an
  embedded map, and a "Reserve a Table" call-to-action.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other useful commands:

```bash
npm run build   # production build (also type-checks)
npm run start   # serve the production build locally
npm run lint    # eslint
```

## Updating the menu

All menu content lives in one file: **[`data/menu.ts`](data/menu.ts)**.

Everything currently in there is **placeholder data**, clearly marked with
`placeholder: true` on each item — replace it with the real menu. The file
defines three pricing shapes so it can represent any item on this menu:

- `single` — one flat price (e.g. a soft drink).
- `sized` — a fixed set of sizes with different prices (e.g. Normal / Full).
- `variant` — a choice of named variants, each with its own price (e.g.
  Chicken / Seafood / Mixed).

Add or edit categories and items directly in that file; the menu page,
search, and the home page's "Featured Dishes" section (which pulls a
hand-picked set of item IDs from this same file, see `app/page.tsx`) will
pick up the changes automatically. No other file needs to change for a menu
update.

Restaurant details (address, phone, hours, services, map links) live in
**[`data/restaurant.ts`](data/restaurant.ts)** — update that file if any of
those details change.

## Replacing placeholder media

Placeholder SVG images (warm maroon/gold graphics with a text label) stand
in for real photography so the layout can be reviewed before real assets
exist. Swap them by adding real photos to `public/` with the same
filenames the components already reference:

- `public/hero-fallback.jpg` (or update the path in `components/Hero.tsx`)
  — the hero background image, and the always-visible fallback if the
  video doesn't play.
- `public/hero-video.mp4` — optional looping background video for the
  hero. If this file is absent (as it is right now) or fails to load, the
  hero gracefully shows the fallback image instead — no code changes
  needed either way.
- `public/placeholder-dish-1.svg` … `placeholder-dish-6.svg` — referenced
  from `data/menu.ts` per item; update the `image` path per item as real
  dish photos become available.
- `public/about-gallery-1.svg` … `about-gallery-4.svg` — referenced from
  `app/about/page.tsx`.

When swapping an SVG placeholder for a real `.jpg`/`.png`, also remove the
`unoptimized` prop from that `<Image>` so Next.js optimizes it.

## Deploying to Vercel

**Option A — GitHub integration (recommended):**

1. Push this repository to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), import the GitHub
   repository. Vercel auto-detects Next.js — no configuration needed.
3. Every push to the main branch deploys automatically.

**Option B — Vercel CLI:**

```bash
npm install -g vercel
vercel --prod
```

No environment variables or secrets are required — this is a fully static
site with local data, no external services to configure.

## Notes

- All four pages are statically generated at build time.
- Menu, About, and Contact copy is placeholder content, clearly marked in
  the source, ready to be replaced with real content.
