// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/image"],

  // Resized WebP variants with srcset. Locally (and in `nuxt generate`) these
  // are built with IPX; on Netlify the Netlify Image CDN is used automatically.
  image: {
    quality: 75,
    format: ["webp"],
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      // Set NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN in Netlify to enable
      // Cloudflare Web Analytics. Left empty, no analytics script loads.
      cloudflareAnalyticsToken: "",
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Stuart Sewell | Frontend Engineer",
      meta: [
        {
          name: "description",
          content:
            "Stuart Sewell is a frontend engineer building accessible, fast and maintainable interfaces with Vue, Nuxt and TypeScript.",
        },
      ],
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
      { name: "Schibsted Grotesk", provider: "google", weights: [400, 500, 600, 700], styles: ["normal"] },
      { name: "JetBrains Mono", provider: "google", weights: [400, 500], styles: ["normal"] },
    ],
  },
});
