// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/image"],

  // Resized WebP variants with srcset, generated at build time as static files.
  // `ipxStatic` is forced because on Netlify the module would otherwise switch
  // to the Netlify Image CDN, whose /.netlify/images URLs can't be prerendered.
  image: {
    provider: "ipxStatic",
    quality: 75,
    format: ["webp"],
  },

  css: ["~/assets/css/main.css"],

  // Use the plain static preset everywhere, including on Netlify. Under the
  // netlify-static preset the prerender crawler doesn't follow the generated
  // image links, so the /_ipx files would be missing from the deploy.
  nitro: {
    preset: "static",
  },

  // A one-page static site doesn't need to detect new deploys mid-session,
  // and without the manifest everything under /_nuxt is content-hashed and
  // safe to cache for a year (see netlify.toml).
  experimental: {
    appManifest: false,
  },

  runtimeConfig: {
    public: {
      // Canonical address, used for the canonical link and absolute
      // link-preview URLs (so netlify.app copies point here).
      siteUrl: "https://stuartsewell.dev",
      // Set NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN in Netlify to enable
      // Cloudflare Web Analytics. Left empty, no analytics script loads.
      cloudflareAnalyticsToken: "",
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "en-GB" },
      // Title, description and link-preview tags come from content/site.yml
      // (see app/pages/index.vue).
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },

  content: {
    experimental: {
      // Node 22.5+ ships SQLite, so no native better-sqlite3 build is needed.
      sqliteConnector: "native",
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ["normal", "italic"],
    },
    families: [
      { name: "Fraunces", provider: "google", weights: [500, 700], styles: ["normal", "italic"] },
      { name: "Schibsted Grotesk", provider: "google", weights: [400, 500, 600, 700], styles: ["normal"] },    ],
  },
});
