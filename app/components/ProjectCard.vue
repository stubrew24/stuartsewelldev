<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";

defineProps<{
  project: ProjectsCollectionItem;
}>();
</script>

<template>
  <article class="card project" :class="{ featured: project.featured }">
    <NuxtImg
      :src="project.image"
      :alt="project.imageAlt"
      width="800"
      height="600"
      :sizes="project.featured ? '104px md:50vw lg:50vw xl:600px' : '104px md:50vw lg:33vw xl:400px'"
      format="webp"
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

/*
 * Phones: no card chrome. A small thumbnail sits beside the label and title,
 * with the summary and links full width beneath.
 */
@media (max-width: 45.99rem) {
  .project.card {
    display: grid;
    grid-template-columns: 6.5rem minmax(0, 1fr);
    column-gap: 1rem;
    row-gap: 0.375rem;
    overflow: visible;
    background: none;
    border: none;
    border-radius: 0;
  }

  .shot {
    grid-column: 1;
    grid-row: 1 / span 2;
    align-self: center;
    border: var(--rule);
    border-radius: 0.625rem;
  }

  /* Let the label, title, summary and links join the card's grid. */
  .body {
    display: contents;
  }

  .label {
    grid-column: 2;
    align-self: end;
  }

  .title {
    grid-column: 2;
    align-self: start;
  }

  .summary,
  .links {
    grid-column: 1 / -1;
  }

  .summary {
    margin-top: 0.5rem;
  }
}

/* Tablet: a shorter crop keeps the 2×2 grid compact. */
@media (min-width: 46rem) and (max-width: 63.99rem) {
  .shot {
    aspect-ratio: 16 / 10;
  }
}

/* Desktop: featured projects span the grid, image beside the text. */
@media (min-width: 64rem) {
  .featured {
    grid-column: 1 / -1;
    flex-direction: row;
  }

  .featured .shot {
    flex: 1 1 0;
    min-width: 0;
    aspect-ratio: 16 / 9;
    border-bottom: none;
    border-right: var(--rule);
  }

  .featured .body {
    flex: 1 1 0;
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
