<script>
	import iconGithub from "../icon-github.png";
	import iconWeb from "./icon-web.png";
	import iconPlay from "./icon-play.png";
	import Boop from "$lib/Boop.svelte";

	export let image;
	export let title;
	export let description;
	export let link;
	export let github;
	export let play;
</script>

<article>
	<figure>
		<img src={image} alt={title + " screenshot"} class="screenshot" />
		<figcaption>
			<div class="heading">
				<h3 class="text-heading-3">{title}</h3>
				<div class="links">
					{#if link}<a href={link} target="_blank" rel="noopener">
							<Boop rotation={20} timing={200}>
								<img src={iconWeb} alt="Internet icon" width="32" height="32" />
							</Boop>
						</a>
					{/if}
					{#if github}<a href={github} target="_blank" rel="noopener">
							<Boop rotation={20} timing={200}>
								<img
									src={iconGithub}
									alt="Github icon"
									width="32"
									height="32"
								/>
							</Boop>
						</a>
					{/if}
					{#if play}<a href={play} target="_blank" rel="noopener">
							<Boop rotation={20} timing={200}>
								<img
									src={iconPlay}
									alt="Google Play Store icon"
									width="32"
									height="32"
								/>
							</Boop>
						</a>
					{/if}
				</div>
			</div>
			<p class="text-body-1">
				{description}
			</p>
		</figcaption>
	</figure>
</article>

<style>
	figcaption {
		padding: 40px 32px;
		background: var(--level-1);
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.text-body-1 {
		color: var(--light-grey);
	}

	.heading {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.links {
		display: flex;
		flex: none;
		gap: 12px;
	}

	.links a {
		cursor: pointer;
	}

	.screenshot {
		object-fit: cover;
		width: 100%;
		aspect-ratio: 640 / 620;
	}

	@media (max-width: 768px) {
		.screenshot {
			height: 320px;
		}
	}
</style>
