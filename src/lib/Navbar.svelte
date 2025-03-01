<script>
	import { page } from "$app/state";
	import { base } from "$app/paths";

	let url = $state(page);
</script>

<nav class="background">
	<div class="container d-flex justify-content-evenly flex-wrap pt-2 pb-5">
		<a class="fs-4 text-decoration-none" href="https://forrestbalman.com"
			>Forrest</a>
		<a
			class="fs-4 text-decoration-none {url.route.id === '/'
				? 'accent-text'
				: ''}"
			href="{base}/">Home</a>
		<a
			class="fs-4 text-decoration-none {url.route.id === '/about'
				? 'accent-text'
				: ''}"
			href="{base}/about">About</a>
		<a
			class="fs-4 text-decoration-none {url.route.id ===
			'/tetrachord-calculator'
				? 'accent-text'
				: ''}"
			href="{base}/tetrachord-calculator">Tetrachord Calculator</a>
		<a
			class="fs-4 text-decoration-none {url.route.id === '/book-1'
				? 'accent-text'
				: ''}"
			href="{base}/book-1">Book 1</a>
	</div>
</nav>
