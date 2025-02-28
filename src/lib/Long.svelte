<script>
	let { value = $bindable() } = $props();
</script>

<div class="intro-bio">
	<h3>
		A brief intro to Aristoxenus, and <span class="fst-italic"
			>Elementa Harmonica</span>
	</h3>
	<p>
		Aristoxenus of Tarentum was one of the foremost philosophers of his
		time. Although he authored upwards of 453 books during his lifetime
		covering topics beyond the realm of music, his treatise on harmony, <span
			class="fst-italic">Elementa Harmonica</span
		>, isn't only arguably his most important contribution to the music
		theory of his time, but it's also one of the most important insights we
		have to music from Greek antiquity.
	</p>
	<p>
		Over the span of the three books that make up the treatise, in
		comparison to Greek theorists that preceded him, Aristoxenus wrote about
		theory from a "practicality-first" perspective. By no means does he
		entirely do away with the mathematical principles that informed his
		practice; however, there seems to be a stronger emphasis on whether or
		not any theoretical pitch material is pragmatic to the practicing
		musician.
	</p>
</div>
<div id="intro-theory">
	<h3>My attempt to introduce Aristoxenus' theories</h3>
	<div id="excerpt">
		<p>
			Because this webpage is dedicated to the entire treatise, I want to
			start off by saying that this generator/calculator is inspired by a
			particular section from <span class="fst-italic"
				>Elementa Harmonica</span>
			where Aristoxenus describes the
			<button
				type="button"
				class="fw-bold accent-text border-0 p-0 background"
				onclick={() => (value = true)}
				aria-label="Show differences of the genera">
				differences of the genera (click me to read the complete
				section)
			</button>. If you have no previous experience with Greek music
			theory (like me before reading), you might find the writing to be
			challenging to grasp because of the writing style, as well as the
			core vocabulary that Aristoxenus assumes the reader knows. The rest
			of this article is going to attempt to explain some of what I think
			are the biggest takeaways from this section. But first, let's cover
			some key terms as they are referenced in and around the excerpt.
		</p>
		<p>
			Another important tidbit is that I'm using a particular translation
			of the treatise, <span class="fst-italic"
				>The Harmonics of Aristoxenus</span> authored by Henry S. Macran.
			I'll be including page numbers, which are specific to this book. It has
			detailed notation and a hefty notes section that explains a lot of what
			I'm going to attempt to explain here.
		</p>
		<p>
			As far as the structure of the rest of the webpage is concerned, I'm
			going to include quotes from the translation that I found
			particularly meaningful to Aristoxenus' overall message, and add
			some of my own commentary from each of the 3 books.
		</p>
	</div>
	<div id="book-1">
		<h3>Book 1</h3>
		<h5>
			"[The enharmonicists] confin[ed] themselves to what is but the third
			part of that complete system, they selected for exclusive treatment
			a single magnitude in that third part, namely the Octave." (166)
		</h5>
		<p>
			If you know about what <span class="fst-italic">enharmonic</span> means
			in the context of Greek music theory, then there's more to unpack in
			this quote; however, because Aristoxenus goes into detail about what
			enharmonic (and the rest of the tetrachord genera) means later on, the
			main takeaway from this quote is how Aristoxenus throws shade in the
			direction of his predecessors quite frequently in his treatise. Whether
			it's because his theories were met with resistance by his contemporaries,
			or because he genuinely felt the need to criticize the foundations of
			his musical progenitors, Aristoxenus' writing is full of snarky remarks
			like this, and through the lens of someone who's excited by juicy drama
			in historical texts, these can be fun to read in an otherwise ultra-dense,
			stream of consciousness writing style.
		</p>
		<h5>
			“The truth is that of all the objects to which the five senses apply
			not one other is characterized by an orderliness so extensive and so
			perfect.” (168)
		</h5>
		<p>
			This is one of the first hints we get in the book that discusses the
			idea of sense perception as an important factor in finding
			significance in music theory. Aristoxenus suggests that the order in
			which we classify sounds is unique to hearing as a sense, and that
			instead of relying purely on the mathematical relationships between
			intervals, we should also account for our tendencies and intuitions
			when it comes to hearing and producing pitch.
		</p>
		<h5>
			"Every voice is capable of change of position, and this change may
			be either continuous or by intervals." (170)
		</h5>
		<p>
			Aristoxenus presents a binary of continuous and intervallic vocal
			delivery. Continuous refers to the "motion of speech" (171), where
			he's observed that the voice never stays on a single identifiable
			pitch for a long enough time to perceive it. Intervallic refers to
			the opposite, where the voice moves between stations that have
			discernable pitch.
		</p>
		<h5>
			"...tension takes place when the string is in motion, height of
			pitch when it is stationary." (173)
		</h5>
		<p>
			Here, Aristoxenus discusses 4 qualities of a string in motion (or
			just vibrating bodies in general I'm assuming, despite him going
			into detail most about the voice): tension, relaxation, height, and
			depth. Tension refers to a string's motion from a lower frequency,
			to a higher frequency, and relaxation is the opposite. Somewhat
			confusingly, height and depth are used separately to describe the
			result of tension and relaxation, respectively. Aristoxenus
			justifies the need for both sets of terms by suggesting that one set
			of terms is used to describe the motion, and the other set is used
			to describe the result of the motion.
		</p>
		<h5>
			"What the voice cannot produce and the ear cannot discriminate must
			be excluded from the available and practically possible range of
			musical sound." (175)
		</h5>
		<p>
			In this quote, Aristoxenus is plainly suggesting that intervals that
			aren't practical to produce, nor readily discernable by ear,
			shouldn't be focused on theoretically. In this section, he
			introduces the terms <span class="fst-italic">in parvitatem</span>
			and <span class="fst-italic">in magnitudinem</span> to describe 2 types
			of interval relationships, the former being too small to sing/hear accurately,
			and the latter being large enough to sing/hear.
		</p>
	</div>
	<div id="tones-divisions-diesis-and-genera">
		<p class="mb-1">
			In the paragraph proceeding the excerpt (page 180 in the book), we
			see a few important quotes:
		</p>
		<ul>
			<li>
				"A tone is the difference in compass between the first two
				concords."
			</li>
			<li>
				“...[a tone] may be divided by the three lowest denominators, as
				melody admits of half tones, thirds of tones, and quarter-tones,
				while undeniably rejecting any interval less than these."
			</li>
			<li>
				"the smallest enharmonic diesis, the next the smallest chromatic
				diesis, and the greatest, a semitone."
			</li>
		</ul>
		<p>
			These quotes include terms that are at these theories' core, and are
			referenced a ton throughout both the excerpt, and the rest of the
			books that make up <span class="fst-italic">Elementa Harmonica</span
			>.
		</p>
		<h5>What's a tone?</h5>
		<p>
			A <span class="fw-bold">tone</span> being the difference between the
			first two concords is referring to the distance between a Perfect Fourth
			and a Perfect Fifth. C to D, for instance, or in other words, a whole
			step, or a Major Second. Aristoxenus uses a lot of words to explain a
			concept that seems pretty obvious to us, but remember that Aristoxenus
			lived during a time when there wasn't access to the same high precision
			calculators and mathematical development we have today.
		</p>
		<h5>Tones can be divided smaller than you're used to</h5>
		<p>
			The next quote tells us that tones can be divided into halves,
			thirds, and even quarters (which are the divisible limit because
			Aristoxenus suggests this is the smallest singable melodic
			interval). If you have any background in recent Western music
			theory, you probably know that the half tone, or Minor Second, is
			the smallest interval that's commonly used in melody. That isn't to
			suggest that composers haven't used smaller intervals, however, to
			many musicians, dividing a tone into intervals smaller than a half
			step is a foreign concept, and <span class="fw-bold"
				>not only does Aristoxenus divide into smaller fractions of the
				tone, but he also entertains the idea that the tone can be
				divided into an infinite number of intervals</span
			>, many of which aren't as easy to express as as 1/2, 1/3, or 1/4.
			In the excerpt, the smallest fraction of a tone that arises is 1/12,
			which is the lowest common denominator of the "three lowest
			denominators" mentioned in the second quote.
		</p>
		<h5>What's a diesis?</h5>
		<p>
			The last quote takes a bit more involvement to unpack. First, we
			come across the term <span class="fw-bold">diesis</span>, which
			Aristoxenus uses to refer to the smallest interval of a particular
			genus of tetrachord. It will always be the interval between the
			first and second degrees of the tetrachord (also known as the Hypate
			and Parahypate, but more on these later). Aristoxenus will often
			classify diesis (as well as other aspects of the Tetrachord like the
			Parhypate and Lichanus) as
			<span class="fst-italic">lowest</span>
			or <span class="fst-italic">highest</span> depending on the size of the
			interval the diesis represents. I'll give a couple examples in a bit.
		</p>
		<h5>
			Introducing the <span class="fst-italic">genera</span>
		</h5>
		<p>
			Next, Aristoxenus uses the words: <span class="fw-bold"
				>enharmonic</span
			>, <span class="fw-bold">chromatic</span>, and
			<span class="fw-bold">diatonic</span>. These are the three
			<span class="fst-italic">genera</span> (singular, genus) of tetrachords
			in the music theory of Aristoxenus' time. Although it might not be the
			most appropriate comparison, you might think about the genera of tetrachords
			like how triads are classified in Western music theory. Depending on
			the intervals a tetrachord contains, its qualities can be classified
			as belonging to 1 of the 3 genera.
		</p>
	</div>
	<div id="whats-a-tetrachord">
		<h5>Hold on.... What's a tetrachord?</h5>
		<p>
			Before getting deeper into the excerpt, you might be wondering what
			a <span class="fw-bold">tetrachord</span>
			is. Let's break the word down into its two components:Tetra is a prefix
			meaning the number four. Chord might be a bit more complicated than what's
			read on the surface in the text. Our contemporary relationship with the
			word suggests that it means a series of pitches that are played at the
			same time. However, Aristoxenus uses words that include chord in them
			interchangeably with the word scale, which he defines on page 176 as
			"...the compound of two or more intervals." I personally don't see the
			difference between chord and scale, but I think it's safe to assume that
			a chord is a set of pitches in general.
		</p>
		<h5>Four notes, or the interval of a Fourth?</h5>
		<p>
			Coincidentally, and perhaps adding a bit more confusion, tetrachords
			span the interval of a Perfect Fourth (unlike a tetrachord that you
			might encounter in Allen Forte's writing which is just a group of 4
			distinct pitches). Bearing this in mind, it's difficult to know
			whether the <span class="fst-italic">tetra</span> is referring to the
			number of pitches, or the outer interval, or both. However, for the sake
			of understanding the theory, a tetrachord is collection of four pitches
			that span the interval of a Perfect Fourth. When combined with the term
			diesis that was introduced earlier, Aristoxenus explains that the lowest
			enharmonic diesis is a quarter tone, the lowest chromatic dieses is a
			third tone, and the lowest diatonic (and highest chromatic) diesis is
			a half (semi) tone.
		</p>
		<h5>What are tetrachords used for exactly?</h5>
		<p>
			Tetrachords are collections of pitches that are ultimately combined
			to create a larger scale that completes the octave. Without getting
			too ahead of ourselves, if we take a tetrachord consisting of: B, C,
			D, and E (which happen to be classifiable as a diatonic tetrachord),
			if we transpose that tetrachord up a Perfect Fourth, we get a
			tetrachord with an identical intervallic structure: E, F, G, and A.
		</p>
	</div>
	<div id="scale-degrees">
		<h5>The Greeks knew about scale degrees?</h5>
		<p>
			Yes they did! In fact, Aristoxenus talks at length about scales and
			adopting a system focused on function as opposed to the fixed names
			of the music that predated his time (he actually has quite a few
			unkind things to say about a few of his predecessors if you like a
			juicy 🧃 read). Using an octave scale comprised of two conjoined
			tetrachords, like I mentioned above, the scale degrees are from
			lowest to highest as follows
		</p>
		<ol>
			<li>
				Hypate - "Lowest" in the sense that it's located at the "bottom"
				of the scale
			</li>
			<li>Parhypate - "Next to Hypate"</li>
			<li>
				Lichanus - The "forefinger" is used when playing this string on
				the lyre.
			</li>
			<li>
				Mese - "Middle" of the 7 unique pitches produces by interlocking
				two tetrachords.
			</li>
			<li>Paramese - "Next to Mese"</li>
			<li>Trite - "Third" in position of the higher tetrachord.</li>
			<li>Paranete - "Next to Nete"</li>
			<li>
				Nete - "Lowest" on the lyre. Contrary to our use of low, which
				is typically associated with pitch, the lowest string on the
				lyre actually produces the highest pitch.
			</li>
		</ol>
		<h5>An important note about terms used by Aristoxenus</h5>
		<p>
			When describing the structure of a tetrachord, Aristoxenus almost
			exclusively refers to the pitches of the lower tetrachord: Hypate,
			Parhypate, Lichanus, and Mese. Although he doesn't explicitly say
			why in either book, my guess is that because a Greek scale is
			symmetrical in the sense that it's a combination of two structurally
			identical tetrachords, being consistent and picking one makes sense
			for explanatory purposes.
		</p>
	</div>
	<div id="more-on-intervals">
		<h5>Open your mind to unfamiliar intervals</h5>
		<p>
			In your average Western music curriculum today, intervals are taught
			as they pertain to the "chromatic" scale (not to be confused with
			the chromatic genus of tetrachord). When dividing the octave into
			12, almost exclusively, equal parts, the resulting interval is 1/2
			tone (or a Minor Second). However, Greek musicians made use of
			intervals that were smaller than a semi tone. When regarding
			individual intervals, the smallest practically usable interval in
			Aristoxenus' theories is the quarter tone.
		</p>
		<p>
			However, when performing calculations involving intervals that would
			appear in Aristoxenus' theories, we often encounter intervals that
			are smaller than a quarter tone. They won't appear as standalone, or <span
				class="fst-italic">continuous</span> in Aristoxenus' words, intervals
			in a scale, but they can be used to express differences between intervals.
			The smallest division of a tone that we encounter in either book is 1/12
			(about 17 cents) of a tone.
		</p>
		<h5>More on Dieses</h5>
		<p>
			As I mentioned earlier, the diesis is the smallest interval in the
			tetrachord. It also always happens to be located between Hypate and
			Parhypate. The interval from Parhypate to Lichanus can also be the
			same size as the diesis, however, the smallest interval in the
			tetrachord will always be between Hypate and Parhypate.
		</p>
		<p>
			I'll talk about even more specifics on dieses later, however, for
			now, knowing the smallest possible dieses for each genus is
			important when understanding some of the math moving forward.
		</p>
		<ul>
			<li>
				The smallest diesis encountered in the Enharmonic genus is 1/4
				tone (50 cents).
			</li>
			<li>
				The smallest diesis encountered in the Chromatic genus is 1/3
				tone (about 67 cents).
			</li>
			<li>
				The smallest diesis encountered in the Diatonic genus is 1/2
				tone (100 cents), however this also happens to be the largest
				diesis in the Chromatic genus.
			</li>
		</ul>
	</div>
	<div id="loci-of-the-parhypate-and-lichanus">
		<h5>
			What's Aristoxenus' deal with <span class="fst-italics">loci</span>?
		</h5>
		<p>
			Aristoxenus uses the term loci (singular, locus) to talk about how
			the placement of Parhypate and Lichanus in the tetrachord
		</p>
		. Because we know that the outermost interval of a tetrachord (Hypate to
		Mese) is always a perfect fourth, so long as the rest of the guidelines for
		a "melodious" tetrachord are followed, the placement of Parhypate and Lichanus
		within the tetrachord can be moved around infinitely. The guidelines are
		as follows...
		<ul>
			<li>The tetrachord's intervals must add up to a perfect Fourth.</li>
			<li>The smallest usable interval is 1/4 tone.</li>
			<li>
				The smallest interval must be the leftmost interval, but nothing
				is stopping this interval from being repeated in the middle
				(this results in what's called <span class="fst-italics"
					>Pycnum</span
				>).
			</li>
			<li>
				The rightmost interval must be between 1 and 2 tones
				(inclusive).
			</li>
		</ul>
	</div>
	<div id="the-six-tetrachords"></div>
	<div id="shading-and-naming">
		<div id="what-is-shading">
			<h5>What is shading?</h5>
			<p>
				Aristoxenus' refers to the Lichani (singular, Lichanus) as being
				"infinite in number." Although many of these intervals aren't
				practical to produce organically with the precision the
				calculator is able to provide, instead of solely suggesting that
				there are a fixed number of divisions of the tetrachord, he
				suggests that tetrachords occupy a <span class="fst-italic"
					>shaded</span> area of a particular genus.
			</p>
			<p>
				From a theoretical standpoint, this is what inspired the
				calculator. Creating a utility that analyzes and plays back
				tetrachords with obscure subdivisions of the perfect Fourth.
				However, I think that when diving into the theory, it's easy to
				forget about the aesthetics that inspired a lot of Aristoxenus'
				thinking.
			</p>
			<p>
				Aristoxenus' was all about practicality. He observed, and
				attempted to explain, that music follows natural laws that
				impact the way we're able to perceive and produce pitch. He was
				keen to the fact that too many of the same small interval can't
				realistically/accurately be produced in succession. He also knew
				that the voice tends to fluctuate in pitch depending on the
				direction of the interval, namely, but also because of our
				inability as humans to produce with mechanical precision.
			</p>
			<p>
				That being said, what I think Aristoxenus ultimately hoped
				shading of the genera would offer is the notion that despite
				differences in pitch that aren't noticeable, the genus of a
				tetrachord/scale will sound virtually the same to the human ear.
			</p>
		</div>
		<div id="lichanus-to-mese-rules">
			<h5>Lichanus to Mese (topmost/rightmost)</h5>
			<p>
				Like I just mentioned above, the interval produced by the
				Lichanus and Mese, or the top (or right, depending on what axis
				you're using to visualize the tetrachord) most interval in the
				tetrachord determines its genus. The interval <span
					class="fw-bold"
					>must be between 1 and 2 tones (inclusive)</span
				>. Within that range...
			</p>
			<ul>
				<li>
					if the interval is less than or equal to 2 tones (400
					cents), and greater than 1 + 5/6 tones (about 367 cents),
					then it's <span class="fw-bold">Enharmonic</span>.
				</li>
				<li>
					if the interval is less than or equal to 1 + 5/6 tones, and
					greater than or equal to 1 + 1/4 tones (about 300 cents),
					then it's <span class="fw-bold">Chromatic</span>.
				</li>
				<li>
					if the interval is less than or equal to 1 + 1/4 tones, and
					greater than or equal to 1 tone (200 cents), then it's <span
						class="fw-bold">Diatonic</span
					>.
				</li>
			</ul>
			<h5>Why does the math work this way?</h5>
			<p>
				As I mentioned earlier, the range of intervals between Lichanus
				and Mese (the <span class="fst-italic">rightmost</span>) is
				confined to 1 and 2 tones. If we take a tetrachord from each of
				the genera that contains the smallest possible intervals between
				Hypate, Parhypate, and Lichanus (the three
				<span class="fst-italic">leftmost</span>), we can figure out why
				the ranges are the way they are.
			</p>
			<p>
				An Enharmonic tetrachord with the smallest leftmost intervals
				would consist of a series of 2 1/4 tones (50 cents each),
				resulting in a semi tone (100 cents). That would make the
				interval between Lichanus and Mese 2 tones (400 cents).
			</p>
			<p>
				If we do the same with a Chromatic tetrachord with the smallest
				leftmost intervals: 2 1/3 tones (about 67 cents each), we would
				be left with an interval between Lichanus and Mese that's 1 +
				5/6 tones (about 367 cents). 5/6 looks like an odd fraction, but
				I find that breaking down the cents into smaller values and
				turning them into fractions helps me understand the math better.
			</p>
			<ul>
				<li>1 + 5/6 tones is about 367 cents</li>
				<li>
					367 cents can be expressed as 200 cents + 100 cents + 67
					cents
				</li>
				<li>200 cents is 1 tone</li>
				<li>100 cents is 1/2 tone</li>
				<li>67 cents is about 1/3 tone</li>
				<li>1 + 1/2 (or 3/6) + 1/3 (or 2/6) is 1 + 5/6</li>
			</ul>
			<p>
				Therefore, if the smallest Enharmonic tetrachord has a rightmost
				interval of 2 tones (400 cents), and the smallest Chromatic
				tetrachord has a rightmost interval of 1 + 5/6 tones (367
				cents), then all rightmost intervals between 1 + 5/6 and 2 tones
				(bottom exclusive, top inclusive) must be Enharmonic.
			</p>
			<p>
				Using a similar line of logic, if we take a Diatonic tetrachord
				that Aristoxenus' implies has the "smallest" leftmost intervals:
				1/2 tone (100 cents) and 3/4 tone (150 cents), we can see that
				the rightmost interval is 1 + 1/4 tones (250 cents). That means
				that all tetrachords whose rightmost interval falls within the
				range of 1 + 1/4 and 1 + 5/6 tones (bottom inclusive, top
				exclusive) must be Chromatic.
			</p>
			<p>
				And lastly, figuring out the range of Diatonic tetrachords is
				straightforward because we've already figured out the "smallest"
				leftmost intervals, which would result in a rightmost interval
				of 1 + 1/4 tones (250 cents). We also know that the rightmost
				interval can't be smaller than a tone (200 cents), so the range
				of Diatonic tetrachords is between 1 tone (200 cents) and 1 +
				1/4 tones (250).
			</p>
		</div>
		<div id="hypate-to-parhypate-rules">
			<h5>Hypate to Parhypate (bottommost/leftmost/Diesis)</h5>
			<p>
				The diesis of a tetrachord, like I mentioned earlier, is the
				pitch collection's smallest interval. It's between Hypate and
				Parhypate, and the same way we calculated ranges for the
				rightmost interval which determines the genus, we can do the
				same to describe the tetrachord's diesis.Just a reminder from
				earlier
			</p>
			<ul>
				<li>The smallest Enharmonic diesis is 1/4 tone (50 cents)</li>
				<li>
					The smallest Chromatic diesis is 1/3 tone (about 67 cents)
				</li>
				<li>
					and the largest Chromatic/only Diatonic diesis is 1/2 tone
					(100 cents)
				</li>
			</ul>
			<p>
				Because the Chromatic and Diatonic genera share a diesis, it's
				unclear whether calling a diesis of 1/2 tone a "Largest
				Chromatic diesis" or a "Diatonic diesis" is the intended way to
				go about it.
			</p>
			<p>So, knowing our smallest dieses, we can determine that...</p>
			<ul>
				<li>
					An Enharmonic diesis is between 1/4 (50 cents) and 1/3
					(about 67 cents) tone (bottom inclusive, top exclusive).
				</li>
				<li>
					A Chromatic diesis is between 1/3 (about 67 cents) and 1/2
					(100 cents) tone (both inclusive).
				</li>
				<li>
					And, technically, a Diatonic diesis is always 1/2 tone, but
					it's unclear as to whether or not this is a "Diatonic
					diesis" at all, since it's shared with the top of the
					Chromatic range.
				</li>
			</ul>
		</div>
		<div id="putting-it-together"></div>
	</div>
</div>
