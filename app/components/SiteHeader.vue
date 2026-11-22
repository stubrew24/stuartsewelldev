<script setup lang="ts">
defineProps<{
  name: string;
  role: string;
  since: number;
}>();

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
];
</script>

<template>
  <header class="wrap site-header">
    <div class="bar">
      <a href="#top" class="display brand">{{ name }}<span class="dot">.</span></a>
      <span class="display-italic tagline">{{ role }}, since {{ since }}</span>
      <nav aria-label="Main">
        <ul>
          <li v-for="link in links" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
          <li><a href="#contact" class="contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 1.5rem;
  padding-block: 1.5rem;
  border-bottom: var(--rule);
}

.brand {
  font-size: 1.625rem;
  text-decoration: none;
}

.dot {
  color: var(--color-accent);
}

.tagline {
  font-size: 1.1875rem;
  color: var(--color-muted);
}

ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1.5rem;
  padding: 0;
  list-style: none;
  font-weight: 500;
}

nav a {
  text-decoration: none;
}

.contact {
  display: inline-block;
  padding: 0.375rem 1rem;
  border-radius: var(--radius-pill);
  background: var(--color-ink);
  color: var(--color-paper);
}

.contact:hover {
  background: var(--color-accent);
  color: var(--color-on-accent);
}

@media (max-width: 48rem) {
  .tagline {
    display: none;
  }
}
</style>
