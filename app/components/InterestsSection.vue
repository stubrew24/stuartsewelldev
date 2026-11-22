<script setup lang="ts">
import type { SiteCollectionItem } from "@nuxt/content";

defineProps<{
  interests: SiteCollectionItem["interests"];
}>();
</script>

<template>
  <section id="interests" class="wrap interests" aria-labelledby="interests-heading">
    <div class="inner">
      <h2 id="interests-heading" class="display heading">
        {{ interests.heading }}
        <span class="display-italic emphasis">{{ interests.headingEmphasis }}</span>
      </h2>

      <ul class="items">
        <li v-for="item in interests.items" :key="item.title" class="item">
          <NuxtImg
            :src="item.image"
            :alt="item.imageAlt"
            width="600"
            height="600"
            fit="cover"
            sizes="104px md:50vw lg:240px"
            format="webp"
            loading="lazy"
            class="photo"
          />
          <div class="text">
            <h3 class="display title">{{ item.title }}</h3>
            <p class="body">{{ item.body }}</p>
            <a :href="item.link.url" target="_blank" rel="noopener" class="link">
              {{ item.link.label }}<span class="visually-hidden"> on Instagram (opens in a new tab)</span>
              <span aria-hidden="true">&nbsp;↗</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.interests {
  padding-bottom: var(--section-space);
}

.inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 4.5rem;
  border-top: var(--rule);
}

.heading {
  font-size: var(--text-section);
}

.emphasis {
  color: var(--color-accent);
}

/* Phone: thumbnail beside the text. Tablet+: two items side by side. */
.items {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  padding: 0;
  list-style: none;
}

.item {
  display: grid;
  grid-template-columns: 6.5rem minmax(0, 1fr);
  align-items: start;
  align-content: start;
  gap: 1rem;
}

.photo {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border: var(--rule);
  border-radius: 0.625rem;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  font-size: var(--text-2xl);
}

.body {
  max-width: 44ch;
  color: var(--color-ink-soft);
}

.link {
  align-self: flex-start;
  padding-block: 0.25rem;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
}

.link:hover {
  color: var(--color-ink);
  text-decoration: underline;
}

@media (min-width: 46rem) {
  .items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.5rem;
  }

  .item {
    grid-template-columns: minmax(0, 1fr);
  }

  .photo {
    aspect-ratio: 4 / 3;
    border-radius: var(--radius);
  }
}

@media (min-width: 64rem) {
  .item {
    grid-template-columns: 15rem minmax(0, 1fr);
    gap: 1.75rem;
  }

  .photo {
    aspect-ratio: 1;
  }

  .text {
    padding-top: 0.25rem;
  }
}
</style>
