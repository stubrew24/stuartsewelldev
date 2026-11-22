<script setup lang="ts">
defineProps<{
  name: string;
  linkedin: string;
}>();
</script>

<template>
  <header class="wrap site-header">
    <div class="bar">
      <a href="#top" class="display brand">{{ name }}<span class="dot">.</span></a>
      <nav aria-label="Main">
        <ul>
          <li class="wide-only"><a href="#experience">Experience</a></li>
          <li class="wide-only">
            <a :href="linkedin" target="_blank" rel="noopener">
              LinkedIn<span aria-hidden="true"> ↗</span>
              <span class="visually-hidden"> (opens in a new tab)</span>
            </a>
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
  display: inline-block;
  padding-block: 0.5rem;
  text-decoration: none;
}

.contact {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-pill);
  background: var(--color-ink);
  color: var(--color-paper);
}

.contact:hover {
  background: var(--color-accent);
  color: var(--color-on-accent);
}

/* Phones: one row with just the name and Contact. Experience is a short
   scroll away and LinkedIn is in the contact section and footer. */
@media (max-width: 45.99rem) {
  .bar {
    flex-wrap: nowrap;
    padding-block: 1rem;
  }

  .brand {
    font-size: 1.375rem;
  }

  .wide-only {
    display: none;
  }
}
</style>
