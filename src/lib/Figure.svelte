<script>
	import { base } from "$app/paths";
	let { file, caption } = $props();
</script>

<figure>
	<img
		src="{base}/{file}.webp"
		alt={caption}
		class="img-fluid mb-3 rounded-1" />
	<figcaption class="fw-lighter">
		{caption}
	</figcaption>
</figure>
