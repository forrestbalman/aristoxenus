<script>
	import { base } from "$app/paths";
	let { value = $bindable() } = $props();
</script>

<div>
	<h3>Here's the essentials</h3>
	<p>
		In his chapter on <a
			class="accent-text"
			href="{base}/differences-of-the-genera">
			differences of the genera
		</a>
		in the <span class="fst-italic">Elementa Harmonica</span>, Artistoxenus
		summarizes his approach to classifying tetrachords (four note pitch
		collections that span a perfect Fourth) based on their intervallic
		structure, genus (enharmonic, chromatic, or diatonic), and
		<span class="fst-italic">shade</span>.
	</p>
</div>
<div>
	<h5>The degrees of the tetrachord from lowest to highest are:</h5>
	<ol>
		<li>Hypate</li>
		<li>Parhypate</li>
		<li>Lichanus</li>
		<li>Mese</li>
	</ol>
	<p>
		You'll notice that sometimes, resources on Greek tetrachord theory will
		spell the chords in descending pitch order, as opposed to ascending
		pitch order (which is what I do). I chose to spell the tetrachords in
		ascending pitch order because it's a bit more intuitive to me (since I
		have a background in Western music theory and we typically spell chords
		from the bass upwards), and although there's an argument against the
		authenticity of doing it this way, the tetrachords themselves are the
		same.
	</p>
</div>
<div>
	<h5>Guidelines for tetrachord structure</h5>
	<ol>
		<li>
			The interval from Hypate to Mese is a perfect Fourth (about 500
			cents).
		</li>
		<li>
			The interval from Hypate to Parhypate will always be the smallest
			(or tied with Parhypate to Lichanus). Thus, this interval will
			always be between 1/4 (about 50 cents) and 1/2 of a tone (about 100
			cents).
		</li>
		<li>
			When adding up the intervals from Hypate to Parhypate and Parhypate
			to Lichanus (or just measuring the distance from Hypate to
			Lichanus), the sum will always be between 1/2 tone and 1 and 1/2
			tones (50 and 250 cents).
		</li>
		<li>
			The interval from Lichanus to Mese will always be the remaining
			interval that completes the perfect Fourth, which is between
			(inclusive) 1 and 2 tones (about 400 cents).
		</li>
	</ol>
</div>
<div>
	<h5>Tetrachord Genera</h5>
	<p>
		A tetrachord's genus (plural, genera) is defined by the distance between
		Lichanus and Mese. The genus also has a particular <span
			class="fst-italic">shade</span> based on where in the range it falls.
		There are three different genera (or flavors) of tetrachord:
	</p>
	<ul>
		<li>
			Enharmonic - greater than 1 and 5/6 tones to equal to 2 tones (about
			367 to 400 cents)
		</li>
		<li>
			Chromatic - greater than 1 and 1/4 tones to less than or equal to 1
			and 5/6 tones (250 to about 367 cents)
		</li>
		<li>
			Diatonic - greater than or equal to 1 tone to 1 and 1/4 tones (200
			to 250 cents)
		</li>
	</ul>
	<p>
		Although there's technically an infinite number of shades depending on
		how granular you want to get with where you place Lichanus, Aristoxenus
		provides 6 examples in his treatise: 1 Enharmonic, 3 Chromatic, and 2
		Diatonic.
	</p>
	<ul>
		<li>Enharmonic - 1/4 + 1/4 + 2 tones (50, 50, and 400 cents)</li>
		<li>
			Soft Chromatic - 1/3 + 1/3 + 1 and 5/6 tones (all approximations 67,
			67, and 367 cents)
		</li>
		<li>
			Hemiolic Chromatic - 3/8 + 3/8 + 1 and 3/4 tones (about 75, about
			75, and 350 cents)
		</li>
		<li>
			Tonic Chromatic - 1/2 + 1/2 + 1 and 1/2 tones (100, 100, and 300
			cents)
		</li>
		<li>
			Soft Diatonic - 1/2 + 3/4 + 1 and 1/4 tones (100, 150, and 250
			cents)
		</li>
		<li>Sharp Diatonic - 1/2 + 1 + 1 tones (100, 200, 200 cents)</li>
	</ul>
