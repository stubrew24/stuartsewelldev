<script setup lang="ts">
import type { SiteCollectionItem } from "@nuxt/content";

defineProps<{
  hero: SiteCollectionItem["hero"];
  social: SiteCollectionItem["social"];
}>();
</script>

<template>
  <section class="wrap hero" aria-labelledby="hero-heading">
    <div class="top">
      <h1 id="hero-heading" class="display headline">
        {{ hero.headline }}
        <span class="display-italic emphasis">{{ hero.headlineEmphasis }}</span>
      </h1>
      <figure class="portrait">
        <img
          src="/images/profile.jpeg"
          :alt="hero.photoAlt"
          width="560"
          height="700"
          fetchpriority="high"
        />
        <figcaption class="label">Fig. 1 — The author</figcaption>
      </figure>
    </div>

    <div class="bottom">
      <p class="intro">{{ hero.intro }}</p>
      <div class="cta">
        <div class="actions">
          <a href="#work" class="button primary">Selected work</a>
          <a href="#contact" class="button secondary">Get in touch</a>
        </div>
        <ul class="profiles" aria-label="Profiles">
          <li>
            <a :href="social.linkedin" target="_blank" rel="noopener">
              LinkedIn<span aria-hidden="true"> ↗</span>
              <span class="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a :href="social.github" target="_blank" rel="noopener">
              GitHub<span aria-hidden="true"> ↗</span>
              <span class="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-block: 5.5rem;
}

.top,
.bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 2rem 3rem;
}

.bottom {
  justify-content: space-between;
}

.headline {
  flex: 999 1 37.5rem;
  min-width: 0;
  font-size: var(--text-hero);
  line-height: 0.98;
}

.emphasis {
  color: var(--color-accent);
}

.portrait {
  flex: 1 1 13.75rem;
  max-width: 17.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.portrait img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius);
}

.intro {
  flex: 1 1 26rem;
  min-width: 0;
  max-width: 52ch;
  font-size: var(--text-lg);
  color: var(--color-ink-soft);
}

.cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.profiles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  padding: 0 0 0 0.25rem;
  list-style: none;
  font-weight: 600;
}

.profiles a {
  text-decoration-thickness: 1.5px;
  text-underline-offset: 0.2em;
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

@media (max-width: 48rem) {
  .hero {
    padding-block: 3rem 4rem;
  }
}
</style>
