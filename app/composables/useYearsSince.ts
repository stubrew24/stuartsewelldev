const WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
  "eighteen", "nineteen", "twenty",
];

function yearsSince(year: number, month: number, now: Date): number {
  const elapsed = now.getFullYear() - year;
  // Before the anniversary month, the latest year isn't complete yet.
  return now.getMonth() + 1 < month ? elapsed - 1 : elapsed;
}

/**
 * Whole years since a start date, as a word ("seven") where possible.
 *
 * Computed at build time so the static HTML is correct when deployed, then
 * recomputed in the browser so it stays correct without a rebuild.
 */
export function useYearsSince(year: number, month = 1) {
  const years = ref(yearsSince(year, month, new Date()));

  onMounted(() => {
    years.value = yearsSince(year, month, new Date());
  });

  const word = computed(() => WORDS[years.value] ?? String(years.value));

  return { years, word };
}
