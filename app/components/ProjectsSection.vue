<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";

defineProps<{
  projects: ProjectsCollectionItem[];
}>();
</script>

<template>
  <section id="work" class="wrap work" aria-labelledby="work-heading">
    <h2 id="work-heading" class="display heading">
      Selected <span class="display-italic emphasis">work</span>
    </h2>
    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>

<style scoped>
.work {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-block: var(--section-space) 4.5rem;
  scroll-margin-top: 1rem;
}

.heading {
  font-size: var(--text-section);
}

.emphasis {
  color: var(--color-accent);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 1.5rem;
}
</style>
