<script>
	import * as Tone from "tone";
	import { onMount, onDestroy } from "svelte";
	import { fraction } from "$lib/fraction.js";
	import { ratio } from "$lib/ratio.js";
	import { tetrachord, presets } from "$lib/tetrachord.svelte.js";

	let tickWidth = 2;
	let textHeight = $state(0);
	let buttonHeight = $state(0);
	let errorTimeout;
	let audio = $state(false);
	let playing = $state(false);
	let synth;

	// converts cent value to percentage of total cents in chord
	// for use in calculating widths for the tetrachord diagram
	function percent(value) {
		return (value / tetrachord.total) * 100;
	}

	// resets the storage values to the current values
	// this is used to prevent the user from inputting invalid values
	function resetStorage() {
		tetrachord.parhypate.storage = tetrachord.parhypate.value;
		tetrachord.lichanus.storage = tetrachord.lichanus.value;
	}

	// sets the storage values to the current values
	// when the user inputs valid values
	function setValueToStorage() {
		tetrachord.parhypate.value = tetrachord.parhypate.storage;
		tetrachord.lichanus.value = tetrachord.lichanus.storage;
	}

	// generates an error message when input is invalid
	function makeError(message) {
		tetrachord.error = message;

		// removes current error if it exists
		if (errorTimeout) {
			clearTimeout(errorTimeout);
		}

		// removes the error after 5 seconds
		errorTimeout = setTimeout(() => {
			tetrachord.error = null;
		}, 5000);
	}

	// generates frequencies from cent values in relation to 440Hz
	// formula = baseFrequency * 2^(cents/1200)
	function makeFrequencies() {
		tetrachord.frequencies.parhypate =
			tetrachord.frequencies.hypate *
			Math.pow(2, tetrachord.parhypate.value / 1200);
		tetrachord.frequencies.lichanus =
			tetrachord.frequencies.hypate *
			Math.pow(2, tetrachord.lichanus.value / 1200);
		tetrachord.frequencies.mese =
			tetrachord.frequencies.hypate *
			Math.pow(2, tetrachord.total / 1200);
	}

	// stops any currently scheduled sounds and removes any lit up tick marks
	function clearChord() {
		tetrachord.light = null;
		Tone.getTransport().stop();
		Tone.getTransport().cancel();
	}

	// for tetrachord playback
	function playChord() {
		// clear any currently scheduled sounds and removes any lit up tick marks
		clearChord();

		// Tone.getTransport().scheduleOnce() uses the sound library to schedule multiple events at specific times
		// set the light value to the tick mark that's associated with the current scale degree
		// trigger a sound at the frequency of the current scale degree
		// aesthetically, I've set the volume of each note to decrease as the scale ascends to represent the weaker fingers plucking the harp
		// sounds are 0.75 seconds apart ascending and descending with a 1 second gap between the two series
		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = "hypate";
			synth.triggerAttack(tetrachord.frequencies.hypate, time, 1);
		}, 0);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = "parhypate";
			synth.triggerAttack(tetrachord.frequencies.parhypate, time, 0.8);
		}, 0.75);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = "lichanus";
			synth.triggerAttack(tetrachord.frequencies.lichanus, time, 0.7);
		}, 1.5);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = "mese";
			synth.triggerAttack(tetrachord.frequencies.mese, time, 0.6);
		}, 2.25);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = null;
		}, 3);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = "mese";
			synth.triggerAttack(tetrachord.frequencies.mese, time, 0.6);
		}, 4.5);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = "lichanus";
			synth.triggerAttack(tetrachord.frequencies.lichanus, time, 0.6);
		}, 5.25);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = "parhypate";
			synth.triggerAttack(tetrachord.frequencies.parhypate, time, 0.6);
		}, 6);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = "hypate";
			synth.triggerAttack(tetrachord.frequencies.hypate, time, 0.6);
		}, 6.75);

		Tone.getTransport().scheduleOnce((time) => {
			tetrachord.light = null;
		}, 7.5);

		// start the transport to play all the scheduled sounds
		Tone.getTransport().start();
	}

	// checks to see if certain inputs are invalid
	function errorChecking() {
		// if hypate to parhypate is less than 50 cents (smallest harmonious interval)
		if (tetrachord.parhypate.storage < 50) {
			makeError("Parhypate must be at least 50 cents");
			resetStorage();
			return;
		}

		// if hypate to parhypate is greater than 100 cents (largest possible interval here according to Aristoxenus)
		if (tetrachord.parhypate.storage > 100) {
			makeError("Parhypate must be at most 100 cents");
			resetStorage();
			return;
		}

		// if parhypate to lichanus is less than 50 cents (smallest harmonious interval)
		if (tetrachord.lichanus.storage - tetrachord.parhypate.storage < 50) {
			makeError(
				"The interval from Parhypate to Lichanus must be at least 50 cents"
			);
			resetStorage();
			return;
		}

		// if parhypate to lichanus is greater than 300 cents (wouldn't allow for a tone between Lichanus and Mese)
		if (tetrachord.lichanus.storage > 300) {
			makeError("Lichanus must be at most 300 cents");
			resetStorage();
			return;
		}

		// if parhypate to lichanus is less than 100 cents (the sum of two smallest harmonious intervals)
		if (tetrachord.lichanus.storage < 100) {
			makeError("Lichanus must be at least 100 cents");
			resetStorage();
			return;
		}
	}

	// for clearing up the current title
	// just for display purposes
	function resetTitle() {
		tetrachord.title = {
			diesis: "",
			genus: "",
			pycnum: false,
			value: null,
			unmelodic: false,
		};
	}

	// determines if a tetrachord is unmelodic
	function unmelodic() {
		// if the interval from Hypate to Parhypate is greater than the interval from Parhypate to Lichanus
		if (
			tetrachord.lichanus.storage - tetrachord.parhypate.storage <
			tetrachord.parhypate.storage
		) {
			tetrachord.title.unmelodic = true;
		}

		// if the interval from Lichanus to Mese is less than 1 tone
		if (tetrachord.total - tetrachord.lichanus.storage < 200) {
			tetrachord.title.unmelodic = true;
		}

		// if the interval from Lichanus to Mese is greater than 2 tones
		if (tetrachord.total - tetrachord.lichanus.storage > 400) {
			tetrachord.title.unmelodic = true;
		}
	}

	// for determining diesis
	function diesis() {
		// enharmonic dieses are 1/4 to less than 1/3 tone
		if (tetrachord.parhypate.storage < 67) {
			if (tetrachord.parhypate.storage === 50) {
				tetrachord.title.diesis = "Enharmonic";
			} else {
				tetrachord.title.diesis = "Larger Enharmonic";
			}
			// chromatic dieses are 1/3 tone to 1/2 tone
		} else if (
			tetrachord.parhypate.storage >= 66 &&
			tetrachord.parhypate.storage < 100
		) {
			if (tetrachord.parhypate.storage === 66) {
				tetrachord.title.diesis = "Soft Chromatic";
			} else if (tetrachord.parhypate.storage === 75) {
				tetrachord.title.diesis = "Hemiolic Chromatic";
			} else if (
				tetrachord.parhypate.storage > 66 &&
				tetrachord.parhypate.storage < 75
			) {
				tetrachord.title.diesis = "Larger than Soft Chromatic";
			} else if (
				tetrachord.parhypate.storage > 75 &&
				tetrachord.parhypate.storage < 100
			) {
				tetrachord.title.diesis = "Larger than Hemiolic Chromatic";
			}
			// chromatic and diatonic genera share a potential diesis
		} else {
			tetrachord.title.diesis = "Largest Chromatic (or Diatonic)";
		}
	}

	// for determining genus
	function genus() {
		// genus can be defined by interval between Lichanus and Mese
		const genus = tetrachord.total - tetrachord.lichanus.storage;

		// enharmonic genus is 1 + 5/6 to 2 tones
		if (genus > 367) {
			tetrachord.title.genus = "Enharmonic";
			// chromatic genus is 1 + 5/6 to 1 + 1/4 tones
		} else if (genus <= 367 && genus > 250) {
			tetrachord.title.genus = "Chromatic";
			// diatonic genus is 1 + 1/4 to 1 tone
		} else if (genus <= 250) {
			tetrachord.title.genus = "Diatonic";
		}
	}

	// named cases for special tetrachords
	// sets a special title for unique cases
	// I forgot "Tonic Chromatic", I will add later
	function specialTitle() {
		const fixedCases = {
			"Enharmonic tetrachord":
				tetrachord.parhypate.storage === 50 &&
				tetrachord.lichanus.storage === 100,
			"Soft Chromatic tetrachord":
				tetrachord.parhypate.storage === 66 &&
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
			"Unnamed Chromatic":
				tetrachord.parhypate.storage === 66 &&
				tetrachord.lichanus.storage === 200,
			"Diatonic with Tonic Chromatic Diesis":
				tetrachord.parhypate.storage === 66 &&
				tetrachord.lichanus.storage === 300,
			"Diatonic with Hemiolic Chromatic Diesis":
				tetrachord.parhypate.storage === 75 &&
				tetrachord.lichanus.storage === 300,
			"Rejected Chromatic":
				tetrachord.parhypate.storage === 100 &&
				tetrachord.lichanus.storage === 150,
			"Unmelodic Chromatic":
				tetrachord.parhypate.storage === 75 &&
				tetrachord.lichanus.storage === 133,
		};

		Object.keys(fixedCases).forEach((key) => {
			if (fixedCases[key]) {
				tetrachord.title.value = key;
			}
		});
	}

	// executes functions in order after button is pressed
	function recalculate() {
		clearChord();

		errorChecking();

		resetTitle();

		unmelodic();

		diesis();

		genus();

		specialTitle();

		setValueToStorage();

		makeFrequencies();
	}

	function preset(name) {
		tetrachord.parhypate.storage = presets[name][0];
		tetrachord.lichanus.storage = presets[name][1];

		recalculate();
	}

	// for handling audio playback
	async function play() {
		if (!audio) {
			await Tone.start();
			audio = true;
			synth = new Tone.Sampler({
				urls: {
					C4: "harp.wav",
				},
				onload: () => {
					playChord();
				},
			}).toDestination();
		} else {
			playChord();
		}
	}

	onMount(() => {
		recalculate();
	});
