<script>
	import { slide } from "svelte/transition";
	import { bounceOut } from "svelte/easing";

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	const menuLinks = [
		{
			title: "Experience",
			url: "#experience",
		},
		{
			title: "Projects",
			url: "#projects",
		},
		{
			title: "Contact",
			url: "#contact",
		},
	];
</script>

<header>
	<span class="title text-overline">STUART SEWELL | PORTFOLIO</span>
	<button class="burger-btn" on:click={toggleMenu}>
		{showMenu ? "❌" : "🍔"}
	</button>

	<ul class="desktop">
		{#each menuLinks as link}
			<li class={link.title == "Contact" ? "contact text-button" : ""}>
				<a href={link.url}>
					{link.title}
				</a>
			</li>
		{/each}
	</ul>

	{#if showMenu}
		<ul
			class="mobile"
			in:slide={{ easing: bounceOut }}
			out:slide={{ duration: 200 }}
		>
			{#each menuLinks as link}
				<li on:click={toggleMenu}>
					<a href={link.url} class="text-heading-3">
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>

<style>
	header {
		padding: 0 72px;
		display: flex;
		justify-content: space-between;
	}

	ul.desktop {
		display: flex;
		margin: 0;
		padding: 0;
		z-index: 10;
	}

	ul.mobile {
		display: none;
	}

	li {
		list-style: none;
		padding: 32px;
		margin: 0;
	}

	header a {
		text-decoration: none;
		color: var(--text);
	}

	.title {
		color: var(--light-grey);
		padding: 32px 0;
	}

	li.contact {
		background: var(--primary);
		color: var(--text);
	}

	.burger-btn {
		display: none;
	}

	@media (max-width: 1280px) {
		header {
			padding: 0;
		}

		.title {
			padding-left: 32px;
		}
	}

	@media (max-width: 768px) {
		header {
			padding: 15px;
			align-items: center;
		}
		.title {
			padding: 0;
		}
		ul.desktop {
			display: none;
		}
		ul.mobile {
			position: absolute;
			top: 70px;
			left: 0;
			right: 0;
			bottom: 0;
			background: var(--primary);
			z-index: 20;
			display: flex;
			flex-direction: column;
			margin: 0;
			padding: 24px 0;
		}

		li {
			padding: 30px 12px;
			cursor: pointer;
			margin: 10px 0;
		}
		.burger-btn {
			display: block;
			background-color: transparent;
			border: none;
			font-size: 1.6em;
			cursor: pointer;
			z-index: 40;
		}
	}
</style>
