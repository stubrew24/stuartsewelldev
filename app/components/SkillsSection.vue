<script setup lang="ts">
import type { SiteCollectionItem } from "@nuxt/content";

defineProps<{
  skills: SiteCollectionItem["skills"];
}>();
</script>

<template>
  <section class="wrap skills" aria-labelledby="skills-heading">
    <h2 id="skills-heading" class="visually-hidden">How I work</h2>
    <ul class="grid">
      <li v-for="(skill, index) in skills" :key="skill.title" class="card skill">
        <span class="bar" :class="{ accent: index === skills.length - 1 }" aria-hidden="true" />
        <h3 class="display title">{{ skill.title }}</h3>
        <p class="body">{{ skill.body }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.skills {
  padding-bottom: var(--section-space);
}

/* Phone: plain text list. Tablet: 2×2 cards. Desktop: four cards in a row. */
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.75rem;
  padding: 0;
  list-style: none;
}

.skill {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 45.99rem) {
  .skill.card {
    background: none;
    border: none;
    border-radius: 0;
  }
}

@media (min-width: 46rem) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .skill {
    gap: 0.625rem;
    padding: 1.5rem;
  }
}

@media (min-width: 64rem) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.bar {
  width: 1.75rem;
  height: 0.25rem;
  border-radius: 2px;
  background: var(--color-ink);
}

.bar.accent {
  background: var(--color-accent);
}

.title {
  font-size: var(--text-xl);
}

.body {
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
}
</style>
