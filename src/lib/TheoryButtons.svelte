<script>
	let { value = $bindable() } = $props();
</script>

<div class="d-flex justify-content-center gap-2 my-4">
	{#if value.long}
		<button
			type="button"
			class="accent-bg border-0 rounded-2 py-1 px-3"
			onclick={() => {
				value.short = true;
				value.long = false;
			}}>
			I want the <span class="fw-bold">Cliff Notes</span>
		</button>
	{:else if value.short}
		<button
			type="button"
			class="bg-success border-0 rounded-2 py-1 px-3"
			onclick={() => {
				value.short = false;
				value.long = true;
			}}>
			Show me <span class="fw-bold">ALL</span> the details
		</button>
	{/if}
</div>
