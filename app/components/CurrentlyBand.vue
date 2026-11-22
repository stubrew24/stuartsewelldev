<script setup lang="ts">
import type { SiteCollectionItem } from "@nuxt/content";

defineProps<{
  currently: SiteCollectionItem["currently"];
}>();
</script>

<template>
  <section class="band" aria-labelledby="currently-heading">
    <div class="wrap inner">
      <h2 id="currently-heading" class="label heading">Currently</h2>
      <p class="display text">
        {{ currently.role }}
        <a :href="currently.companyUrl" target="_blank" rel="noopener">{{ currently.company }}</a>,
        {{ currently.focus }}
        <span class="display-italic">{{ currently.focusEmphasis }}</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.band {
  background: var(--color-accent);
  color: var(--color-on-accent);
}

.inner {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 1.25rem 4rem;
  padding-block: 3.5rem;
}

.heading {
  flex: 0 0 10rem;
  color: inherit;
  opacity: 0.85;
  font-weight: 400;
}

.text {
  flex: 1 1 30rem;
  min-width: 0;
  font-size: clamp(1.75rem, 3.2vw, 2.75rem);
  line-height: 1.12;
  text-wrap: balance;
}

a:hover {
  color: inherit;
  text-decoration-thickness: 3px;
}

:focus-visible {
  outline-color: var(--color-on-accent);
}
</style>
