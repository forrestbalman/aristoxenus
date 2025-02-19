<script>
	let { value = $bindable() } = $props();
</script>

<h3>Here's the essentials</h3>
<p>
	In his chapter on <button
		type="button"
		class="fw-bold accent-text border-0 p-0 background"
		onclick={() => (value = true)}
		aria-label="Show differences of the genera">
		differences of the genera (click me to read the complete section)
	</button>
	in the <span class="fst-italic">Elementa Harmonica</span>, Artistoxenus
	summarizes his approach to classifying tetrachords (four note pitch
	collections that span a perfect Fourth) based on their intervallic
	structure, genus (enharmonic, chromatic, or diatonic), and
	<span class="fst-italic">shade</span>.
</p>
<h5>The degrees of the tetrachord are:</h5>
<ol>
	<li>Hypate</li>
	<li>Parhypate</li>
	<li>Lichanus</li>
	<li>Mese</li>
</ol>
<h5>Guidelines for tetrachord structure</h5>
<ol>
	<li>
		The interval from Hypate to Mese is a perfect Fourth (about 500 cents).
	</li>
	<li>
		The interval from Hypate to Parhypate will always be the smallest (or
		tied with Parhypate to Lichanus (also called Pycnum in the book)). Thus,
		this interval will always be between 1/4 (about 50 cents) and 1/2 of a
		tone (about 100 cents).
	</li>
	<li>
		When adding up the intervals from Hypate to Parhypate and Parhypate to
		Lichanus (or just measuring the distance from Hypate to Lichanus), the
		sum will always be less than or equal to 1 + 1/2 tones (about 300
		cents).
	</li>
	<li>
		The interval from Lichanus to Mese will always be the remaining interval
		that completes the perfect Fourth, which is between (inclusive) 1 and 2
		tones (about 400 cents).
	</li>
</ol>
<h5>Genus shade</h5>
<p class="mb-0">
	Because Hypate and Mese are fixed, a tetrachord's genus, and <span
		class="fst-italic">shade</span> of that genus, is determined by the location
	of Hypate and Lichanus. Aristoxenus provides a list 6 shades: 1 Enharmonic, 3
	Chromatic, and 2 Diatonic:
</p>
<ul>
	<li>Enharmonic</li>
	<li>Soft Chromatic</li>
	<li>Hemiolic Chromatic</li>
	<li>Tonic Chromatic</li>
	<li>Soft Diatonic</li>
	<li>Sharp (or Intense) Diatonic</li>
</ul>
<p>
	However, even though Aristoxenus provided these 6 examples, he also suggests
	that, "Lichani are infinite in number." This implies that you could
	subdivide the distance between Hypate and Mese with whichever intervals you
	want, so long as the above guidelines are followed.
</p>
<h5>Enharmonic describes...</h5>
<ol>
	<li>
		The interval between Hypate and Parhypate when it's less than 1/3 tone
		(about 67 cents).
	</li>
	<li>
		The interval between Lichanus and Mese when it's between 1 + 5/6 (about
		367 cents) and 2 tones (about 400 cents).
	</li>
</ol>
<h5>Chromatic describes...</h5>
<ol>
	<li>
		The interval between Hypate and Parhypate when it's between 1/3 and 1/2
		tone (about 100 cents).
	</li>
	<li>
		The interval between Lichanus an Mese when it's between 1 + 1/2 (about
		300 cents) and 1 + 5/6 tones.
	</li>
</ol>
<h5>Diatonic describes...</h5>
<ol>
	<li>
		The interval between Hypate and Parhypate when it's 1/2 tone, (which is
		also shared by some chromatic tetrachords).
	</li>
	<li>
		The interval between Lichanus and Meses when it's between 1 (about 200
		cents) and 1 + 1/2 tones.
	</li>
</ol>
