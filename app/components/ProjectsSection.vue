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

/*
 * Phone: one column. Tablet: two columns, every project the same size (2×2).
 * Desktop: three columns, with featured projects spanning the full width.
 */
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2.5rem;
}

@media (min-width: 46rem) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

@media (min-width: 64rem) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
}
</style>
