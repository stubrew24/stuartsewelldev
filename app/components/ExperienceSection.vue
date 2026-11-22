<script setup lang="ts">
import type { ExperienceCollectionItem } from "@nuxt/content";

defineProps<{
  intro: string;
  roles: ExperienceCollectionItem[];
}>();
</script>

<template>
  <section id="experience" class="wrap experience" aria-labelledby="experience-heading">
    <div class="aside">
      <h2 id="experience-heading" class="display heading">Experience</h2>
      <p class="intro">{{ intro }}</p>
    </div>

    <ol class="timeline">
      <li v-for="(role, index) in roles" :key="role.company" class="entry">
        <span class="marker" :class="{ current: index === 0 }" aria-hidden="true" />
        <p class="label">
          <time :datetime="String(role.start)">{{ role.start }}</time>
          —
          <time v-if="role.end" :datetime="String(role.end)">{{ role.end }}</time>
          <template v-else>Now</template>
        </p>
        <h3 class="role">
          {{ role.role }}
          <span class="display-italic company">· {{ role.company }}</span>
        </h3>
        <p v-if="role.about" class="about">{{ role.about }}</p>
        <ul class="highlights">
          <li v-for="highlight in role.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.experience {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 4rem;
  padding-block: var(--section-space) 4.5rem;
  scroll-margin-top: 1rem;
}

.aside {
  flex: 1 1 16rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.heading {
  font-size: var(--text-section);
}

.intro {
  color: var(--color-ink-soft);
}

.timeline {
  flex: 999 1 38rem;
  min-width: 0;
  padding: 0;
  list-style: none;
  border-left: var(--rule);
}

.entry {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0 0 3rem 2.25rem;
}

.entry:last-child {
  padding-bottom: 0;
}

.marker {
  position: absolute;
  left: -0.5rem;
  top: 0.375rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background: var(--color-paper);
  border: var(--rule);
}

.marker.current {
  background: var(--color-accent);
  border-color: var(--color-accent);
}

.role {
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1.3;
}

.company {
  color: var(--color-muted);
}

.about {
  margin-top: -0.375rem;
  font-size: var(--text-sm);
  color: var(--color-muted);
}

.highlights {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding-left: 1.25rem;
  color: var(--color-ink-soft);
}

.highlights li::marker {
  color: var(--color-accent);
}
</style>
