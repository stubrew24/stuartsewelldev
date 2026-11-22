<script setup lang="ts">
const props = defineProps<{
  name: string;
  social: { github: string; linkedin: string };
}>();

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <p class="label muted">© {{ year }} {{ props.name }}</p>
    <ul class="label links">
      <li><a :href="social.github" target="_blank" rel="noopener">GitHub</a></li>
      <li><a :href="social.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-ink-line);
}

.muted {
  color: var(--color-on-ink-faint);
}

.links {
  display: flex;
  gap: 1.5rem;
  padding: 0;
  list-style: none;
}

.links a {
  color: var(--color-paper);
}

.links a:hover {
  color: var(--color-accent-on-dark);
}
</style>
