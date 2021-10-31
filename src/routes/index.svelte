<script context="module">
	export const prerender = true;
</script>

<script>
	import Hero from "$lib/hero/Hero.svelte";
	import Experience from "$lib/experience/Experience.svelte";
	import Projects from "$lib/projects/Projects.svelte";
	// import Blog from "$lib/blog/Blog.svelte";
	import Contact from "$lib/contact/Contact.svelte";
</script>

<svelte:head>
	<title>Stuart Sewell | Portfolio</title>
</svelte:head>

<section>
	<Hero />
	<Experience />
	<Projects />
	<!-- <Blog /> -->
	<Contact />
</section>
