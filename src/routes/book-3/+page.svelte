<script>
	import { base } from "$app/paths";
	import ColorCode from "$lib/ColorCode.svelte";
	import Figure from "$lib/Figure.svelte";
	import Bold from "$lib/Bold.svelte";
	import Italics from "$lib/Italics.svelte";
</script>

<div class="container">
	<!-- Intro/Color Code -->
	<div class="mb-3">
		<h1 class="text-center">Book 3</h1>
		<div class="d-flex gap-2 flex-wrap justify-content-center">
			<ColorCode color="#85c1e9" text="Focus on scales/genus" />
			<ColorCode color="#f7dc6f" text="About intervals in general" />
			<ColorCode color="#82e0aa" text="About pycna" />
			<ColorCode color="#d98880" text="About ditones" />
		</div>
	</div>
	<!-- Summary -->
	<div>
		<h5>Summary</h5>
		<p>
			Book 3 is non-stop proofs about the information we learned about
			tetrachords and the scales they form in the previous books.
			According to Henry S. Macran, the author and translator of
			Aristoxenus' writing to English, Book 3 consists of,
			"...propositions of details, following one another in logical order
			like the...Elements of Euclid." While I haven't read Euclid's <span
				class="fst-italic">Elements</span> as I write this, the style that
			Aristoxenus uses to organize Book 3 is a series of, for lack of a better
			word, chapters that explain (almost to the point of exhaustion in my
			opinion) the rules and guidelines that govern harmonic construction in
			the music of his time.
		</p>
		<p>
			Because of this, there are going to be less takeaways in the "Cliff
			Notes" immediately below, and there aren't really themes about
			aesthetics or philosophy in the same way that the previous books
			had.
		</p>
		<ol>
			<li>
				Tetrachords can be linked conjunctly (sharing a starting/ending
				note) or disjunctly (separated by a tone).
			</li>
			<li>
				Nothing explicitly states that tetrachords from different genera
				can't be made into a larger scale, but there are rules about how
				to go about it.
			</li>
			<li>Tetrachords can only be modified by their inner intervals.</li>
			<li>Simple intervals are created by successive notes.</li>
			<li>
				<span class="fst-italic">Species</span> and
				<span class="fst-italic">figure</span> are interchangeable terms,
				and refer to a set of identival intervals whose sum won't change
				when rearranged.
			</li>
		</ol>
		<p>
			Some of the ways these proofs are phrased (or translated, it's
			difficult to know for sure) makes it not only challenging to
			understand the significance of the proof, but the operations being
			performed to illustrate it. I'll mention this when it comes up on a
			case by case basis.
		</p>
	</div>
	<div>
		<h5 class="scales-text">
			“Successive Tetrachords are either Conjunct or Disjunct.” (209)
		</h5>
		<p>
			This is referring to whether or not a pair of tetrachords are linked
			by their starting/ending note, or separated by a tone. Notice how
			both tetrachords have an identical interval structure whether you
			start on A for the higher tetrachord in the first example, and B for
			the higher tetrachord in the second.
		</p>
		<Figure
			file={51}
			caption="A diagram of a conjunct and a disjunct tetrachord from the Diatonic genus." />
	</div>
	<div>
		<h5 class="scales-text">
			"Tetrachords similar in species cannot be separated by a dissimilar
			tetrachord...dissimilar but successive tetrachords cannot be
			separated by any tetrachord…" (210)
		</h5>
		<p>
			This quote is interesting because it's the first time I'm aware of
			that Aristoxenus suggests unlike tetrachords can be chained
			together. I wish there was more information about this, however the
			treatise ends before we get a chance to know.
		</p>
		<p>
			Also, the term "successive" refers to things that are next to each
			other. So, by that logic, anything that's separated aby something
			else isn't successive by definition like what's being implied in the
			second part of the quote.
		</p>
		<p>
			The first part of the quote says similar tetrachords can't be
			separated by a dissimilar tetrachord. This is a bit confusing,
			because this would imply that a scale consisting of 3 or more
			tetrachords would have to be made up of two similar tetrachords,
			followed by a dissimilar one.
		</p>
		<Figure
			file={52}
			caption="Scenario 1, two Intense Diatonic disjunct tetrachords followed by a conjunct Diatonic tetrachord with an Enharmonic diesis." />
		<p>
			The second part of the quote says something that results in a
			similar conclusion. Two tetrachords that are dissimilar can be
			continuous like in the scenario below, but separating them with a
			third dissimilar tetrachord isn't allowed because they wouldn't be
			able to be continuous on account of Aristoxenus' definition from
			Book 2.
		</p>
		<Figure
			file={53}
			caption="Scenario 2, two tetrachords, one Diatonic, and one Chromatic forming a conjunct octave scale." />
	</div>
	<div>
		<h5 class="interval-text">
			“The interval contained by successive notes is simple. For if the
			containing notes are successive, no note is wanting; if none is
			wanting, none will intrude; if none intrudes, none will divide the
			interval.” (210)
		</h5>
		<p>
			This quote implies that notes that sit next to one another form
			successive intervals. This gives us a bit of a confirmation about
			what "successive" means.
		</p>
		<p>
			The majority of the importance of this proof, to me, comes from the
			ditone (or intervals greater than a tone for that matter). In an
			Enharmonic tetrachord, there is a successive ditone from Lichanus to
			Mese.
		</p>
		<p>
			The ditone can also not be a simple interval if the notes aren't
			successive. For example, in a Diatonic tetrachord B-C-D-E, the
			interval from Parhypate to Mese is a ditone, C-E. However, the D
			that separates the C and E interrupts the succession. Therefore, the
			interval isn't simple.
		</p>
		<Figure
			file={42}
			caption="A diagram of a ditone from Book 2 showing continuous and transilient thirds. A continuous third is simple while a transilient third is not." />
	</div>
	<div>
		<h5 class="interval-text">
			"In variations of genus, it is only the parts of the Fourth that
			undergo change” (211)
		</h5>
		<p>
			All this quote appears to be saying is that the outer notes in a
			tetrachord are fixed. This would probably be an imporant reminder in
			a double or multiple scale context, where the tetrachords are
			blended together.
		</p>
		<Figure
			file={33}
			caption="A diagram of the outer, middle, and leftmost intervals of a tetrachord." />
	</div>
	<div>
		<h5 class="interval-text">
			“Every genus comprises at most as many simple intervals as are
			contained in the Fifth” (211)
		</h5>
		<p>
			This is another interesting little theory. If you take a tetrachord
			and add a disjunct tone on top of it, like you were preparing to add
			another tetrachord to make an octave scale, the number of unique
			simple intervals doesn't change.
		</p>
		<Figure
			file={54}
			caption="A diagram of a Diatonic tetrachord's unique intervals, and a Diatonic tetrachord with a disjunct tone's unique intervals." />
	</div>
	<div>
		<h5 class="pycna-text">
			“A Pycnum cannot be followed by a Pycnum or by part of a Pycnum.”
			(212)
		</h5>
		<p>
			If you were to take multiple Pycna or part of a Pycnum, one or both
			of the following would happen. Either, the scale wouldn't span a
			Fourth, or the scale would have too many successive dieses, which
			Aristoxenus says can't be sung beyond 2.
		</p>
		<Figure
			file={55}
			caption="A diagram showing what happens when there are multiple pycna in a row." />
	</div>
	<div>
		<h5 class="pycna-text">
			“The lower of the notes contained the ditone is the highest note of
			a Pycnum, and the higher of the notes containing the ditone is the
			lowest note of a Pycnum.” (212)
		</h5>
		<p>
			In the case of conjunct Enharmonic tetrachords, which are the only
			tetrachords that can contain a successive ditone like what's being
			described here, the ditone is bounded by the lowest and highest
			notes of the Pycnum.
		</p>
		<Figure
			file={56}
			caption="A diagram of conjunct Enharmonic tetrachords showing the lower ditone bounding the two pycna of the scale." />
	</div>
	<div>
		<h5 class="pycna-text">
			“The notes containing the tone are both the lowest notes of a
			Pycnum" (213)
		</h5>
		<p>
			This little quote had me scratching my head for the longest time....
			This quote involves a Pycnum, and a tone, so Aristoxenus has to be
			referring to disjunct Enharmonic tetrachords, right? E-E quarter
			#-F-A-B-B quarter #-C-E. The higher of the two notes of the tone is
			obvious, because B is the lowest note of the higher Pycnum.
		</p>
		<p>
			But what about A? A is followed by B, which is a tone, making it not
			the lowest note in a Pycnum. What I think Aristoxenus wants to prove
			is that A, when it's part of a conjunct Enharmonic tetrachord scale,
			is the lowest note in a Pycnum. E-E quarter #-F-A-A quarter #-Bb-D.
		</p>
		<Figure
			file={57}
			caption="A diagram showing that both notes of the tone in a disjunct Enharmonic tetrachord are the lowest notes of a Pycnum." />
	</div>
	<div>
		<h5 class="ditone-text">
			“A succession of two Ditones is forbidden.” (213)
		</h5>
		<p>
			A tetrachord isn't possible with successive ditones since they
			produce an augmented Fifth. Coincidentally, 2 ditones produces a
			"tritone," which has it's own legacy in Western European music
			history.
		</p>
		<Figure
			file={58}
			caption="A diagram showing why Aristoxenus forbids ditones." />
	</div>
	<div>
		<h5 class="scales-text">
			“In Enharmonic and Chromatic scales a succession of two tones is not
			allowed.” (213)
		</h5>
		<p>
			This is true because two successive tones would mean either the
			tetrachord is Diatonic, or that the interval between Hypate and
			Parhypate is larger than 1/2 tone.
		</p>
		<Figure
			file={59}
			caption="A diagram showing that a disjunction is the only possible place for a tone in the Enharmonic and Chromatic genera." />
	</div>
	<div>
		<h5 class="scales-text">
			“In the Diatonic genus three consecutive tones are permitted; but no
			more.” (214)
		</h5>
		<p>
			This happens as a result of making a scale out of two disjunct
			Diatonic tetrachords.
		</p>
		<Figure
			file={60}
			caption="A diagram showing that three consecutive tones are possible in the Diatonic genus." />
	</div>
	<div>
		<h5 class="scales-text">
			“In the [Diatonic] genus, a succession of two semitones is not
			allowed.” (214)
		</h5>
		<p>
			Similar to the theory about non-Diatonic tetrachords from earlier,
			two consecutive 1/2 tones would either make the rightmost interval
			smaller than a tone (a tone is the smallest it can be by
			definition), or it would make it too large because the first two
			intervals would only span 1 tone.
		</p>
		<Figure
			file={61}
			caption="A diagram showing the only possible placement of a semitone in a Diatonic tetrachord." />
	</div>
	<div>
		<h5 class="ditone-text">
			“A ditone may be succeeded either above or below by a Pycnum.” (214)
		</h5>
		<p>
			Related to a theory from earlier. A ditone is always going to be
			preceded by a pycnum, and it can also be succeeded by a pycnum in
			the case of a conjunct scale.
		</p>
		<Figure
			file={62}
			caption="A diagram showing that a ditone can be followed by a tone above or below it in the Enharmonic genus." />
	</div>
	<div>
		<h5 class="ditone-text">
			“A ditone can be followed by a tone in the ascending scale only.”
			(214)
		</h5>
		<p>
			Ditones are followed by tones in the case of disjunct tetrachord
			scales, however when descending a scale, the ditone will always be
			followed by an Enharmonic diesis (1/4 tone).
		</p>
		<Figure
			file={63}
			caption="A diagram showing that a ditone can be followed by a tone in an ascending scale only." />
	</div>
	<div>
		<h5 class="pycna-text">
			“A tone can be followed by a Pycnum in the descending order.” (215)
		</h5>
		<p>
			If you read this quickly, like I did at first, it looks like the
			case in disjunct Enharmonic/Chromatic scales where there's a tone
			between the tetrachords.
		</p>
		<p>
			But actually, what's being described is the opposite. In the
			descending order, if a tone were to precede a Pycnum, we would have
			an incomplete tetrachord, since the result isn't a perfect Fourth.
			Unless the descending order implies that tetrachords can have
			mirrored structure like this case here, this proof might be a
			translation error. I don't know for sure.
		</p>
		<Figure
			file={64}
			caption="A diagram showing what I think Aristoxenus means, which is a tone can follow a pycnum when descending a scale." />
	</div>
	<div>
		<h5 class="scales-text">
			“In the Diatonic genus, a tone cannot be both preceded and succeeded
			by a semitone.” (215)
		</h5>
		<p>
			If you try this for yourself, you won't be able to complete the
			Fourth. For example: B-C-D-Eb.
		</p>
		<Figure
			file={65}
			caption="A diagram showing that a tone preceded and succeeded by a semitone doesn't produce a perfect Fourth." />
	</div>
	<div>
		<h5 class="scales-text">
			“A pair of tones, or a group of three tones may be both preceded and
			succeeded by a semitone.” (215)
		</h5>
		<p>
			This also describes something that can happen only in the Diatonic
			genus, which is what happens in a disjunct Diatonic scale.
		</p>
		<Figure
			file={66}
			caption="A diagram showing a disjunct Diatonic scale's three consecutive tones sandwiched between 2 semitones." />
	</div>
	<div>
		<h5 class="ditone-text">
			“From the ditone there are two possible progressions upwards, one
			only downwards.” (215)
		</h5>
		<p>
			Upwards, you can go to either a pycnum, in the case of a conjunct
			scale, or a tone, in the case of a disjunct scale.
		</p>
		<p>Downwards, you can go only to a pycnum.</p>
		<Figure
			file={67}
			caption="A diagram showing the 3 possible progressions from a ditone." />
	</div>
	<div>
		<h5 class="pycna-text">
			“From the Pycnum, on the contrary, there are two possible
			progressions downwards, and one upwards.” (216)
		</h5>
		<p>
			This is the converse of the previous quote. Upwards you can only go
			to a ditone.
		</p>
		<p>
			Downwards, you can go to a ditone, as well, in addition to a tone.
		</p>
		<Figure
			file={68}
			caption="A diagram showing the 3 possible progressions from a pycnum." />
	</div>
	<div>
		<h5 class="ditone-text">
			“From the tone there is but one progression in either direction,
			downwards to the ditone, <span class="pycna-text"
				>upwards to the Pycnum.</span
			>” (216)
		</h5>
		<p>
			This is the third and final proof related to successive movement
			between the intervals possibly present in the Enharmonic genus:
			ditone, pycnum, and tone. This case is particularly limited because
			the tone is only going to occur in disjunct scales, so technically,
			the tone isn't even part of the tetrachord. Just a bridge between
			the two.
		</p>
		<p>Upwards, you can only go to a Pycnum.</p>
		<p>Downwards, you can only go to a ditone.</p>
		<p>
			Aristoxenus expands more on this quote than the others (probably
			because it's serving as sort of a summary of the previous 3), but he
			says that the same logic can be applied to Chromatic and Diatonic
			scales as well. The only adjustments are that the ditone becomes a
			smaller interval, and that the pycnum sometimes gets replaced with a
			larger interval.
		</p>
		<Figure
			file={69}
			caption="A diagram showing the 2 possible progressions from a tone." />
	</div>
	<div>
		<h5 class="scales-text">
			“In the Chromatic and Enharmonic scales every note participates in
			the Pycnum.” (217)
		</h5>
		<p>
			This is another head scratcher... On one hand, the notes that are
			part of the pycnum must participate in the pycnum. In conjunct
			scales, Mese also becomes the lowest note of the higher pycnum.
		</p>
		<p>
			But what about disjunct scales? The top note of the lower tetrachord
			is no longer part of a pycnum. The only way I can rationalize this
			is that the top note of the lower tetrachord is already accounted
			for in the case of the conjunct scale, so it's omitted in the case
			of the disjunct scale.
		</p>
		<Figure
			file={70}
			caption="A diagram showing that every note in a conjunct Enharmonic or Chromatic scale is part of a pycnum." />
	</div>
	<div>
		<h5 class="pycna-text">
			“One will readily see that the positions of the notes situated in
			the Pycnum are three in number.” (217)
		</h5>
		<p>
			This is saying that there are 3 notes in a pycnum. This might seem
			obvious, but there's a proof later on that supposes a situation that
			involves a pycnum with multiple same pitches (I don't fully
			understand why that even needs to be hypothesized, to be honest).
		</p>
	</div>
	<div>
		<h5 class="pycna-text">
			“It is required to prove that from the lowest only of the notes in a
			Pycnum there are two possible progressions in either direction,
			while from the others there is but one.” (218)
		</h5>
		<p>
			Here's, yet again, another confusing quote. Like Aristoxenus
			mentioned earlier, the lowest note of a Pycnum can go down in two
			ways, by a tone, or by a ditone, depnding on whether the scale is
			disjunct or conjunct.
		</p>
		<p>
			From my understanding, this doesn't make sense the way I'm reading
			it. The lowest note of a pycnum can go up to the next note in the
			pycnum, but it can go down to a ditone or a tone. The middle note
			makes sense, since it can only go to one of its neighbors. The last
			note makes sense, as well, since it can go up to the ditone and down
			to it's neighbor.
		</p>
		<Figure
			file={71}
			caption="A diagram showing the possible progressions from the lowest, middle, and highest notes of a pycnum, which conflicts with Aristoxenus' proof." />
	</div>
	<div>
		<h5 class="pycna-text">
			“It is required to prove that from the highest note of a Pycnum
			there is but one progression in either direction.” (219)
		</h5>
		<p>
			You can check out the diagram above to see this in action.The top
			note of a pycnum can go one place in either direction. Upwards, it
			can go to Mese because the pycnum ends at Lichanus. Downwards, it
			can go to Parhypate because the pycnum continues in that direction.
		</p>
	</div>
	<div>
		<h5 class="pycna-text">
			“It is required to prove, that from the middle note of a Pycnum
			there is but one progression in either direction.” (219)
		</h5>
		<p>
			You can see this in the above diagram too. Up and down, the because
			the pycnum is 3 notes long, the middle note will go to one of its
			neighbors.
		</p>
	</div>
	<div>
		<h5 class="pycna-text">
			“It is required to prove that two notes that occupy dissimilar
			positions in the Pycnum cannot fall on the same pitch without
			violating the nature of melody.” (219)
		</h5>
		<p>
			This is the quote I was referring to earlier about notes in the
			pycnum needing to have their own pitch identities. I'm not sure if
			I'm missing something here, but the Pycnum by definition is a sum of <span
				class="fw-bold">2 intervals</span
			>, and because Aristoxenus doesn't count the unison as an interval,
			there's no way for two notes to occupy the same pitch in a pycnum.
		</p>
		<Figure
			file={72}
			caption="A diagram showing that two notes in a pycnum can't occupy the same pitch." />
	</div>
	<div>
		<h5 class="interval-text">
			“It is required to prove that the Diatonic genus is composed of two
			or of three or of four simple quanta.” (220)
		</h5>
		<p>
			<span class="fst-italic">Quanta</span> is replacing the term intervals
			here. I don't know if there's signficance, but the terms are interchangeable.
			The Diatonic genus is unique in the sense that it can produce between
			2 and 4 unique simple intervals, including the tone added by the disjunct
			Fifth.
		</p>
		<p>
			For 2 unique intervals, we have the Intense Diatonic tetrachord.
			Only 1/2 tone, and 1 tone.
		</p>
		<Figure
			file={26}
			caption="A diagram of an Intense Diatonic tetrachord." />
		<p>
			For 3 unique intervals, we can move the Parhypate down a quarter
			tone, for example. 1/4 tone, 1 and 1/4 tones, and 1 tone.
		</p>
		<Figure
			file={73}
			caption="A diagram of a Diatonic tetrachord with an Enharmonic diesis." />
		<p>
			Lastly, for 4 unique intervals, we need a tetrachord plus a
			disjunction to give us 4 total intervals. Then, we would need to
			move both Parhypate and Lichanus to produce intervals other than a
			tone and a semi tone. For example: a Soft Chromatic diesis, and a
			Soft Diatonic Lichanus. 1/3 tone, 11/12 tone, 1 and 1/4 tones, and 1
			tone. The math gets wonky in this example because we need to find
			the interval between E third sharp and F three quarter sharp, or 1/3
			tone above E, and 1 and 1/4 tones above E.
		</p>
		<Figure
			file={74}
			caption="A diagram of a Diatonic tetrachord with a Soft Chromatic diesis and a Soft Diatonic Lichanus." />
	</div>
	<div>
		<h5 class="interval-text">
			“It is required to prove that the Chromatic and Enharmonic genera
			are composed of three or four simple quanta.” (221)
		</h5>
		<p>
			Just like the above theory, we can produce 3 and 4 unique intervals;
			however, unlike the above theory, we can't produce only 2 unique
			intervals. Remember, we're adding the tone that completes the Fifth.
		</p>
		<p>
			For 3 unique intervals, the Pycnum is equal parts. For example, the
			Soft Chromatic tetrachord: 1/3 tone, 1/3 tone, 1 and 5/6 tones, and
			1 tone.
		</p>
		<Figure
			file={75}
			caption="A diagram of a Soft Chromatic tetrachord plus a disjunction." />
		<p>
			For 4 unique intervals, the Pycnum is unequal. For example, a Soft
			Chromatic diesis, and a Hemiolic Chromatic Lichanus: 1/3 tone, 5/12
			tone, 1 and 3/4 tone, and 1 tone.
		</p>
		<Figure
			file={76}
			caption="A diagram of a tetrachord with a Soft Chromatic diesis and a Hemiolic Chromatic Lichanus." />
	</div>
	<div>
		<h5 class="interval-text">
			“We shall use the terms ‘species’ and ‘figure’ indifferently...when
			the order of the simple parts of a certain whole is altered, while
			both the number and magnitude of those parts remain the same...there
			are three species of the Fourth.” (222)
		</h5>
		<p>
			The last translated paragraph of the book, which defines what
			"species" means: when a set of intervals can be rearranged and still
			amount to the same sum. Even though Aristoxenus says there are 3
			species of Fourth, don't confuse this with saying there are 3
			species of each tetrachord. Tetrachords still follow the same
			"smallest intervals to the left" rule, along with the other
			guidelines from the book (check out the calculator for a quick
			summary, too).
		</p>
		<p>
			When the pycnum is at the bottom of the Fourth, that's one species,
			which also happens to be the only melodious tetrachord of the three
			species described.
		</p>
		<Figure
			file={77}
			caption="A diagram of a pycnum at the bottom of a Fourth." />
		<p>
			Another is when the interval that would typically be spanning the
			distance from Lichanus to Mese is in the middle of the Fourth.
		</p>
		<Figure
			file={78}
			caption="A diagram of a ditone sandwiched by two smaller intervals." />
		<p>The last is when the pycnum is above the ditone.</p>
		<Figure
			file={79}
			caption="A diagram of a pycnum at the top of a Fourth." />
	</div>
</div>

<style>
	.scales-text {
		color: #85c1e9;
	}

	.interval-text {
		color: #f7dc6f;
	}

	.pycna-text {
		color: #82e0aa;
	}

	.ditone-text {
		color: #d98880;
	}
</style>
