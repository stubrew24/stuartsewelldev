import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    site: defineCollection({
      type: "data",
      source: "site.yml",
      schema: z.object({
        name: z.string(),
        role: z.string(),
        tagline: z.string(),
        email: z.string(),
      }),
    }),
  },
});
