<script setup lang="ts">
const { data: site } = await useAsyncData("site", () =>
  queryCollection("site").first(),
);
</script>

<template>
  <main v-if="site">
    <h1>{{ site.name }}</h1>
    <p>{{ site.role }}</p>
    <p>{{ site.tagline }}</p>
  </main>
</template>
