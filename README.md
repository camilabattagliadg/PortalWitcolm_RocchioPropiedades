# Portal Witcomb

Landing page for Portal Witcomb — five double-height food & beverage commercial spaces at Witcomb 2632, Villa Ballester, Buenos Aires.

Built with React 19, TanStack Start (TanStack Router + Vite) and Tailwind CSS v4. All media is self-contained in `public/media/`.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Getting started

```bash
npm install
npm run dev      # local dev server on http://localhost:8080
```

## Production build

```bash
npm run build    # outputs dist/ (client + server)
npm run preview  # preview the production build locally
```

The build produces a standard Nitro output in `dist/`:

- `dist/client` — static assets (can be served by any CDN/static host)
- `dist/server` — SSR server entry (Cloudflare Workers target by default)

To target another platform, set the Nitro preset, e.g. `NITRO_PRESET=node-server npm run build`, which emits a Node server at `dist/server/index.mjs`.

## Project structure

```
public/media/        images, video, logos
src/routes/__root.tsx  document shell, sitewide metadata
src/routes/index.tsx   the landing page
src/styles.css         Tailwind theme and design tokens
```

## SEO

`public/robots.txt` and `public/sitemap.xml` reference `https://portal-witcomb.lovable.app`.
Update that domain in those two files and in `SITE_URL` (`src/routes/index.tsx`) plus the
absolute `og:image` URLs in `src/routes/__root.tsx` when deploying to a different domain.
