<script>
	let { color, text } = $props();
	let dimensions = 24;
</script>

<div class="d-flex gap-1 align-items-center user-select-none">
	<div
		class="rounded-1"
		style="width: {dimensions}px; height: {dimensions}px; background: {color};">
	</div>
	<p class="m-0">{text}</p>
</div>
