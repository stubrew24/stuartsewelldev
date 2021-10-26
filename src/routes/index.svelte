<script context="module">
	export const prerender = true;
</script>

<script>
	import Contact from "$lib/contact/Contact.svelte";
	import Experience from "$lib/experience/Experience.svelte";
	import Hero from "$lib/hero/Hero.svelte";
	import Projects from "$lib/projects/Projects.svelte";
</script>

<svelte:head>
	<title>Stuart Sewell | Portfolio</title>
</svelte:head>

<section>
	<Hero />
	<Experience />
	<Projects />
	<Contact />
</section>

<style>
</style>
