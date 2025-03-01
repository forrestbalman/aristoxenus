<script>
	import "bootstrap/dist/css/bootstrap.min.css";
	import "bootstrap-icons/font/bootstrap-icons.css";
	import "../app.css";
	import Navbar from "$lib/Navbar.svelte";

	let { children } = $props();
</script>

<div class="min-vh-100 d-flex flex-column">
	<Navbar />
	<main class="background d-flex flex-column align-items-center flex-grow-1">
		{@render children()}
	</main>
</div>
