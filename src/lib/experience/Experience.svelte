<script>
	let positions = [
		{
			startDate: "2020",
			company: "Nurole",
			title: "Full Stack Developer",
			overview:
				"Transitioning existing codebase from Backbone.js and Ruby on Rails to modern frameworks including Vue and Nuxt. Lead on site wide accessibility improvements and development of a component library.",
		},
		{
			startDate: "2019",
			company: "WeWork",
			title: "Software Engineering Coach",
			overview:
				"Teaching the Flatiron School core curriculum of Ruby, JavaScript & React, clarifying concepts to students and debugging code.",
		},
		{
			startDate: "2016",
			company: "UBREW",
			title: "Brewer / Web Developer",
			overview:
				"Lead on building and deploying various web apps to assist with day-to-day operations including a store for selling brewing products and a booking system for brewery events.",
		},
	];
</script>

<section id="experience">
	<span class="text-overline">WORK EXPERIENCE</span>
	<h2 class="text-heading-2">Some recent highlights</h2>
	<div class="experience-container">
		{#each positions as position}
			<article class="position">
				<h3 class="text-label-1">
					{position.startDate}
				</h3>

				<p class="text-heading-3">
					<span class="company">{position.company}</span>, {position.title}
				</p>
				<p class="text-body-2">{position.overview}</p>
			</article>
		{/each}
	</div>
</section>

<style>
	section {
		margin-top: 90px;
		padding: 120px 72px;
	}

	.text-overline {
		color: var(--light-grey);
	}

	h2 {
		width: 60%;
		margin-top: 8px;
		margin-bottom: 40px;
	}

	.experience-container {
		display: flex;
		gap: 24px;
	}

	.position {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-right: 42px;
		gap: 16px;
	}

	.position > h3 {
		color: var(--light-grey);
	}

	.text-heading-3 {
		flex: none;
	}

	.text-body-2 {
		flex: 1;
	}

	article:nth-child(1) .company {
		color: var(--green-accent);
	}
	article:nth-child(2) .company {
		color: var(--blue-accent);
	}
	article:nth-child(3) .company {
		color: var(--purple-accent);
	}

	@media (max-width: 1024px) {
		section {
			padding: 64px 40px;
		}
		.text-label-1 {
			font-size: 96px;
		}
		.experience-container {
			gap: 10px;
		}

		.position {
			padding-right: 20px;
		}

		h2 {
			width: 70%;
		}
	}

	@media (max-width: 768px) {
		section {
			padding: 64px 20px;
		}
		.experience-container {
			flex-direction: column;
		}
		h2 {
			width: 100%;
		}
	}
</style>
