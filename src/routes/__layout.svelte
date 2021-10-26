<script>
	import Header from "$lib/header/Header.svelte";
	import "../reset.css";
	import "../styles.css";
</script>

<Header />

<main>
	<slot />
</main>

<footer />

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
