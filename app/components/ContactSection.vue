<script setup lang="ts">
import type { SiteCollectionItem } from "@nuxt/content";

const props = defineProps<{
  contact: SiteCollectionItem["contact"];
  email: SiteCollectionItem["email"];
  social: SiteCollectionItem["social"];
}>();

const { address: emailAddress, href: emailHref } = useEmailAddress(() => props.email);

// Show the readable part of each profile URL, e.g. "/in/stuart-sewell".
function shortUrl(url: string): string {
  const { pathname } = new URL(url);
  return pathname.replace(/\/$/, "");
}

type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "sent" | "failed";

const form = reactive<Record<Field, string>>({ name: "", email: "", message: "" });
const botField = ref("");
const errors = reactive<Partial<Record<Field, string>>>({});
const status = ref<Status>("idle");

const fieldRefs: Partial<Record<Field, HTMLInputElement | HTMLTextAreaElement>> = {};
function setFieldRef(field: Field) {
  return (el: unknown) => {
    if (el) fieldRefs[field] = el as HTMLInputElement | HTMLTextAreaElement;
  };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const copy = computed(() => props.contact.form);
const failedMessage = computed(() => copy.value.failed.replace("{email}", emailAddress.value));

// Link a field to its hint and/or error so screen readers announce both.
function describedBy(field: Field, hint?: string): string | undefined {
  const ids = [hint, errors[field] ? `contact-${field}-error` : undefined].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

function validate(): boolean {
  const messages = copy.value.errors;
  errors.name = form.name.trim() ? undefined : messages.name;
  errors.email = EMAIL_PATTERN.test(form.email.trim()) ? undefined : messages.email;
  errors.message = form.message.trim() ? undefined : messages.message;

  const firstInvalid = (["name", "email", "message"] as Field[]).find((f) => errors[f]);
  if (firstInvalid) {
    fieldRefs[firstInvalid]?.focus();
    return false;
  }
  return true;
}

async function submit() {
  if (status.value === "sending" || !validate()) return;

  status.value = "sending";
  try {
    // Netlify Forms: the form is detected at deploy time from the prerendered
    // HTML, and submissions are POSTed (urlencoded) to any static path.
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        "bot-field": botField.value,
        ...form,
      }).toString(),
    });
    if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

    status.value = "sent";
    form.name = "";
    form.email = "";
    form.message = "";
  } catch {
    status.value = "failed";
  }
}
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-heading">
    <div class="wrap inner">
      <div class="columns">
        <div class="intro">
          <h2 id="contact-heading" class="display heading">
            {{ contact.heading }}
            <span class="display-italic emphasis">{{ contact.headingEmphasis }}</span>
          </h2>
          <p class="body">{{ contact.body }}</p>
          <dl class="channels">
            <div>
              <dt class="label">Email</dt>
              <dd>
                <a v-if="emailHref" :href="emailHref">{{ emailAddress }}</a>
                <span v-else>{{ emailAddress }}</span>
              </dd>
            </div>
            <div>
              <dt class="label">LinkedIn</dt>
              <dd>
                <a :href="social.linkedin" target="_blank" rel="noopener">
                  {{ shortUrl(social.linkedin) }}<span class="visually-hidden"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div>
              <dt class="label">GitHub</dt>
              <dd>
                <a :href="social.github" target="_blank" rel="noopener">
                  {{ shortUrl(social.github).slice(1) }}<span class="visually-hidden"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="form"
          novalidate
          @submit.prevent="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="visually-hidden" aria-hidden="true">
            <label>Leave this empty <input v-model="botField" name="bot-field" tabindex="-1" autocomplete="off" /></label>
          </p>

          <div class="field">
            <label for="contact-name">{{ copy.labels.name }}</label>
            <input
              id="contact-name"
              :ref="setFieldRef('name')"
              v-model="form.name"
              name="name"
              type="text"
              autocomplete="name"
              required
              :aria-invalid="!!errors.name"
              :aria-describedby="describedBy('name')"
            />
            <p v-if="errors.name" id="contact-name-error" class="error">{{ errors.name }}</p>
          </div>

          <div class="field">
            <label for="contact-email">{{ copy.labels.email }}</label>
            <input
              id="contact-email"
              :ref="setFieldRef('email')"
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              :aria-invalid="!!errors.email"
              :aria-describedby="describedBy('email')"
            />
            <p v-if="errors.email" id="contact-email-error" class="error">{{ errors.email }}</p>
          </div>

          <div class="field">
            <label for="contact-message">{{ copy.labels.message }}</label>
            <p v-if="copy.messageHint" id="contact-message-hint" class="hint">{{ copy.messageHint }}</p>
            <textarea
              id="contact-message"
              :ref="setFieldRef('message')"
              v-model="form.message"
              name="message"
              rows="5"
              required
              :aria-invalid="!!errors.message"
              :aria-describedby="describedBy('message', copy.messageHint ? 'contact-message-hint' : undefined)"
            />
            <p v-if="errors.message" id="contact-message-error" class="error">{{ errors.message }}</p>
          </div>

          <button type="submit" class="submit" :disabled="status === 'sending'">
            {{ status === "sending" ? copy.sending : copy.submit }}
          </button>

          <p class="status" role="status">
            <template v-if="status === 'sent'">{{ copy.sent }}</template>
            <template v-else-if="status === 'failed'">{{ failedMessage }}</template>
          </p>
        </form>
      </div>

      <slot name="footer" />
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--color-ink);
  color: var(--color-paper);
  scroll-margin-top: 1rem;
}

.inner {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-block: 6.5rem 3rem;
}

.columns {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.intro {
  flex: 1 1 23.75rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.heading {
  font-size: clamp(3rem, 6.4vw, 5.75rem);
}

.emphasis {
  color: var(--color-accent-on-dark);
}

.body {
  max-width: 44ch;
  color: var(--color-on-ink-muted);
}

.channels {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.channels div {
  display: grid;
  grid-template-columns: 6rem 1fr;
  align-items: baseline;
  gap: 1rem;
}

.channels .label {
  color: var(--color-on-ink-faint);
}

.channels dd {
  min-width: 0;
  overflow-wrap: anywhere;
}

.channels a {
  display: inline-block;
  padding-block: 0.25rem;
  color: var(--color-paper);
  font-weight: 600;
}

.channels a:hover {
  color: var(--color-accent-on-dark);
}

.form {
  flex: 1 1 26.25rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

label {
  font-size: 0.9375rem;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  min-width: 0;
  padding: 0.875rem 1rem;
  border: 1.5px solid transparent;
  border-radius: 0.75rem;
  background: var(--color-ink-raised);
  color: var(--color-paper);
}

textarea {
  resize: vertical;
}

input[aria-invalid="true"],
textarea[aria-invalid="true"] {
  border-color: var(--color-accent-on-dark);
}

.hint {
  margin-top: -0.125rem;
  font-size: 0.9375rem;
  color: var(--color-on-ink-muted);
}

.error {
  font-size: 0.9375rem;
  color: var(--color-accent-on-dark);
}

.submit {
  align-self: flex-start;
  padding: 0.875rem 1.625rem;
  border: none;
  border-radius: var(--radius-pill);
  background: var(--color-accent);
  color: var(--color-on-accent);
  font-weight: 600;
  cursor: pointer;
}

.submit:hover {
  background: var(--color-paper);
  color: var(--color-ink);
}

.submit:disabled {
  opacity: 0.7;
  cursor: progress;
}

.status:empty {
  display: none;
}

:focus-visible {
  outline-color: var(--color-accent-on-dark);
}
</style>