</div>
<div>
	<h5>Dieses</h5>
	<p>
		The term <span class="fst-italic">diesis</span> (plural, dieses), is used
		in special cases to refer to the smallest interval in the tetrachord when
		it's less than 1/2 tone. Although Aristoxenus doesn't go into detail about
		why 1/2 tones aren't referred to as "Diatonic dieses" or "Greatest Chromatic
		Dieses." My best guess would be that diesis is reserved for tetrachords that
		follow the sort of "small, small, large" pattern that the more "compact to
		the left" genera follow. Some of the contexts diesis is used in are:
	</p>
	<ul>
		<li>
			An Enharmonic diesis (or the lowest Enharmonic diesis) is 1/4 tone
			(50 cents)
		</li>
		<li>A smallest Chromatic diesis is 1/3 tone (about 67 cents)</li>
		<li>A Hemiolic Chromatic diesis is 3/8 tone (about 75 cents)</li>
	</ul>
	<p>
		Keeping this in mind, we could create a series of ranges that describe
		Enharmonic and Chromatic dieses:
	</p>
	<ul>
		<li>
			Enharmonic - greater than or equal to 1/4 tone and less than 1/3
			tone
		</li>
		<li>
			Chromatic - greater than or equal to 1/3 t one and less than 1/2
			tone
		</li>
	</ul>
</div>
<div>
	<h5>Putting it all together</h5>
	<p>
		To start using this nomenclature yourself (or to get a better idea of
		how the generator is coming up with the title for a given tetrachord),
		you can use the "(genus) tetrachord with an (diesis) diesis" format, if
		the tetrachord doesn't have a predefined name.
	</p>
	<p>
		For example, a tetrachord with the following intervals: 1/4 + 1 and 1/4
		+ 1 tones could be accurately described as a Diatonic tetrachord with an
		Enharmonic diesis. The rightmost interval is 1 tone, which is in the
		Diatonic genus, and the smallest interval is 1/4 tone, which is an
		Enharmonic diesis.
	</p>
	<p>
		Another example would be a tetrachord with the following intervals: 1/2
		tone + 7/8 tone + 1 and 1/8 tones. This tetrachord could be described as
		a Diatonic tetrachord. The rightmost interval is 1 and 1/8 tones, which
		falls in the Diatonic range, and 1/2 tone doesn't qualify as a diesis,
		so it's omitted.
	</p>
</div>
<div>
	<h5>In closing</h5>
	<p>
		While I'm hoping this calculator works as a tool for you to construct
		ultra precise tetrachords in the spirit of Aristoxenus, there is an
		important point that's getting lost in the sauce here. Aristoxenus was
		very much about the body's natural ability to perceive and produce
		pitch. Because this calculator is operating at the cent level, there's a
		level of precision that Aristoxenus wasn't able to achieve. In fact, the
		more I think about why Aristoxenus referred to the number of Lichani as
		"infinite," but only provided 6 tetrachord shades, the more I think that
		it was less about the math he was doing, and more about our ability to
		perceive differences between shades of the same genus.
	</p>
	<p>
		If we played two almost identical tetrachords: 50 - 50 - 400 cents, and
		51 - 51 - 398 cents, could we perceive the difference? Are these even
		separate shades because their intervals are so similar? My guess is that
		with the precision we have now, yes they are distinct, but I find that
		it takes away from the practical application of music theory that
		Aristoxenus was trying to achieve, and heads back in the direction of a
		math first approach to music.
	</p>
	<p>
		At the end of the day, I still think the calculator is a useful tool for
		constructing your own scales and tetrachords, but I think it's important
		to remember that all of Aristoxenus' theories were about making
		connections with the sounds you hear and the sounds you produce.
	</p>
</div>
