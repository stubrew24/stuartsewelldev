/**
 * Light anti-scraping for a public email address.
 *
 * The address is stored as separate parts and only joined in the browser
 * after hydration, so the prerendered HTML and content payload never contain
 * a harvestable `user@domain` string. Before hydration (and for scrapers that
 * don't run JavaScript) it reads "user [at] domain" with no mailto link.
 */
export function useEmailAddress(parts: MaybeRefOrGetter<{ user: string; domain: string }>) {
  const ready = ref(false);
  onMounted(() => {
    ready.value = true;
  });

  const address = computed(() => {
    const { user, domain } = toValue(parts);
    return ready.value ? `${user}@${domain}` : `${user} [at] ${domain}`;
  });

  const href = computed(() => (ready.value ? `mailto:${address.value}` : undefined));

  return { address, href };
}
