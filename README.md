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

## Build and deploy

```bash
npm run generate   # static site in .output/public
npm run preview    # serve the generated site locally
```

Netlify builds with `npm run generate` and publishes `dist` (Nuxt uses its `netlify-static` preset there; see `netlify.toml`). The contact form uses Netlify Forms.
