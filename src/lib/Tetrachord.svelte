<script>
	import { onMount, onDestroy } from "svelte";

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
			unmelodic: false,
		},
		error: null,
		unmelodic: false,
	});
	let tickWidth = 2;
	let textHeight = $state(0);
	let buttonHeight = $state(0);
	let errorTimeout;

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

	function makeError(message) {
		tetrachord.error = message;

		if (errorTimeout) {
			clearTimeout(errorTimeout);
		}

		errorTimeout = setTimeout(() => {
			tetrachord.error = null;
		}, 5000);
	}

	function recalculate() {
		// error checking
		if (tetrachord.parhypate.storage < 50) {
			makeError("Parhypate must be at least 50 cents");
			resetStorage();
			return;
		}

		if (tetrachord.parhypate.storage > 100) {
			makeError("Parhypate must be at most 100 cents");
			resetStorage();
			return;
		}

		if (tetrachord.lichanus.storage - tetrachord.parhypate.storage < 50) {
			makeError(
				"The interval from Parhypate to Lichanus must be at least 50 cents"
			);
			resetStorage();
			return;
		}

		if (tetrachord.lichanus.storage > 300) {
			makeError("Lichanus must be at most 300 cents");
			resetStorage();
			return;
		}

		if (tetrachord.lichanus.storage < 100) {
			makeError("Lichanus must be at least 100 cents");
			resetStorage();
			return;
		}

		// reset values
		tetrachord.title = {
			diesis: "",
			genus: "",
			pycnum: false,
			value: null,
			unmelodic: false,
		};

		tetrachord.unmelodic = false;

		//calculate unmelodic
		if (
			tetrachord.parhypate.storage >
			tetrachord.lichanus.storage - tetrachord.parhypate.storage
		) {
			tetrachord.unmelodic = true;
		}

		if (
			tetrachord.lichanus.storage - tetrachord.parhypate.storage <
			tetrachord.parhypate.storage
		) {
			tetrachord.unmelodic = true;
		}

		if (tetrachord.total - tetrachord.lichanus.storage < 200) {
			tetrachord.unmelodic = true;
		}

		if (tetrachord.total - tetrachord.lichanus.storage > 400) {
			tetrachord.unmelodic = true;
		}

		// calculating diesis
		if (tetrachord.parhypate.storage < 67) {
			if (tetrachord.parhypate.storage === 50) {
				tetrachord.title.diesis = "Enharmonic";
			} else {
				tetrachord.title.diesis = "Larger Enharmonic";
			}
		} else if (
			tetrachord.parhypate.storage >= 67 &&
			tetrachord.parhypate.storage < 100
		) {
			if (tetrachord.parhypate.storage === 67) {
				tetrachord.title.diesis = "Soft Chromatic";
			} else if (tetrachord.parhypate.storage === 75) {
				tetrachord.title.diesis = "Hemiolic Chromatic";
			} else {
				tetrachord.title.diesis = "Larger Chromatic";
			}
		} else {
			tetrachord.title.diesis = "Largest Chromatic (or Diatonic)";
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
			"Sharp (Intense) Diatonic tetrachord":
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

	onDestroy(() => {
		if (errorTimeout) {
			clearTimeout(errorTimeout);
		}
	});
</script>

{#snippet tick(id, left)}
	<div
		class="text-bg position-absolute d-flex justify-content-center align-items-center translate-middle-y"
		style="width: {tickWidth}px; height: {textHeight}px; left: {left}%;">
	</div>
{/snippet}

<div class="d-flex flex-column my-5">
	<!-- Tetrachord diagram -->
	<div
		class="w-100 d-flex accent-bg position-relative mb-5"
		style="height: 2px;">
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
	<!-- Title display -->
	<h3 class="text-center mb-3">
		{#if tetrachord.unmelodic}
			This is an unmelodic tetrachord
		{:else if tetrachord.title.value}
			This is a{tetrachord.title.value &&
			(tetrachord.title.value[0].toLowerCase() === "a" ||
				tetrachord.title.value[0].toLowerCase() === "e" ||
				tetrachord.title.value[0].toLowerCase() === "i" ||
				tetrachord.title.value[0].toLowerCase() === "o" ||
				tetrachord.title.value[0].toLowerCase() === "u")
				? "n"
				: ""}
			{tetrachord.title.value}
		{:else}
			This is a{tetrachord.title.genus &&
			(tetrachord.title.genus[0].toLowerCase() === "a" ||
				tetrachord.title.genus[0].toLowerCase() === "e" ||
				tetrachord.title.genus[0].toLowerCase() === "i" ||
				tetrachord.title.genus[0].toLowerCase() === "o" ||
				tetrachord.title.genus[0].toLowerCase() === "u")
				? "n"
				: ""}
			{tetrachord.title.genus} tetrachord with a{tetrachord.title
				.diesis &&
			(tetrachord.title.diesis[0].toLowerCase() === "a" ||
				tetrachord.title.diesis[0].toLowerCase() === "e" ||
				tetrachord.title.diesis[0].toLowerCase() === "i" ||
				tetrachord.title.diesis[0].toLowerCase() === "o" ||
				tetrachord.title.diesis[0].toLowerCase() === "u")
				? "n"
				: ""}
			{tetrachord.title.diesis} diesis
		{/if}
	</h3>
	<!-- Breakdown -->
	<div class="overflow-y-auto mb-3" style="max-height: 200px;">
		{#if tetrachord.unmelodic}
			<h5>
				What makes a tetrachord <span class="fst-italic">unmelodic</span
				>?
			</h5>
			<p>A tetrachord is unmelodic if any of the following are true</p>
			<ul>
				<li>
					If the interval from Hypate to Parhypate, or from Parhypate
					to Lichanus, is less than 1/4 tone
				</li>
				<li>
					If the interval from Paryhypate to Lichanus is less than the
					interval from Hypate to Parhypate
				</li>
			</ul>
		{:else}
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
				>. defines the diesis as the smallest interval in the
				tetrachord. This interval will always be the interval between
				Hypate and Parhypate, and will always be between 50 and 100
				cents, or 1/4 and 1/2 tone.
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
					>11 example tetrachords, 9 rule-following, and 2
					rule-breaking (on pdf pages 1 and 2)</a>
				{#if tetrachord.title.value}
					and the {tetrachord.title.value} is one of them.
				{:else}
					and this isn't one of them.
				{/if}
			</p>
		{/if}
	</div>
	<!-- Form input -->
	<div
		class="d-flex justify-content-center align-items-end gap-3 position-relative mb-3">
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
	<!-- Error -->
	<div style="min-height: {buttonHeight}px;">
		{#if tetrachord.error}
			<p class="accent-text text-center m-0">{tetrachord.error}</p>
		{/if}
	</div>
</div>
