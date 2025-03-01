<script>
	import { page } from "$app/state";

	let url = $state(page);

	$inspect(url.route.id);
</script>

<nav class="background">
	<div class="container d-flex justify-content-evenly flex-wrap pt-2 pb-5">
		<a class="fs-4 text-decoration-none" href="https://forrestbalman.com"
			>Forrest</a>
		<a
			class="fs-4 text-decoration-none {url.route.id === '/'
				? 'accent-text'
				: ''}"
			href="/">Home</a>
		<a
			class="fs-4 text-decoration-none {url.route.id === '/about'
				? 'accent-text'
				: ''}"
			href="/about">About</a>
		<a
			class="fs-4 text-decoration-none {url.route.id ===
			'/tetrachord-calculator'
				? 'accent-text'
				: ''}"
			href="/tetrachord-calculator">Tetrachord Calculator</a>
		<a
			class="fs-4 text-decoration-none {url.route.id === '/book-1'
				? 'accent-text'
				: ''}"
			href="/book-1">Book 1</a>
	</div>
</nav>
