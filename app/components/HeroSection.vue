<script setup lang="ts">
import type { SiteCollectionItem } from "@nuxt/content";

defineProps<{
  hero: SiteCollectionItem["hero"];
}>();
</script>

<template>
  <section class="wrap hero" aria-labelledby="hero-heading">
    <h1 id="hero-heading" class="display headline">
      {{ hero.headline }}
      <span class="display-italic emphasis">{{ hero.headlineEmphasis }}</span>
    </h1>

    <figure class="portrait">
      <NuxtImg
        src="/images/profile.jpeg"
        :alt="hero.photoAlt"
        width="280"
        height="350"
        fit="cover"
        densities="x1 x2"
        format="webp"
        preload
        fetchpriority="high"
      />
      <figcaption v-if="hero.photoCaption" class="label">{{ hero.photoCaption }}</figcaption>
    </figure>

    <p class="intro">{{ hero.intro }}</p>

    <div class="actions">
      <a href="#work" class="button primary">Selected work</a>
      <a href="#contact" class="button secondary">Get in touch</a>
    </div>
  </section>
</template>

<style scoped>
/*
 * Three planned layouts rather than one that reflows:
 *   phone   — small photo + caption row, then headline, intro, buttons
 *   tablet  — full-width headline; intro and buttons beside the photo
 *   desktop — headline beside the photo; intro and buttons beneath
 */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "portrait"
    "headline"
    "intro"
    "actions";
  gap: 1.5rem;
  padding-block: 2.5rem 3.5rem;
}

.headline {
  grid-area: headline;
  font-size: var(--text-hero);
  line-height: 1;
}

.emphasis {
  color: var(--color-accent);
}

.portrait {
  grid-area: portrait;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.portrait img {
  flex: none;
  width: 4.5rem;
  height: 4.5rem;
  object-fit: cover;
  border-radius: var(--radius);
}

.intro {
  grid-area: intro;
  max-width: 52ch;
  font-size: var(--text-lg);
  color: var(--color-ink-soft);
}

.actions {
  grid-area: actions;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.button {
  display: inline-block;
  padding: 0.8125rem 1.5rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  text-decoration: none;
}

.primary {
  background: var(--color-accent);
  color: var(--color-on-accent);
  border: 1.5px solid var(--color-accent);
}

.primary:hover {
  background: var(--color-ink);
  border-color: var(--color-ink);
  color: var(--color-paper);
}

.secondary {
  border: var(--rule);
}

.secondary:hover {
  background: var(--color-ink);
  color: var(--color-paper);
}

/* Tablet */
@media (min-width: 46rem) {
  .hero {
    grid-template-columns: minmax(0, 1fr) 13rem;
    grid-template-areas:
      "headline headline"
      "intro portrait"
      "actions portrait";
    grid-template-rows: auto auto 1fr;
    gap: 2rem 3rem;
    padding-block: 4rem 4.5rem;
  }

  .portrait {
    flex-direction: column;
    align-items: stretch;
    gap: 0.625rem;
  }

  .portrait img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
  }

  .actions {
    align-self: start;
  }
}

/* Desktop */
@media (min-width: 64rem) {
  .hero {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      "headline portrait"
      "intro actions";
    grid-template-rows: auto auto;
    gap: 3rem;
    padding-block: 5.5rem;
  }

  .headline {
    align-self: end;
  }

  .portrait {
    width: 17.5rem;
    justify-self: end;
  }

  .actions {
    align-self: end;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
}
</style>
