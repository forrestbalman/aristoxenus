<script>
	import "bootstrap/dist/css/bootstrap.min.css";
	import "bootstrap-icons/font/bootstrap-icons.css";
	import "../app.css";

	let { children } = $props();
</script>

<main
	class="background d-flex flex-column align-items-center">
	{@render children()}
</main>
