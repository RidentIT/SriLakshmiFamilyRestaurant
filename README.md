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

## Media

- **Logo** — `public/logo.jpg`, shown via `components/Logo.tsx`, used in the
  navbar, footer, browser tab icon (`app/icon.jpg`), and social share
  preview. The source artwork also contains a divider line and a phone
  number below the wordmark that doesn't match the restaurant's real
  number, so `Logo.tsx` crops to the top ~70% (lotus mark + wordmark only)
  — if you get an updated/corrected logo file, replace `public/logo.jpg`
  and `app/icon.jpg` and re-check that crop still looks right.
- **Hero** — `components/Hero.tsx` uses `public/hero-cooking.jpg` as the
  always-visible fallback/LCP image, with an optional
  `public/hero-video.mp4` layered on top once it's playable (absent right
  now — the hero gracefully shows the fallback image only, which is a
  complete design on its own).
- **Dish photos** — two menu items in `data/menu.ts` (`rc-chicken`,
  `rc-special`) use real photos (`dish-plating.jpg`, `dish-fine-dining.jpg`);
  the rest still use the warm maroon/gold SVG placeholders. Update the
  `image` field per item as real, dish-specific photography comes in.
- **About gallery** — `app/about/page.tsx` uses `about-story.jpg`,
  `kitchen-chefs-table.jpg`, and the four images in `interior-*.jpg` /
  `table-wine-glasses.jpg`.
- `public/reslandin2.jpg` is **not used anywhere in the code** — it has a
  visible stock-photo watermark tiled across it, so it isn't safe to
  publish. Replace it with a licensed/original photo before referencing it,
  or delete it.

When adding a new real photo, don't pass the `unoptimized` prop on its
`<Image>` — that's only needed for the SVG placeholders (`DishCard` and
`MenuItemCard` already handle this automatically based on the file
extension).

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
