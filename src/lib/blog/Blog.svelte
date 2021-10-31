<script>
	import { onMount } from "svelte";
	import BlogCard from "./BlogCard.svelte";

	let evenArticles = [];
	let oddArticles = [];
	let articles = [];

	onMount(async () => {
		const response = await fetch(
			"https://dev.to/api/articles?username=stubrew24"
		);
		articles = await response.json();

		await articles.forEach((article, index) => {
			if (index % 2 === 0) {
				evenArticles.push(article);
			} else {
				oddArticles.push(article);
			}
		});
	});

	function filterArticles(articles, oddEven) {
		return articles.filter((article, index) => {
			return index % 2 === oddEven;
		});
	}
</script>

<section id="blog">
	<div class="col-1">
		<span class="text-overline">BLOG</span>
		<h2 class="text-heading-2">Recent blog posts.</h2>
		{#each filterArticles(articles, 0) as article}
			<BlogCard {...article} />
		{/each}
	</div>
	<div class="col-2">
		{#each filterArticles(articles, 1) as article}
			<BlogCard {...article} />
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		padding: 120px 72px;
		gap: 24px;
	}

	.text-overline {
		color: var(--light-grey);
	}

	.col-1,
	.col-2 {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	@media (max-width: 768px) {
		section {
			padding: 64px 20px;
			flex-direction: column;
		}
	}
</style>
