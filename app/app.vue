<script setup lang="ts">
const { cloudflareAnalyticsToken } = useRuntimeConfig().public;

// Cookieless Cloudflare Web Analytics, only when a token is configured.
if (cloudflareAnalyticsToken) {
  useHead({
    script: [
      {
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        defer: true,
        "data-cf-beacon": JSON.stringify({ token: cloudflareAnalyticsToken }),
      },
    ],
  });
}
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
