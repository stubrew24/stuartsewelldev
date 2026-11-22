import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    // Page-level copy: hero, currently band, skills, contact.
    site: defineCollection({
      type: "data",
      source: "site.yml",
      schema: z.object({
        name: z.string(),
        role: z.string(),
        since: z.number(),
        // Stored in parts so the full address never appears in built files.
        email: z.object({
          user: z.string(),
          domain: z.string(),
        }),
        social: z.object({
          github: z.string().url(),
          linkedin: z.string().url(),
        }),
        hero: z.object({
          headline: z.string(),
          headlineEmphasis: z.string(),
          intro: z.string(),
          photoAlt: z.string(),
        }),
        currently: z.object({
          role: z.string(),
          company: z.string(),
          companyUrl: z.string().url(),
          focus: z.string(),
          focusEmphasis: z.string(),
        }),
        experienceIntro: z.string(),
        skills: z.array(
          z.object({
            title: z.string(),
            body: z.string(),
          }),
        ),
        contact: z.object({
          heading: z.string(),
          headingEmphasis: z.string(),
          body: z.string(),
        }),
      }),
    }),

    // One file per role. `order` sets display order, most recent first.
    experience: defineCollection({
      type: "data",
      source: "experience/*.yml",
      schema: z.object({
        order: z.number(),
        company: z.string(),
        role: z.string(),
        start: z.number(),
        end: z.number().nullable(),
        highlights: z.array(z.string()),
      }),
    }),

    // One file per project. Images live in public/images.
    projects: defineCollection({
      type: "data",
      source: "projects/*.yml",
      schema: z.object({
        order: z.number(),
        title: z.string(),
        kind: z.string(),
        tech: z.array(z.string()),
        summary: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        link: z.object({ label: z.string(), url: z.string().url() }).optional(),
        source: z.string().url().optional(),
      }),
    }),
  },
});
