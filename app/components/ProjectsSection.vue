<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";

defineProps<{
  projects: ProjectsCollectionItem[];
  github: string;
}>();
</script>

<template>
  <section id="work" class="wrap work" aria-labelledby="work-heading">
    <div class="head">
      <h2 id="work-heading" class="display heading">
        Selected <span class="display-italic emphasis">work</span>
      </h2>
      <a :href="github" target="_blank" rel="noopener" class="label more">More on GitHub →</a>
    </div>
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
  padding-bottom: 7rem;
  scroll-margin-top: 1rem;
}

.head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding-top: 4.5rem;
  border-top: var(--rule);
}

.heading {
  font-size: var(--text-section);
}

.emphasis {
  color: var(--color-accent);
}

.more {
  text-decoration: none;
}

.more:hover {
  color: var(--color-accent);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 1.5rem;
}
</style>
