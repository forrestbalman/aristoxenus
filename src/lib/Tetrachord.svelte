<script>
	import { onMount } from "svelte";

	let tetrachord = $state({
		total: 500,
		parhypate: {
			storage: 50,
			value: 50,
		},
		lichanus: {
			storage: 100,
			value: 100,
		},
		title: {
			diesis: "Enharmonic",
			genus: "Enharmonic",
			pycnum: true,
			value: null,
		},
	});
	let tickWidth = 2;
	let textHeight = $state(0);
	let buttonHeight = $state(0);

	$inspect(textHeight);

	function percent(value) {
		return (value / tetrachord.total) * 100;
	}

	function resetStorage() {
		tetrachord.parhypate.storage = tetrachord.parhypate.value;
		tetrachord.lichanus.storage = tetrachord.lichanus.value;
	}

	function setValueToStorage() {
		tetrachord.parhypate.value = tetrachord.parhypate.storage;
		tetrachord.lichanus.value = tetrachord.lichanus.storage;
	}

	function recalculate() {
		// check for invalid number values
		// hypate to parhypate must be greater than a quarter tone
		if (
			tetrachord.parhypate.storage < 50 ||
			tetrachord.parhypate.storage > 100
		) {
			resetStorage();
			return;
		}

		// interval from parhypate to lichanus must be greater than hypate to parhypate
		if (
			tetrachord.lichanus.storage - tetrachord.parhypate.storage <
			tetrachord.parhypate.storage
		) {
			resetStorage();
			return;
		}

		if (tetrachord.lichanus.storage > 300) {
			resetStorage();
			return;
		}

		// reset values
		tetrachord.title.diesis = "";
		tetrachord.title.genus = "";
		tetrachord.title.unmelodic = false;
		tetrachord.title.value = null;

		// calculating diesis
		if (tetrachord.parhypate.storage < 67) {
			if (tetrachord.parhypate.storage === 50) {
				tetrachord.title.diesis = "Enharmonic";
			} else {
				tetrachord.title.diesis = "slightly larger Enharmonic";
			}
		} else if (
			tetrachord.parhypate.storage >= 67 &&
			tetrachord.parhypate.storage < 100
		) {
			if (tetrachord.parhypate.storage === 67) {
				tetrachord.title.diesis = "Soft Chromatic";
			} else if (tetrachord.parhypate.storage === 75) {
				tetrachord.title.diesis = "Hemiolic Chromatic";
			}
		} else {
			tetrachord.title.diesis = "Chromatic or Diatonic";
		}

		// calculating genus
		const genus = tetrachord.total - tetrachord.lichanus.storage;
		if (genus > 367) {
			tetrachord.title.genus = "Enharmonic";
		} else if (genus <= 367 && genus > 250) {
			tetrachord.title.genus = "Chromatic";
		} else if (genus <= 250) {
			tetrachord.title.genus = "Diatonic";
		}

		// title value
		const fixedCases = {
			"Enharmonic tetrachord":
				tetrachord.parhypate.storage === 50 &&
				tetrachord.lichanus.storage === 100,
			"Soft Chromatic tetrachord":
				tetrachord.parhypate.storage === 67 &&
				tetrachord.lichanus.storage === 133,
			"Hemiolic Chromatic tetrachord":
				tetrachord.parhypate.storage === 75 &&
				tetrachord.lichanus.storage === 150,
			"Intense Chromatic tetrachord":
				tetrachord.parhypate.storage === 100 &&
				tetrachord.lichanus.storage === 200,
			"Soft Diatonic tetrachord":
				tetrachord.parhypate.storage === 100 &&
				tetrachord.lichanus.storage === 250,
			"Intense Diatonic tetrachord":
				tetrachord.parhypate.storage === 100 &&
				tetrachord.lichanus.storage === 300,
			"Unnamed Chromatic tetrachord":
				tetrachord.parhypate.storage === 67 &&
				tetrachord.lichanus.storage === 200,
			"Diatonic tetrachord with a Soft Chromatic Diesis":
				tetrachord.parhypate.storage === 67 &&
				tetrachord.lichanus.storage === 300,
			"Diatonic tetrachord with a Hemiolic Chromatic Diesis":
				tetrachord.parhypate.storage === 75 &&
				tetrachord.lichanus.storage === 300,
		};

		Object.keys(fixedCases).forEach((key) => {
			if (fixedCases[key]) {
				tetrachord.title.value = key;
			}
		});

		// assign new values so fields update
		setValueToStorage();
	}

	onMount(() => {
		recalculate();
	});
</script>

