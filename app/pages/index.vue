<script setup lang="ts">
const { data } = await useAsyncData("home", async () => {
  const [site, experience, projects] = await Promise.all([
    queryCollection("site").first(),
    queryCollection("experience").order("order", "ASC").all(),
    queryCollection("projects").order("order", "ASC").all(),
  ]);
  return { site, experience, projects };
});

if (!data.value?.site) {
  throw createError({ statusCode: 500, statusMessage: "Site content is missing" });
}

// --- SEO: title, description, link previews, canonical URL, structured data ---
const site = data.value.site;
const { siteUrl } = useRuntimeConfig().public;
const pageUrl = `${siteUrl}/`;
const shareImage = `${siteUrl}/og-image.jpg`;
const currentRole = data.value.experience.find((role) => role.end === null);

useSeoMeta({
  title: site.seo.title,
  description: site.seo.description,
  ogType: "profile",
  ogSiteName: site.name,
  ogUrl: pageUrl,
  ogTitle: site.seo.title,
  ogDescription: site.seo.description,
  ogImage: shareImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${site.name}, ${site.role} in ${site.seo.locality}, ${site.seo.region}`,
  ogLocale: "en_GB",
  twitterCard: "summary_large_image",
  twitterTitle: site.seo.title,
  twitterDescription: site.seo.description,
  twitterImage: shareImage,
});

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
  script: [
    {
      type: "application/ld+json",
      // Marks this page as Stuart's profile page (a Google-supported type),
      // with the Person as its main subject so search engines can connect the
      // site with his profiles, role and location.
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: pageUrl,
        mainEntity: {
          "@type": "Person",
          name: site.name,
          url: pageUrl,
          image: `${siteUrl}/images/profile.jpeg`,
          jobTitle: site.role,
          ...(currentRole && {
            worksFor: {
              "@type": "Organization",
              name: currentRole.company,
              url: site.currently.companyUrl,
            },
          }),
          address: {
            "@type": "PostalAddress",
            addressLocality: site.seo.locality,
            addressRegion: site.seo.region,
            addressCountry: "GB",
          },
          knowsAbout: ["Frontend development", "Web accessibility", "Vue", "Nuxt", "TypeScript", "Design systems"],
          sameAs: [site.social.linkedin, site.social.github],
        },
      }),
    },
  ],
});
</script>

<template>
  <div v-if="data?.site" id="top">
    <a href="#main" class="skip-link">Skip to content</a>
    <SiteHeader :name="data.site.name" :linkedin="data.site.social.linkedin" />

    <main id="main">
      <HeroSection :hero="data.site.hero" />
      <CurrentlyBand :currently="data.site.currently" />
      <ProjectsSection :projects="data.projects" />
      <ExperienceSection
        :intro="data.site.experienceIntro"
        :since="data.site.since"
        :roles="data.experience"
      />
      <SkillsSection :skills="data.site.skills" />
      <InterestsSection :interests="data.site.interests" />
      <ContactSection :contact="data.site.contact" :email="data.site.email" :social="data.site.social">
        <template #footer>
          <SiteFooter :name="data.site.name" :social="data.site.social" />
        </template>
      </ContactSection>
    </main>
  </div>
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 10;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--color-ink);
  color: var(--color-paper);
}

.skip-link:focus {
  top: 1rem;
}
</style>
