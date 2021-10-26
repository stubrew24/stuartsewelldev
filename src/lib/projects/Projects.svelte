<script>
	import ProjectCard from "./ProjectCard.svelte";
	import brewersmarket from "./brewersmarket.jpeg";
	import cafe53 from "./cafe53.jpeg";
	import hangman from "./hangman.jpeg";
	import twentyfortyeight from "./twentyfortyeight.jpeg";

	const projectsCol1 = [
		{
			image: cafe53,
			title: "Cafe 53",
			description:
				"Homepage for an independent restaurant in Latvia. Full CMS features, hosted on Firebase and using Google Cloud Translation API to translate between English, Latvian and Russian.",
			link: "https://cafe53.lv/",
		},
		{
			image: brewersmarket,
			title: "Brewers Market",
			description:
				"Final project at Flatiron School. A marketplace for direct beer sales from brewery to consumer with social media features allowing consumers to follow their favourite breweries. Payment handling built with Node.js and Stripe.",
			link: "https://brewersmarket.stuartsewell.dev/",
			github: "https://github.com/stubrew24/brewers-market",
		},
	];
	const projectsCol2 = [
		{
			image: hangman,
			title: "Hangman",
			description:
				"Word guessing game. Initially built in TypeScript then converted to React Native and hosted on the Google Play Store.",
			link: "https://hangman.stuartsewell.dev/",
			github: "https://github.com/stubrew24/hangman",
			play: "https://play.google.com/store/apps/details?id=com.stuartsewell.hangman&hl=en",
		},
		{
			image: twentyfortyeight,
			title: "Twenty Forty Eight",
			description:
				"Recreation of the 2048 game, created during my time at flatiron school.",
			link: "https://twentyfortyeight.stuartsewell.dev/",
			github: "https://github.com/stubrew24/twentyfortyeight",
		},
	];
</script>

<section id="projects">
	<div class="col-1">
		<span class="text-overline">MY PROJECTS</span>
		<h2 class="text-heading-2">Select projects I've worked on.</h2>
		{#each projectsCol1 as project}
			<ProjectCard {...project} />
		{/each}
	</div>
	<div class="col-2">
		{#each projectsCol2 as project}
			<ProjectCard {...project} />
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