</script>

{#snippet tick(id, left)}
	<div
		class="position-absolute d-flex justify-content-center align-items-center {tetrachord.light ===
		id
			? 'accent-bg wiggling'
			: 'text-bg'}"
		style="width: {tickWidth}px; height: {textHeight}px; left: {left}%; top: calc(50% - {textHeight /
			2}px);">
	</div>
{/snippet}

<div class="d-flex flex-column">
	<!-- Instructions -->
	<div class="mb-3">
		<h5>How do I use this thing?</h5>
		<p>
			Input the two intervals: Hypate to Parhypate, and Hypate to Lichanus
			(that's scale degrees 1 to 3, not scale degrees 2 to 3), into the
			fields below, then click <span class="accent-bg px-2 rounded-1"
				>Recalculate</span>
			to generate a tetrachord.
		</p>
		<p>
			Because we're working with whole numbers, fractions are approximate.
			For calculation purposes, numbers like 66 and 67 both represent 1/3
			of a tone, for example.
		</p>
	</div>
	<!-- Title display -->
	<div class="mb-4">
		<h3 class="text-center m-0">
			{#if tetrachord.title.unmelodic}
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
	</div>
	<!-- Diagrams -->
	<div class="mb-3">
		<!-- All 3 inner intervals -->
		<div>
			<!-- Ratios -->
			<div class="d-md-flex d-none">
				<div
					id="ratio-hypate-to-parhypate"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: calc({percent(
						tetrachord.parhypate.value
					)}% + {tickWidth * 2}px);">
					<p class="m-0">{ratio(tetrachord.parhypate.value)}</p>
				</div>
				<div
					id="ratio-parhypate-to-lichanus"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: {percent(tetrachord.lichanus.value) -
						percent(tetrachord.parhypate.value)}%;">
					<p class="m-0">
						{ratio(
							tetrachord.lichanus.value -
								tetrachord.parhypate.value
						)}
					</p>
				</div>
				<div
					id="ratio-lichanus-to-mese"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: calc({percent(tetrachord.total) -
						percent(tetrachord.lichanus.value)}% + {tickWidth *
						4}px);">
					<p class="m-0">
						{ratio(tetrachord.total - tetrachord.lichanus.value)}
					</p>
				</div>
			</div>
			<!-- Fractions -->
			<div class="d-md-flex d-none mb-3">
				<div
					id="fraction-hypate-to-parhypate"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: calc({percent(
						tetrachord.parhypate.value
					)}% + {tickWidth * 2}px);">
					<p class="m-0">{fraction(tetrachord.parhypate.value)}</p>
				</div>
				<div
					id="fraction-parhypate-to-lichanus"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: {percent(tetrachord.lichanus.value) -
						percent(tetrachord.parhypate.value)}%;">
					<p class="m-0">
						{fraction(
							tetrachord.lichanus.value -
								tetrachord.parhypate.value
						)}
					</p>
				</div>
				<div
					id="fraction-lichanus-to-mese"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: calc({percent(tetrachord.total) -
						percent(tetrachord.lichanus.value)}% + {tickWidth *
						4}px);">
					<p class="m-0">
						{fraction(tetrachord.total - tetrachord.lichanus.value)}
					</p>
				</div>
			</div>
			<!-- Diagram -->
			<div
				class="d-flex accent-bg position-relative"
				style="height: 2px; margin-bottom: {buttonHeight / 2}px;">
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
					<h4 class="m-0">
						{tetrachord.total - tetrachord.lichanus.value}
					</h4>
				</div>
				{@render tick("mese", percent(tetrachord.total))}
			</div>
		</div>
		<!-- Hypate to Lichanus -->
		<div>
			<!-- Ratios -->
			<div class="d-md-flex d-none">
				<div
					id="ratio-hypate-to-lichanus"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: {percent(tetrachord.lichanus.value)}%;">
					<p class="m-0">{ratio(tetrachord.lichanus.value)}</p>
				</div>
			</div>
			<!-- Fractions -->
			<div class="d-md-flex d-none mb-3">
				<div
					id="fraction-hypate-to-lichanus"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: calc({percent(
						tetrachord.lichanus.value
					)}% + {tickWidth * 2}px);">
					<p class="m-0">{fraction(tetrachord.lichanus.value)}</p>
				</div>
			</div>
			<!-- Diagram -->
			<div
				class="d-flex accent-bg position-relative"
				style="width: {percent(
					tetrachord.lichanus.value
				)}%; height: 2px; margin-bottom: {buttonHeight / 2}px;">
				{@render tick("hypate-to-lichanus-hypate", 0)}
				<div
					id="interval-hypate-to-parhypate"
					class="d-flex justify-content-center align-items-center user-select-none w-100 h-100 position-absolute">
					<h4 class="m-0" bind:clientHeight={textHeight}>
						{tetrachord.lichanus.value}
					</h4>
				</div>
				{@render tick("hypate-to-lichanus-lichanus", 100)}
			</div>
		</div>
		<!-- Parhypate to Mese -->
		<div>
			<!-- Ratios -->
			<div class="d-md-flex d-none justify-content-end">
				<div
					id="ratio-parhypate-to-mese"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: {percent(
						tetrachord.total - tetrachord.parhypate.value
					)}%;">
					<p class="m-0">
						{ratio(tetrachord.total - tetrachord.parhypate.value)}
					</p>
				</div>
			</div>
			<!-- Fractions -->
			<div class="d-md-flex d-none justify-content-end mb-3">
				<div
					id="fraction-parhypate-to-mese"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: {percent(
						tetrachord.total - tetrachord.parhypate.value
					)}%;">
					<p class="m-0">
						{fraction(
							tetrachord.total - tetrachord.parhypate.value
						)}
					</p>
				</div>
			</div>
			<!-- Diagram -->
			<div class="d-flex justify-content-end">
				<div
					class="d-flex accent-bg position-relative"
					style="width: {percent(
						tetrachord.total - tetrachord.parhypate.value
					)}%; height: 2px; margin-bottom: {buttonHeight / 2}px;">
					{@render tick("parhypate-to-mese-parhypate", 0)}
					<div
						id="interval-hypate-to-parhypate"
						class="d-flex justify-content-center align-items-center user-select-none w-100 h-100 position-absolute">
						<h4 class="m-0" bind:clientHeight={textHeight}>
							{tetrachord.total - tetrachord.parhypate.value}
						</h4>
					</div>
					{@render tick("parhypate-to-mese-mese", 100)}
				</div>
			</div>
		</div>
		<!-- Hypate to Mese -->
		<div>
			<!-- Ratios -->
			<div class="d-md-flex d-none justify-content-center">
				<div
					id="ratio-hypate-to-mese"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: {percent(tetrachord.total)}%;">
					<p class="m-0">
						{ratio(tetrachord.total)}
					</p>
				</div>
			</div>
			<!-- Fractions -->
			<div class="d-md-flex d-none justify-content-end mb-3">
				<div
					id="fraction-hypate-to-mese"
					class="d-flex justify-content-center align-items-center user-select-none"
					style="width: {percent(tetrachord.total)}%;">
					<p class="m-0">
						{fraction(tetrachord.total)}
					</p>
				</div>
			</div>
			<!-- Diagram -->
			<div class="d-flex justify-content-end">
				<div
					class="d-flex accent-bg position-relative"
					style="width: {percent(
						tetrachord.total
					)}%; height: 2px; margin-bottom: {buttonHeight / 2}px;">
					{@render tick("hypate-to-mese-hypate", 0)}
					<div
						id="interval-hypate-to-parhypate"
						class="d-flex justify-content-center align-items-center user-select-none w-100 h-100 position-absolute">
						<h4 class="m-0" bind:clientHeight={textHeight}>
							{tetrachord.total}
						</h4>
					</div>
					{@render tick("hypate-to-mese-mese", 100)}
				</div>
			</div>
		</div>
	</div>
	<!-- Error -->
	<div style="min-height: {buttonHeight}px;">
		{#if tetrachord.error}
			<p class="accent-text text-center m-0">{tetrachord.error}</p>
		{/if}
	</div>
	<!-- Form input -->
	<div
		class="d-flex justify-content-center align-items-end gap-3 position-relative mb-5">
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
		<button
			type="button"
			class="accent-bg text-light border-0 rounded-2 px-3"
			style="height: {buttonHeight}px;"
			onclick={play}
			aria-label={playing ? "Stop" : "Play"}>
			{#if playing}
				<i class="bi bi-stop-fill"></i>
			{:else}
				<i class="bi bi-play-fill"></i>
			{/if}
		</button>
	</div>
	<!-- Presets -->
	<div class="mb-4">
		<div>
			<h4 class="mb-3">
				Click a button to generate one of the tetrachords Aristoxenus
				explicitly mentions in <span class="fst-italic"
					>Elementa Harmonica</span>
			</h4>
		</div>
		<div class="d-flex justify-content-center flex-wrap gap-2">
			{#each Object.entries(presets) as [name, values]}
				<button
					type="button"
					class="accent-bg text-light border-0 rounded-2 px-3"
					onclick={() => preset(name)}>
					{name}
				</button>
			{/each}
		</div>
	</div>
	<!-- Breakdown -->
	<div class="overflow-y-auto mb-3" style="max-height: 200px;">
		{#if tetrachord.title.unmelodic}
			<h5>
				What makes a tetrachord <span class="fst-italic">unmelodic</span
				>?
			</h5>
			<p>A tetrachord is unmelodic if any of the following are true</p>
			<ol>
				<li>
					If the interval from Hypate to Parhypate, or from Parhypate
					to Lichanus, is less than 1/4 tone
				</li>
				<li>
					If the interval from Paryhypate to Lichanus is less than the
					interval from Hypate to Parhypate
				</li>
				<li>
					If the interval from Lichanus to Mese isn't between 1 and 2
					tones
				</li>
			</ol>
			<p>
				Because the calculator will prevent you from inputting values
				that would make items 1 or 3 true, this tetrachord must be
				unmelodic because it's middle interval is less than the left
				most interval
			</p>
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
</div>

<style>
	@keyframes wiggle {
		0% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-2px);
		}
		50% {
			transform: translateY(2px);
		}
		75% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.wiggling {
		animation: wiggle 0.1s infinite;
	}
</style>
