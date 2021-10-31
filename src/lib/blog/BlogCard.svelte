<script>
	export let cover_image;
	export let title;
	export let description;
	export let canonical_url;
</script>

<article>
	<figure>
		<img src={cover_image} alt={title + " screenshot"} class="cover-image" />
		<figcaption>
			<div class="heading">
				<h3 class="text-heading-3">{title}</h3>
			</div>
			<p class="text-body-1">
				{description}
			</p>
			<a href={canonical_url} target="_blank" rel="noopener">
				Continue reading on dev.to
			</a>
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

	a {
		text-decoration: none;
		color: var(--blue-accent);
	}

	.cover-image {
		object-fit: cover;
		width: 100%;
		aspect-ratio: 3/1;
	}
</style>
