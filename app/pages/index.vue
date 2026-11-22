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