{#snippet tick(id, left)}
	<div
		class="text-bg position-absolute d-flex justify-content-center align-items-center translate-middle-y"
		style="width: {tickWidth}px; height: {textHeight}px; left: {left}%;">
	</div>
{/snippet}

<div class="d-flex flex-column my-5 gap-5">
	<div class="w-100 d-flex accent-bg position-relative" style="height: 2px;">
		{@render tick("hypate", 0)}
		<div
			id="interval-hypate-to-parhypate"
			class="d-flex justify-content-center align-items-center user-select-none h-100 position-absolute"
			style="width: calc({percent(
				tetrachord.parhypate.value
			)}% - {tickWidth}px); left: 0;">
			<h4 class="m-0" bind:clientHeight={textHeight}>
				{tetrachord.parhypate.value}
			</h4>
		</div>
		{@render tick("parhypate", percent(tetrachord.parhypate.value))}
		<div
			id="interval-parhypate-to-lichanus"
			class="d-flex justify-content-center align-items-center user-select-none h-100 position-absolute"
			style="width: calc({percent(tetrachord.lichanus.value) -
				percent(tetrachord.parhypate.value)}% - {tickWidth *
				2}px); left: calc({percent(
				tetrachord.parhypate.value
			)}% + {tickWidth}px);">
			<h4 class="m-0">
				{tetrachord.lichanus.value - tetrachord.parhypate.value}
			</h4>
		</div>
		{@render tick("lichanus", percent(tetrachord.lichanus.value))}
		<div
			id="interval-lichanus-to-mese"
			class="d-flex justify-content-center align-items-center user-select-none h-100 position-absolute"
			style="width: calc({percent(tetrachord.total) -
				percent(
					tetrachord.lichanus.value
				)}% - {tickWidth}px); left: calc({percent(
				tetrachord.lichanus.value
			)}% + {tickWidth}px);">
			<h4 class="m-0">{tetrachord.total - tetrachord.lichanus.value}</h4>
		</div>
		{@render tick("mese", percent(tetrachord.total))}
	</div>
	<h3 class="text-center">
		{#if tetrachord.title.value}
			This is a{tetrachord.title.value[0].toLowerCase() === "a" ||
			tetrachord.title.value[0].toLowerCase() === "e" ||
			tetrachord.title.value[0].toLowerCase() === "i" ||
			tetrachord.title.value[0].toLowerCase() === "o" ||
			tetrachord.title.value[0].toLowerCase() === "u"
				? "n"
				: ""}
			{tetrachord.title.value}
		{:else}
			This is a{tetrachord.title.genus[0].toLowerCase() === "a" ||
			tetrachord.title.genus[0].toLowerCase() === "e" ||
			tetrachord.title.genus[0].toLowerCase() === "i" ||
			tetrachord.title.genus[0].toLowerCase() === "o" ||
			tetrachord.title.genus[0].toLowerCase() === "u"
				? "n"
				: ""}
			{tetrachord.title.genus} tetrachord with a{tetrachord.title.diesis[0].toLowerCase() ===
				"a" ||
			tetrachord.title.diesis[0].toLowerCase() === "e" ||
			tetrachord.title.diesis[0].toLowerCase() === "i" ||
			tetrachord.title.diesis[0].toLowerCase() === "o" ||
			tetrachord.title.diesis[0].toLowerCase() === "u"
				? "n"
				: ""}
			{tetrachord.title.diesis} diesis
		{/if}
	</h3>
	<div class="overflow-y-auto" style="max-height: 200px;">
		<h5>What's the genus?</h5>
		<p>
			Aristoxenus would consider this tetrachord to be of the <span
				class="fw-bold">{tetrachord.title.genus}</span>
			genus. This is because the interval from Lichanus to Mese is between
			{#if tetrachord.title.genus === "Enharmonic"}
				367 and 400 cents, or 1 + 5/6 and 2 tones.
			{:else if tetrachord.title.genus === "Chromatic"}
				367 and 250 cents, or 1 + 5/6 and 1 + 1/4 tones.
			{:else if tetrachord.title.genus === "Diatonic"}
				Diatonic tetrachords are the most consonant and are used in
				melodic contexts.
			{/if}
		</p>
		<h5>What's the diesis?</h5>
		<p>
			Aristoxenus would describe this tetrachord's diesis as <span
				class="fw-bold">{tetrachord.title.diesis}</span
			>. defines the diesis as the smallest interval in the tetrachord.
			This interval will always be the interval between Hypate and
			Parhypate, and will always be between 50 and 100 cents, or 1/4 and
			1/2 tone.
		</p>
		<h5>
			Is this is a <span class="fst-italic">special</span> tetrachord?
		</h5>
		<p>
			In his <span class="fst-italic">Elementa Harmonica</span>,
			Artistoxenus provided
			<a
				class="accent-text"
				href="https://eamusic.dartmouth.edu/~larry/published_articles/divisions_of_the_tetrachord/chapter3.pdf"
				target="_blank"
				>11 example tetrachords, 9 rule-following, and 2 rule-breaking
				(on pdf pages 1 and 2)</a>
			{#if tetrachord.title.value}
				and the {tetrachord.title.value} is one of them.
			{:else}
				and this isn't one of them.
			{/if}
		</p>
	</div>
	<div class="d-flex justify-content-center align-items-end gap-3">
		<div>
			<label for="parhypate">Hypate to Parhypate (in cents)</label>
			<input
				id="parhypate"
				class="form-control"
				type="number"
				bind:value={tetrachord.parhypate.storage}
				bind:clientHeight={buttonHeight} />
		</div>
		<div>
			<label for="lichanus">Hypate to Lichanus (in cents)</label>
			<input
				id="lichanus"
				class="form-control"
				type="number"
				bind:value={tetrachord.lichanus.storage} />
		</div>
		<button
			type="button"
			class="accent-bg text-light border-0 rounded-2 px-3"
			style="height: {buttonHeight}px;"
			onclick={recalculate}>
			Recalculate
		</button>
	</div>
</div>
