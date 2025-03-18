<script>
	import { base } from "$app/paths";
	import ColorCode from "$lib/ColorCode.svelte";
	import Figure from "$lib/Figure.svelte";
	import Bold from "$lib/Bold.svelte";
	import Italics from "$lib/Italics.svelte";
</script>

<div id="book-1" class="container">
	<!-- Intro/Color Code -->
	<div>
		<h1 class="text-center">Book 1</h1>
		<div class="d-flex gap-2 flex-wrap justify-content-center mb-3">
			<ColorCode color="#bb8fce" text="Snarky remark" />
			<ColorCode color="#85c1e9" text="Ear first, math later" />
			<ColorCode color="#f7dc6f" text="About the voice" />
			<ColorCode color="#e59866" text="Terms and definitions" />
			<ColorCode color="#82e0aa" text="Rules and guidelines" />
			<ColorCode color="#d98880" text="Tetrachord construction" />
		</div>
	</div>
	<!-- Summary -->
	<div>
		<h5>Summary</h5>
		<p>
			After reading the treatise and going back through my notes, this is
			definitely a case where reading the book out of order is probably
			better for understanding some of the concepts in Book 1. Aristoxenus
			introduces a lot of concepts that won't end up getting explained
			entirely until Book 2 and Book 3. That being said, some of the big
			takeaways are:
		</p>
		<ol>
			<li>
				Aristoxenus is noticing a trend of not giving Enharmonic and
				Chromatic genera the respect they deserve.
			</li>
			<li>
				Aristoxenus has beef 🐄 with the Harmonists (namely Eratocles),
				whose theories have proven to strip music of its humanity.
			</li>
			<li>
				Aristoxenus is a proponent of the voice as a metric for
				determining what should be theoretically relevant.
			</li>
			<li>
				There's a distinction between speaking and sining, and it mainly
				has to do with discernable pitch.
			</li>
			<li>
				Even though some intervals might be deemed irrational to
				Aristoxenus' predecessors, the human ear can still discern them
				and use them for practical music-making.
			</li>
			<li>
				Tetrachords are a series of (usually) four notes (three
				consecutive intervals) that occupy the span of a perfect Fourth.
				The smallest interval is always between the lowest two pitches,
				and must be between 1/4 tone and 1/2 tone. The highest interval
				must be between 1 and 2 tones.
			</li>
			<li>
				There are three families (genera) of tetrachord: Enharmonic,
				Chromatic, and Diatonic, and at this point in history, Diatonic
				tetrachords are the newest and most unfamiliar.
			</li>
			<li>
				There are certain tetrachords that are more favored than others,
				but in theory, tetrachord intervals are an infinite spectrum, so
				long as their first and last intervals fall within the ranges
				above.
			</li>
		</ol>
	</div>
	<!-- Quotes -->
	<div>
		<h5 class="snark-text">
			"[The enharmonicists] confin[ed] themselves to what is but the third
			part of that complete system, they selected for exclusive treatment
			a single magnitude in that third part, namely the Octave." (166)
		</h5>
		<p>
			This quote is introduced early in the book, and portrays Aristoxenus
			in a snarky light. At this point, I knew nothing about the <Italics
				text={"enharmonicists"} /> or the <Italics
				text={"complete system"} />, but I do know that Aristoxenus took
			issue with how his predecessors provided a limited view of music
			theory.
		</p>
	</div>
	<div>
		<h5 class="ear-first-text">
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
	</div>
	<div>
		<h5 class="voice-text">
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
	</div>
	<div>
		<h5 class="voice-text">
			"...tension takes place when the string is in motion, height of
			pitch when it is stationary." (173)
		</h5>
		<p>
			Here, Aristoxenus discusses 4 qualities of a string in motion:
			tension, relaxation, height, and depth. Tension refers to the motion
			from a lower frequency, to a higher frequency, and relaxation is the
			opposite. Somewhat confusingly, height and depth are used separately
			to describe the result of tension and relaxation, respectively.
			Aristoxenus justifies the need for both sets of terms by suggesting
			that one set of terms is used to describe the motion, and the other
			set is used to describe the result of the motion. Even though this
			quote translates to refer explicitly to a string, I think it's safe
			to assume that Aristoxenus is using the string as a metaphor for the
			states that any pitch producing object can be in.
		</p>
		<Figure
			file={1}
			caption="A diagram of moving pitches with arrows indicating tension and relaxation." />
	</div>
	<div>
		<h5 class="ear-first-text">
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
	<div>
		<h5 class="terms-text">
			“[A note is] the incidence of the voice upon one point of pitch.
			Whenever the voice is heard to remain stationary on one pitch, we
			have a note qualified to take a place in a melody.” (176)
		</h5>
		<p>
			Aristoxenus defines notes as remaining on a pitch for a period of
			time. This makes sense, but I'm curious about whether or not this
			brings into question embellishments like slides and scoops. Could a
			note not consist of a gradient of pitches?
		</p>
	</div>
	<div>
		<h5 class="terms-text">
			“An interval, on the other hand, is the distance bounded by two
			notes which have not the same pitch.” (176)
		</h5>
		<p>
			Intervals are the distance between two unlike pitches. Another
			question comes up regarding whether or not unisons are intervals in
			Aristoxenus' theory.
		</p>
	</div>
	<div>
		<h5 class="terms-text">
			“A scale, again, is to be regarded as the compound of two or more
			intervals.” (176)
		</h5>
		<p>
			This definition challenges our modern usage of the word scale. A
			"compound of two or more intervals" would more likely fit our
			definition of a <span class="fst-italic">chord</span>, which
			Aristoxenus also uses somewhat interchangeably throughout his
			treatise. However the important things to bear in mind are:
		</p>
		<ol>
			<li>
				Scales are a minimum of 3 notes in length (2 intervals results
				in 3 notes total).
			</li>
			<li>They don't have to occupy the span of an octave.</li>
		</ol>
		<Figure file={11} caption="A diagram of two scales." />
	</div>
	<div>
		<h5 class="terms-text">
			“Here we would ask our hearers to receive these definitions in the
			right spirit, not with jealous scrutiny of the degree of their
			exactness...and to consider our definition which affords an
			unexceptionable and exhaustive analysis is a difficult task in the
			case of all fundamental definitions…” (176)
		</h5>
		<p>
			I thought this quote of Aristoxenus getting defensive about his
			definitions shows a bit of vulnerability (or trouble to appear
			vulnerable) on his part. He appears to be aware that these
			definitions are broad, and leave some room for criticism; however,
			he also suggests that making definitions that are universally true
			is a challenge. It reads a little like a cop-out in place of
			providing examples to reinforce the definitions' legitimacy.
		</p>
	</div>
	<div>
		<h5 class="rules-text">
			"The first classification of intervals distinguishes them by their
			compass,...concordant or discordant,...simple or
			compound,...divi[sion] according to the musical genus,...[and]
			rational or irrational." (176)
		</h5>
		<p>
			Aristoxenus goes into detail about intervals here, suggesting that
			they have certain qualities that allow them to be classified.
		</p>
		<ol>
			<li>
				Compass refers to the relative distance of intervals. For
				example, C to D would have a smaller compass than C to F.
			</li>
			<li>
				Concordances are what we would call
				<span class="fst-italic">perfect</span>: Fourths, Fifths,
				Octaves, and their compounds. Notice that Unisons are excluded,
				since Aristoxenus will go on the refer to the Fourth as the
				"smallest concord." Discordant intervals are all
				non-concordances.
			</li>
			<Figure
				file={9}
				caption="A diagram of concords within the Octave." />
			<li>
				An interval is simple if it's less than or equal to an octave.
				Compound intervals are simple intervals with an added octave.
			</li>
			<Figure
				file={17}
				caption="A diagram of a third, which is a simple interval, and a tenth, which is a compound interval." />
			<li>
				Division by musical genus is trickier and isn't exactly
				clarified later. Genus refers to the three families of
				tetrachords, which are groups of pitches spanning a perfect
				fourth that serve as the building blocks for longer scales (like
				the ones we are familiar with). Though an interval may be in
				multiple tetrachords, its context differs. For example, both
				Diatonic and Enharmonic tetrachords contain a semitone, but in
				the Enharmonic genus, it's divided into two quarter tones. I
				think this relates to Aristoxenus’ ideas of continuity and
				transilience.
			</li>
			<Figure
				file={18}
				caption="A semitone in a Diatonic tetrachord, versus a semitone in an Enharmonic tetrachord." />
			<li>
				An interval's rationality, ultimately, has to do with it's
				ability to be expressed as a ratio of whole numbers. A perfect
				Fifth, for instance, can be represented as a 3:2 ratio above the
				reference pitch (when using Pythagorean tuning). However,
				Aristoxenus puts more of an emphasis on the ear's ability to
				perceive pitch. So, Aristoxenus makes use of intervals like the
				quarter tone, for instance. It can be identified by ear, and
				sung, but expressing it as a whole number ratio isn't practical.
			</li>
			<Figure
				file={19}
				caption="A diagram of a perfect Fifth, which is a rational interval, and a quarter tone, which is an irrational interval." />
		</ol>
	</div>
	<div>
		<h5 class="rules-text">
			“In scales will be found, with one exception, all the distinctions
			which we have met in intervals.” (177)
		</h5>
		<p>
			Aristoxenus says that scales follow all the same classifications as
			intervals, with the exception of simple and compound. While removing
			that quality, he adds three more in its place.
		</p>
		<ol>
			<li>
				When you have two tetrachords that are linked together by a
				shared note, the scale they form is considered <Bold
					text="conjunct" />. If the two tetrachords are separated by
				a tone, the scale they form is considered <Bold
					text="disjunct" />. In order for a conjunct scale to
				complete the octave, an additional tone needs to be added above
				the last note of the second tetrachord.
			</li>
			<Figure
				file={20}
				caption="A diagram of a conjunct and disjunct scales." />
			<li>
				<Bold text={"Continuous"} /> scales are groups of notes that move
				from one to the next as they occur in the genus. Notes that move
				further than their neighboring note are considered <Bold
					text={"transilient"} />. The wording <Italics
					text={"in the genus"} /> is important here, because some scales
				might be continuous in one genus, but transilient in another.
			</li>
			<Figure
				file={21}
				caption="A diagram of a continuous and transilient scales from the Diatonic genus." />
			<li>
				If a scale is made up of one or fewer tetrachords, it's
				considered <Bold text={"single"} />. If a scale is made up of 2
				tetrachords, it's considered <Bold text={"double"} />. If a
				scale is made up of 3 or more tetrachords, it's considered <Bold
					text={"multiple"} />.
			</li>
			<Figure
				file={22}
				caption="A diagram of a single, double, and multiple scale." />
		</ol>
	</div>
	<div>
		<h5 class="rules-text">
			“Any melody we take that is harmonized on one principle is diatonic
			or chromatic or enharmonic...the diatonic must be granted to be the
			first and oldest, inasmuch as mankind lights upon it before the
			others...the chromatic comes next....The enharmonic is the third and
			most recondite…and with great labour and difficulty, that the ear
			becomes accustomed to it.” (178)
		</h5>
		<p>
			This quote stood out to me for a couple of reasons. First, and less
			important for now, is that Aristoxenus reintroduces the names of the
			three tetrachord genera: enharmonic, chromatic, and diatonic.
		</p>
		<p>
			Second, and more importantly, is that Aristoxenus gives insight to
			the history behind them. Enharmonic is described with a sense of
			reverence due to it being the "first and oldest," since he suggests
			it was the first genus that was discovered.
		</p>
		<Figure file={2} caption="A diagram of an Enharmonic tetrachord." />
		<p>
			Chromatic is also really interesting because all Aristoxenus says
			about it is that it comes second. There's probably a bunch of
			research that can (or has) been done about the Chromatic genus in
			particular, but seeing that we'll find out that the Chromatic genus
			is arguably the most complex of the three, it's interesting to see
			that Aristoxenus doesn't go into much detail about it here. The
			numbers in diagrams this point forward are the number of cents added
			or subtracted from the pitch below it due to the lack of a unique
			symbol to represent the division beyond a quarter tone.
		</p>
		<Figure file={3} caption="A diagram of a Chromatic tetrachord." />
		<p>
			Lastly, the diatonic genus, which we know to be most akin to the
			major scale using our modern sensibilities, is described to have
			little known about it in comparison to the other two. And,
			surprisingly to me, it's also described as needing "great labour" to
			get sonically accustomed to. This is fascinating because I find the
			other two tetrachords (you can use the calculator above along with
			the preset buttons to hear them right now) to be much more
			challenging due to the sub-semi-tone intervals. It makes me wonder
			about our ability to get conditioned to certain sounds, and whether
			or not Diatonic tetrachords were comprised of the intervals we think
			they were.
		</p>
		<Figure file={4} caption="A diagram of a Diatonic tetrachord." />
	</div>
	<div>
		<h5 class="rules-text">
			“The nature of melody in the abstract determines which concord has
			the least compass. Though many smaller intervals than the Fourth
			occur in melody, they are without exception discords...we find no
			similar determination for the greatest...concords seem capable of
			infinite extension just as much as discords.” (179)
		</h5>
		<p>
			This section reiterates a lot of what we already know. Aristoxenus
			suggests that intervals smaller than the Fourth are all discords.
			This would technically include the Unison, so the Fourth by
			definition is the smallest concord. He also suggests something I
			find really progressive which is the idea of infinite expansion and
			diminution. Concords don't appear to have a limit if you keep adding
			octaves to the smaller concords (Fourths and Fifths). Although our
			ability to hear and sing them stops at a point. Similarly, discords
			can continue to shrink as intervals within the Fourth are divided. I
			don't know whether or not this is objectively progressive, but my
			instinct about music from a historical perspective is that the
			further back in time you go, the more restrictive the music theory
			seems to be. Considering the history of Western European music is
			told through the lens of harmony becoming more and more complex,
			it's interesting to see writing that suggests possibilities for
			pitches that are smaller than the semitone, which wouldn't get a ton
			of attention until the 20th century.
		</p>
	</div>
	<div>
		<h5 class="terms-text">
			"A tone is the difference in compass between the first two
			concords...may be divided by the three lowest denominators, as
			melody admits of half tones, thirds of tones, and quarter-tones,
			while undeniably rejecting any interval less than these...the
			smallest enharmonic diesis, the next the smallest chromatic diesis,
			and the greatest, a semitone.” (180)
		</h5>
		<p>
			I thought this excerpt was interesting because Aristoxenus goes into
			detail about defining what a tone is. Not only does it remind me
			that there are things we take for granted in music that we just
			accept as true because we were told they were true, but it also
			reinforces the idea that to Aristoxenus, the Fourth is the smallest
			concord. Subtracting the difference between the Fourth and the
			Fifths results in a tone.
		</p>
		<p>
			He also goes into detail about divisions of the tone (which would
			result in irrational intervals, by the way) by the "three lowest
			denominators": 2, 3, and 4. This results in semi (half), third, and
			quarter tones.
		</p>
		<p>
			Lastly, he introduces the word <span class="fst-italic">diesis</span
			>, which is the smallest interval of a tetrachord. The quarter tone
			is the "smallest Enharmonic diesis," the third tone is the "smallest
			chromatic diesis," and the, "greatest, a semitone." Going back to
			reading this quote, I think phrasing is important for understanding
			everything Aristoxenus is trying to say here. If the quarter tone is
			the smallest Enharmonic diesis, and the third tone is the smallest
			chromatic diesis, that implies that all tetrachords with a diesis
			smaller than a third tone are Enharmonic, and all tetrachords with a
			diesis larger than a third are Chromatic. Something that's easy to
			glance over, but probably the most imporant takeaway is that the
			semi tone isn't referred to as a diesis, but as a "greatest"
			interval. This implies that location of the diesis (which we'll
			learn will always be between the 1st and 2nd notes of the
			tetrachord) can't be larger than a semi tone, and that the semi tone
			isn't assigned to a particular genus because it can be found in both
			Chromatic and Diatonic tetrachords (more on this later).
		</p>
		<Figure
			file={5}
			caption="A diagram of showcasing the diesis of a tetrachord. This tetrachord would be considered Chromatic with an Enharmonic diesis." />
	</div>
	<div>
		<h3>Differences of the genera (180)</h3>
		<p>
			The next section is what originally inspired the calculator at the
			top of the page. <a href="{base}/differences-of-the-genera"
				>click here to read the translation.</a> It'll be formatted similarly
			to the rest of the webpage (quotes from the translation, followed by
			my own comments), but this section is going to contain quotes that are
			all related to the 3 tetrachord genera, as opposed to earlier quotes
			which stood on their own.
		</p>
	</div>
	<div>
		<h5 class="terms-text">
			"...the smallest of the concords, that of which the compass is
			usually occupied by four notes.” (180)
		</h5>
		<p>
			This is Aristoxenus' base definition of a tetrachord. It spans the
			range of "the smallest of the concords," which we know to be a
			perfect Fourth, and that it usually contains 4 notes. All the
			examples Aristoxenus gives contain 4 notes, but there could
			potentially more, or maybe even less. I always assumed the "tetra"
			in tetrachord referred to the number of notes, but it could also
			refer to the outer interval.
		</p>
		<Figure
			file={16}
			caption="A perfect Fourth. The allowable range of a tetrachord." />
	</div>
	<div>
		<h5 class="terms-text">
			“An example of the order required will be found in the interval
			between the Mese and the Hypate…Further, while there are several
			groups of notes which fill this scheme of the Fourth…there is one
			which, as being more familiar than any other to the student of
			music…It consists of the Mese, Lichanus, Participate, and Hypate.”
			(180)
		</h5>
		<p>
			Here, Aristoxenus introduces the names of the scale degrees: Hypate,
			Parhypate, Lichanus, and Mese.
		</p>
		<Figure file={6} caption="A diagram of the scale degrees." />
	</div>
	<div>
		<h5 class="rules-text">
			“The locus of the variation of the Lichanus is a tone, for this note
			is never nearer the Mese than the interval of a tone, and never
			further from it than the interval of two tones. The lesser of these
			extreme intervals is recognized as…the Diatonic Genus….The greater
			of these extreme intervals…finds no such universal acceptance. That
			there is a style of composition which demands a Lichanus at a
			distance of two tones from the Mese.” (181)
		</h5>
		<p>
			This section describes a rule for the interval between Lichanus and
			Mese (scale degrees 3 and 4), which is that the interval must be
			between 1 and 2 tones, inclusive.
		</p>
		<Figure
			file={7}
			caption="A diagram of the interval limits between Lichanus and Mese." />
		<p>
			When the interval between Lichanus and Mese is a tone, the
			tetrachord can be classified as Diatonic. And when the interval
			between Lichanus and Mese is 2 tones, the tetrachord can be
			classified as Enharmonic. Aristoxenus excludes the Chromatic,
			because it occupies a space in between the two extremes (we'll learn
			that, just like the case of dieses occupying a range of intervals,
			that the range between Lichanus and Mese is also a range).
		</p>
	</div>
	<div>
		<h5 class="snark-text">
			“...the fact that time and attention are mostly devoted to chromatic
			music…that when the enharmonic is introduced, it is approximated to
			the chromatic, while the ethical character of the music suffers…”
			(181)
		</h5>
		<p>
			This is a bit of a philosophical aside that suggests some important
			information about Aristoxenus' perspective on the three genera. From
			an ethical standpoint, Aristoxenus is suggesting that during his
			time, the Enharmonic and Chromatic genera were being unfairly
			likened to one another (try them both in the calculator to compare
			for yourself). Because they are distinct, lumping them together
			would result in an ethical dilemma. Admittedly, the Enharmonic and
			(Soft) Chromatic tetrachords are very similar due to their sub
			semi-tone dieses; however Aristoxenus seems to be advocating for a
			theory that acknowledges them both as distinct. Perhaps he feared
			that the direction music was going would've resulted in a loss of
			any non-diatonic genera. In hindsight, he was somewhat right, as
			most Western music theory is based on Diatonic scales. Ironically,
			the Chromatic scale was reappropriated by Western theorists to
			describe an octave divided in equal (usually 12 semi tones, not
			third tones) parts.
		</p>
	</div>
	<div>
		<h5 class="rules-text">
			“...the locus of the Lichanus to be a tone, and that of the
			Parhypate to be the smallest diesis...” (181)
		</h5>
		<p>
			Here we see Aristoxenus talk about distances between Parhypate and
			Lichanus (scale degrees 2 and 3). This range is a bit more nebulous
			than the other two intervals, since this range is a result of
			modifying the outer intervals. We can figure out what the extremes
			of this range would be by using the ranges we know from the outer
			intervals. It's helpful to know that a perfect Fourth is 2 and a
			half tones to follow along with the math here.
		</p>
		<p>
			First, we're going to find out that the interval between Hypate and
			Parhypate is the smallest interval in the tetrachord, which means
			this interval can be equal to or larger than. So, if the smallest
			allowable melodic interval is a quarter tone, the interval from
			Parhypate to Lichanus can't be smaller than a quarter tone.
		</p>
		<p>
			We can find the upper limit of the interval by hypothesizing about a
			tetrachord with a quarter tone leftmost interval, and a tone
			rightmost interval. If a tetrachord has a total of 2 and a half
			tones, that means the middle interval can't be larger than 1 and a
			quarter tones. This is confusing, since Aristoxenus seems to be
			implying that the middle interval is between a quarter tone and a
			tone, but the phrasing might just be awkward. Instead, he might be
			saying that the total range is a tone <span class="fw-bold"
				>plus</span> the smallest diesis.
		</p>
		<p>
			Long story short, the range of the middle interval is a quarter tone
			to 1 and a quarter tones (inclusive).
		</p>
		<figure>
			<img
				src="{base}/8.png"
				alt="A diagram of the interval limit between Parhypate and Lichanus."
				class="img-fluid mb-3 rounded-1" />
			<figcaption class="fw-lighter">
				A diagram of the interval limit between Parhypate and Lichanus.
			</figcaption>
		</figure>
	</div>
	<div>
		<h5 class="rules-text">
			"...as the [Parhypate] is never nearer to the Hypate than a diesis,
			and never further from it than a semitone." (181-182)
		</h5>
		<p>
			This section talks about the ranges we were already able to infer
			from Aristoxenus' notes ealier. The interval between Hypate and
			Parhypate (scale degrees 1 and 2), will be between a quarter tone
			and a semi tone (inclusive).
		</p>
		<Figure
			file={12}
			caption="A diagram of the interval limit between Hypate and Parhypate." />
	</div>
	<div>
		<h5 class="terms-text">
			“[The] Pycnum [is] two intervals, the sum of which is less than the
			complement that makes up the Fourth.” (182)
		</h5>
		<p>
			Aristoxenus introduces a new term here, <span class="fst-italic"
				>pycnum</span
			>, which refers to a special case where the lowest and middle
			intervals of the tetrachord add up to an interval that's less than
			the highest interval in the tetrachord. For example, the Enharmonic
			tetrachord might have a pycnum of 1/2 tone, leaving 2 tones for the
			interval from Lichanus to Mese. A Diatonic tetrachord won't have a
			pycnum because the interval from Hypate to Lichanus is 1 and 1/2
			tones, which is larger than the rest of the tetrachord (1 tone).
		</p>
		<Figure
			file={13}
			caption="A diagram with an examples of intervals that make up a pycnum, and intervals that don't make up a pycnum." />
	</div>
	<div>
		<h5 class="tetrachord-text">
			“...starting from the lower of the two fixed notes, take the least
			Pycnum...the two least enharmonic diesis...while a second
			Pycnum…will consist of two of the least chromatic diesis. This gives
			the two lowest Lichani of two genera the—enharmonic and the
			chromatic.” (182)
		</h5>
		<p>
			This quote and the following quote provides us with preliminary
			information about not only the 3 tetrachord genera, but also
			foreshadows the concept of <span class="fst-italic">shading</span>,
			which refers to different flavors of tetrachords that belong to the
			same genus.
		</p>
		<p>
			The first scenario involves making an Enharmonic tetrachord with
			"the least pycnum." In other words, this would be a interval that's
			the sum of two of the smallest Enharmonic dieses, or quarter tones.
			This would result in a tetrachord that looks like: 1/4 tone > 1/4
			tone > 2 tones.
		</p>
		<Figure
			file={14}
			caption="A diagram of the tetrachord from the Enharmonic genus Aristoxenus describes in the quote." />
		<p>
			The second scenario describes the <span class="fst-italic"
				>Soft</span> Chromatic tetrachord, and it involves another pycnum.
			This time the pycnum is a sum of the two smallest Chromatic dieses, or
			1/3 tones. This would result in a tetrachord that looks like: 1/3 tone
			+ 1/3 tone + 1 5/6 tones. This fraction looks a bit weird, seing that
			we're only dealt with 1/2s, 1/3s, and 1/4s so far. However, the need
			for 1/6s comes from having to do math with 1/2 tones and 1/3 tones, because
			their lowest common denominator is 6.
		</p>
		<Figure
			file={15}
			caption="A diagram of a Soft tetrachord from the Chromatic genus." />
	</div>
	<div>
		<h5 class="tetrachord-text">
			“Again, let a third Pycnum be taken, still from the same note; then
			a fourth, which is equal to a tone; then fifthly, from the same
			note… a tone and a quarter, then a sixth scale… a tone and a half.”
			(182)
		</h5>
		<p>
			Like I mentioned in the above commentary, this quote is set up to
			explain Aristoxenus' process of deriving 6 shades of the 3
			tetrachord genera.
		</p>
		<p>
			The third Pycnum being "taken, still from the same note" is by far
			the most unintuitive part of the six part process. In fact, I'm
			suspicious that this might even be a mistranslation given how
			Aristoxenus elaborates on the structure of this third shade of
			tetrachord. Even though Aristoxenus says to take a pycnum from the
			same note, which would imply a 2/3 tone interval, the third shade he
			refers to is called the <span class="fst-italic">Hemiolic</span>
			Chromatic (more on this later). This tetrachord is actually made up of
			3/8 tone + 3/8 tone + 1 3/4 tones. The sum of 3/8 and 3/8 is 6/8 or 3/4s,
			not 2/3s, and serves as another division of the tone before we get to
			the 1/2 tone. In summary, I don't understand why Aristoxenus says to
			take a pycnum from the same note, when this doesn't end up being the
			case.
		</p>
		<Figure
			file={23}
			caption="A diagram of a Hemiolic Chromatic tetrachord." />
		<p>
			The fourth case describes what Aristoxenus will call the <span
				class="fst-italic">Intense</span> Chromatic tetrachord. The pycnum
			is equal to a tone, which implies that it's the result of adding two
			1/2 tones together. This would result in a tetrachord that looks like:
			1/2 tone + 1/2 tone + 1 1/2 tones.
		</p>
		<Figure
			file={24}
			caption="A diagram of an Intense Chromatic tetrachord." />
		<p>
			The fifth case describes the a <span class="fst-italic">Tonic</span>
			(or Soft) Diatonic tetrachord. Technically, it doesn't involve a pycnum
			because the sum of the lower two intervals is 1 1/4 tones. And if a perfect
			Fourth is 2 1/2 tones, the highest interval would also be 1 1/4 tones.
			This particular scenario involves 1/2 tone + 3/4 tone + 1 1/4 tones.
		</p>
		<Figure
			file={25}
			caption="A diagram of a Tonic, or Soft, Diatonic tetrachord." />
		<p>
			The sixth and last case describes a tetrachord with the largest
			possible combination of lower intervals: a diesis of 1/2 tone and a
			middle interval of 1 tone. This is the only shade that Aristoxenus
			describes in this 6-part process that has a high interval that is
			smaller than the sum of the two lower intervals.
		</p>
		<Figure
			file={26}
			caption="A diagram of an Intense Diatonic tetrachord." />
	</div>
	<div>
		<h5 class="ear-first-text">
			“Continuity in melody seems in its nature to correspond to that
			continuity in speech which is observable in the collocation of the
			letters. This is done in no random order: rather, the growth of the
			whole from the parts follows a natural law.” (184-185)
		</h5>
		<p>
			Before wrapping up book 1, and getting into more details about the
			tetrachords at the beginning of book 2, we get another philosophical
			nugget that connects to Aristoxenus' focus on practice informed
			theory. The notion of notes having a sense of trajectory from one to
			the next is something that, according to Aristoxenus, is partially
			natural and intuitive.
		</p>
	</div>
	<div>
		<h5 class="snark-text">
			“...we must avoid the example set by the Haromnists in their
			condensed diagrams, where they mark as consecutive notes those that
			are separated from one another by the smallest interval. For so far
			is the voice from being able to produce twenty-eight consecutive
			dieses, that it can by no effort produce three dieses in
			succession.” (185)
		</h5>
		<p>
			Another aside is a snark from Aristoxenus to his predecessors. This
			quote suggests that the Haromnists (whoever they were), implied
			through their teachings that an octave could be divided into 28
			quarter tones. In theory, this is true because the octave is a
			series of 8 unique tones, 6 tones and 2 semi tones, which adds up to
			28 quarter tones. However, singing more than a tone (let alone an
			octave) in consecutive quarter tones isn't practical.
		</p>
		<Figure
			file={27}
			caption="An impractical-to-sing scale of consecutive quarter tones from E to G." />
	</div>
	<div>
		<h5 class="voice-text">
			"If ascending after two dieses, [the voice] can produce nothing less
			than the complement of the Fourth, and that is either eight times
			the smallest dieses, or falls short of it only by a minute and
			unemlodic interval. If descending, it cannot after the two dieses
			introduce any interval less than a tone.”" (185)
		</h5>
		<p>
			This quote goes into more detail about what Aristoxenus was setting
			up in the two previous quotes. He suggests that, when ascending, the
			voice naturally wants to complete the Fourth after a series of 2
			dieses. Conversely, when descending, the voice doesn't want to
			produce intervals any less than a tone. This is convenient because
			it aligns with cases of conjunct and disjunct scales that
			Aristoxenus goes into more detail about in book 2.
		</p>
	</div>
	<div>
		<h5 class="rules-text">
			“...any note in that series will either form with the fourth from it
			in order the concord of the Fourth, or with the fifth from it in
			order the concord of the Fifth, while possibly forming both.” (186)
		</h5>
		<p>
			This quote is talking about continuous double scales (and possibly
			multiple scales, as well). When producing continuous scales
			consisting of more than 1 tetrachord, each pitch in the lower
			tetrachord will form a perfect Fourth or perfect Fifth with a pitch
			higher in the scale. Conversely, the upper tetrachord will form a
			concord with the lower tetrachord, as well.
		</p>
		<Figure
			file={28}
			caption="A diagram of a double scale's possible concord relationships." />
	</div>
	<div>
		<h5 class="rules-text">
			“...there are four intervals contained in the interval of the Fifth,
			two of which are usually equal, viz. those constituting the Pycnum,
			and two unequal--on the complement of the first concord, the other
			the excess of the interval of the Fifth over that of the Fourth, the
			unequal intervals which succeed the equal intervals do so in
			different order according as we ascend or descend the scale.” (186)
		</h5>
		<p>
			This quote is especially important because there's been so much
			emphasis on tetrachords here that the fifth has been largely
			neglected. That being said, Aristoxenus provides a brief and clear
			explanation (which is very rare in his writing 😂) for how Fifths
			arise in this tetrachordal system. Basically a Fifth contains all
			the same properties a tetrachord does, but with the addition of a
			tone at the top. The interval at the top of the Fifth will always be
			a tone in both conjunct and disjunct scales.
		</p>
		<Figure
			file={29}
			caption="A diagram of a perfect Fourth alongside a perfect Fifth." />
	</div>
</div>

<style>
	.snark-text {
		color: #bb8fce;
	}

	.ear-first-text {
		color: #85c1e9;
	}

	.voice-text {
		color: #f7dc6f;
	}

	.terms-text {
		color: #e59866;
	}

	.rules-text {
		color: #82e0aa;
	}

	.tetrachord-text {
		color: #d98880;
	}
</style>
