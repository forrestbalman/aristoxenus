<script>
	import Tetrachord from "$lib/Tetrachord.svelte";
	import Excerpt from "$lib/Excerpt.svelte";
	import Short from "$lib/Short.svelte";
	import Long from "$lib/Long.svelte";
	import TheoryButtons from "$lib/TheoryButtons.svelte";

	let excerpt = $state(false);
	let theoryProps = $state({
		long: false,
		short: true,
	});
</script>

<div class="min-vh-100">
	{#if excerpt}
		<Excerpt bind:value={excerpt} />
	{:else}
		<div class="container py-5">
			<h1 class="text-center">Aristoxenian Tetrachord Generator</h1>
			<Tetrachord />
			<TheoryButtons bind:value={theoryProps} />
			{#if theoryProps.long}
				<Long bind:value={excerpt} />
			{:else if theoryProps.short}
				<Short bind:value={excerpt} />
			{/if}
		</div>
	{/if}
</div>
