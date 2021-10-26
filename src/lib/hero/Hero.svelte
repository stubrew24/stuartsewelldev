<script>
	import image from "./profile.jpeg";
	import iconTwitter from "./icon-twitter.png";
	import iconEmail from "./icon-email.png";
	import iconGithub from "./icon-github.png";
	import iconLinkedin from "./icon-linkedin.png";
	import Boop from "../Boop.svelte";
</script>

<section>
	<div class="color-block" />
	<img src={image} alt="Stuart Sewell headshot" />
	<div class="text-block">
		<h1 class="text-heading-1">
			Hello <Boop rotation={20} timing={200}>👋</Boop> I’m Stuart Sewell. A software
			engineer.
		</h1>
		<p class="text-body-1">
			I am a full stack developer primarily focused on the JavaScript stack
			including React, Node.js and TypeScript.
		</p>
		<div class="socials">
			<a href="https://twitter.com/stubrew24" target="_blank" rel="noopener">
				<Boop rotation={20} timing={200}>
					<img height="48" width="48" src={iconTwitter} alt="Twitter icon" />
				</Boop>
			</a>
			<a href="mailto:hello@stuartsewell.dev">
				<Boop rotation={20} timing={200}>
					<img height="48" width="48" src={iconEmail} alt="Email icon" />
				</Boop>
			</a>
			<a href="https://github.com/stubrew24" target="_blank" rel="noopener">
				<Boop rotation={20} timing={200}>
					<img height="48" width="48" src={iconGithub} alt="Github icon" />
				</Boop>
			</a>
			<a
				href="https://www.linkedin.com/in/stubrew24/"
				target="_blank"
				rel="noopener"
			>
				<Boop rotation={20} timing={200}>
					<img height="48" width="48" src={iconLinkedin} alt="Linkedin icon" />
				</Boop>
			</a>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		padding: 40px 0;
		width: 100%;
		align-items: center;
		position: relative;
	}

	img {
		width: 50%;
		aspect-ratio: 1/0.85;
		object-fit: cover;
		z-index: 10;
	}

	.text-block {
		display: flex;
		flex-direction: column;
		gap: 32px;
		width: 50%;
		transform: translateX(-70px);
		filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.7));
		z-index: 10;
	}

	.color-block {
		position: absolute;
		width: 64%;
		height: calc(100% + 185px);
		right: 0;
		background-color: var(--level-1);
		z-index: 0;
	}

	.socials {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		gap: 32px;
		margin-top: 40px;
	}

	.socials a {
		text-decoration: none;
		width: 48px;
		height: 48px;
	}

	.socials img {
		width: 48px;
		height: 48px;
	}

	@media (max-width: 1280px) {
		.text-block {
			transform: translateX(0);
			padding: 0 20px;
		}
	}

	@media (max-width: 768px) {
		section {
			padding: 0;
			flex-direction: column;
		}

		img {
			width: 100%;
			background-color: var(--level-1);
		}

		.text-block {
			width: 100%;
			transform: translateX(0);
			padding: 48px 20px;
			gap: 16px;
			background-color: var(--level-1);
			filter: none;
		}

		.color-block {
			display: none;
		}

		.socials {
			position: relative;
			left: 10%;
			width: 80%;
			justify-content: space-around;
		}
	}
</style>
