<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";

defineProps<{
  project: ProjectsCollectionItem;
}>();
</script>

<template>
  <article class="card project" :class="{ featured: project.featured }">
    <img
      :src="project.image"
      :alt="project.imageAlt"
      width="800"
      height="600"
      loading="lazy"
      class="shot"
    />
    <div class="body">
      <p class="label">{{ project.kind }} · {{ project.tech.join(", ") }}</p>
      <h3 class="display title">{{ project.title }}</h3>
      <p class="summary">{{ project.summary }}</p>
      <div v-if="project.link || project.source" class="links">
        <a v-if="project.link" :href="project.link.url" target="_blank" rel="noopener" class="primary-link">
          {{ project.link.label }} <span aria-hidden="true">→</span>
          <span class="visually-hidden">: {{ project.title }} (opens in a new tab)</span>
        </a>
        <a v-if="project.source" :href="project.source" target="_blank" rel="noopener" class="source-link">
          Source<span class="visually-hidden"> code for {{ project.title }} (opens in a new tab)</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.shot {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: top left;
  border-bottom: var(--rule);
}

.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.5rem;
}

.title {
  font-size: var(--text-2xl);
}

.summary {
  flex: 1;
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
}

/* Featured: full-width row, image beside the text on wide screens. */
.featured {
  grid-column: 1 / -1;
  flex-direction: row;
  flex-wrap: wrap;
}

.featured .shot {
  flex: 3 1 28rem;
  min-width: 0;
  aspect-ratio: 16 / 9;
  border-bottom: none;
  border-right: var(--rule);
}

.featured .body {
  flex: 2 1 20rem;
  min-width: 0;
  justify-content: center;
  gap: 0.875rem;
  padding: 2.5rem;
}

.featured .title {
  font-size: var(--text-section);
}

.featured .summary {
  flex: 0;
  font-size: var(--text-base);
}

@media (max-width: 52rem) {
  .featured .shot {
    border-right: none;
    border-bottom: var(--rule);
  }

  .featured .body {
    padding: 1.5rem;
  }
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-top: 0.25rem;
}

.links a {
  font-weight: 600;
  text-decoration: none;
}

.primary-link {
  color: var(--color-accent);
}

.primary-link:hover {
  color: var(--color-ink);
}

.source-link {
  color: var(--color-muted);
}

.links a:hover {
  text-decoration: underline;
}
</style>
