# stuartsewell.dev

Personal portfolio for Stuart Sewell, built with [Nuxt](https://nuxt.com) and [Nuxt Content](https://content.nuxt.com).

## Develop

Requires Node 22.5 or newer (Nuxt Content uses Node's built-in SQLite).

```bash
npm install
npm run dev        # http://localhost:3000
```

## Content

Copy lives in `content/` as YAML, with schemas in `content.config.ts`. Edit the YAML to change what the site says; components only render it.

- `content/site.yml`: hero, Currently band, skills, contact and form wording. `{years}` in the experience intro is filled in from `since`.
- `content/experience/*.yml`: one file per role, ordered by `order`.
- `content/projects/*.yml`: one file per project. `featured: true` makes a project the wide card on desktop.

## Images

Put source images in `public/images/` and reference them as `/images/<name>`. `@nuxt/image` generates resized WebP versions with `srcset` at build time (the `ipxStatic` provider), so large sources are fine, though keeping them under ~1600px keeps the repo small.

## Build and deploy

```bash
npm run generate   # static site in .output/public
npx serve .output/public
```

Netlify runs `npm run generate` and publishes `.output/public`. Nuxt is pinned to its plain `static` preset in `nuxt.config.ts`, because the `netlify-static` preset skips generating the image files. Cache headers are set in `netlify.toml`.

The contact form uses Netlify Forms. Analytics (Cloudflare Web Analytics) load only when `NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` is set in Netlify.
