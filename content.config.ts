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
        // Search results and link previews.
        seo: z.object({
          title: z.string(),
          description: z.string(),
          locality: z.string(),
          region: z.string(),
        }),
        // Career start, used to keep "{years}" in the experience intro current.
        since: z.object({
          year: z.number(),
          month: z.number().min(1).max(12),
        }),
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
          photoCaption: z.string().optional(),
        }),
        currently: z.object({
          role: z.string(),
          company: z.string(),
          companyUrl: z.string().url(),
          focus: z.string(),
          focusEmphasis: z.string(),
          focusUrl: z.string().url().optional(),
          detail: z.string().optional(),
        }),
        // "{years}" is replaced with whole years since `since`, as a word.
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
          form: z.object({
            labels: z.object({
              name: z.string(),
              email: z.string(),
              message: z.string(),
            }),
            messageHint: z.string().optional(),
            submit: z.string(),
            sending: z.string(),
            errors: z.object({
              name: z.string(),
              email: z.string(),
              message: z.string(),
            }),
            sent: z.string(),
            // "{email}" is replaced with the email address.
            failed: z.string(),
          }),
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
        // One plain-language line on what the company does.
        about: z.string().optional(),
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
        // Featured projects span the full width above the others.
        featured: z.boolean().default(false),
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
