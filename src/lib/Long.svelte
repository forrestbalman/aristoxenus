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
		<div>
			<h5>
				"[The enharmonicists] confin[ed] themselves to what is but the
				third part of that complete system, they selected for exclusive
				treatment a single magnitude in that third part, namely the
				Octave." (166)
			</h5>
			<p>
				If you know about what <span class="fst-italic"
					>enharmonic</span> means in the context of Greek music theory,
				then there's more to unpack in this quote; however, because Aristoxenus
				goes into detail about what enharmonic (and the rest of the tetrachord
				genera) means later on, the main takeaway from this quote is how
				Aristoxenus throws shade in the direction of his predecessors quite
				frequently in his treatise. Whether it's because his theories were
				met with resistance by his contemporaries, or because he genuinely
				felt the need to criticize the foundations of his musical progenitors,
				Aristoxenus' writing is full of snarky remarks like this, and through
				the lens of someone who's excited by juicy drama in historical texts,
				these can be fun to read in an otherwise ultra-dense, stream of consciousness
				writing style.
			</p>
		</div>
		<div>
			<h5>
				“The truth is that of all the objects to which the five senses
				apply not one other is characterized by an orderliness so
				extensive and so perfect.” (168)
			</h5>
			<p>
				This is one of the first hints we get in the book that discusses
				the idea of sense perception as an important factor in finding
				significance in music theory. Aristoxenus suggests that the
				order in which we classify sounds is unique to hearing as a
				sense, and that instead of relying purely on the mathematical
				relationships between intervals, we should also account for our
				tendencies and intuitions when it comes to hearing and producing
				pitch.
			</p>
		</div>
		<div>
			<h5>
				"Every voice is capable of change of position, and this change
				may be either continuous or by intervals." (170)
			</h5>
			<p>
				Aristoxenus presents a binary of continuous and intervallic
				vocal delivery. Continuous refers to the "motion of speech"
				(171), where he's observed that the voice never stays on a
				single identifiable pitch for a long enough time to perceive it.
				Intervallic refers to the opposite, where the voice moves
				between stations that have discernable pitch.
			</p>
		</div>
		<div>
			<h5>
				"...tension takes place when the string is in motion, height of
				pitch when it is stationary." (173)
			</h5>
			<p>
				Here, Aristoxenus discusses 4 qualities of a string in motion
				(or just vibrating bodies in general I'm assuming, despite him
				going into detail most about the voice): tension, relaxation,
				height, and depth. Tension refers to a string's motion from a
				lower frequency, to a higher frequency, and relaxation is the
				opposite. Somewhat confusingly, height and depth are used
				separately to describe the result of tension and relaxation,
				respectively. Aristoxenus justifies the need for both sets of
				terms by suggesting that one set of terms is used to describe
				the motion, and the other set is used to describe the result of
				the motion.
			</p>
		</div>
		<div>
			<h5>
				"What the voice cannot produce and the ear cannot discriminate
				must be excluded from the available and practically possible
				range of musical sound." (175)
			</h5>
			<p>
				In this quote, Aristoxenus is plainly suggesting that intervals
				that aren't practical to produce, nor readily discernable by
				ear, shouldn't be focused on theoretically. In this section, he
				introduces the terms <span class="fst-italic"
					>in parvitatem</span>
				and <span class="fst-italic">in magnitudinem</span> to describe 2
				types of interval relationships, the former being too small to sing/hear
				accurately, and the latter being large enough to sing/hear.
			</p>
		</div>
		<div>
			<h5>
				“[A note is] the incidence of the voice upon one point of pitch.
				Whenever the voice is heard to remain stationary on one pitch,
				we have a note qualified to take a place in a melody.” (176)
			</h5>
			<p>
				Aristoxenus defines notes as remaining on a pitch for a period
				of time. This makes sense, but I'm curious about whether or not
				this brings into question embellishments like slides and scoops.
				Could a note not consist of a gradient of pitches?
			</p>
		</div>
		<div>
			<h5>
				“An interval, on the other hand, is the distance bounded by two
				notes which have not the same pitch.” (176)
			</h5>
			<p>
				Intervals are the distance between two unlike pitches. Another
				question comes up regarding whether or not unisons are intervals
				in Aristoxenus' theory.
			</p>
		</div>
		<div>
			<h5>
				“A scale, again, is to be regarded as the compound of two or
				more intervals.” (176)
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
					Scales are a minimum of 3 notes in length (2 intervals
					results in 3 notes total).
				</li>
				<li>They don't have to occupy the span of an octave.</li>
			</ol>
		</div>
		<div>
			<h5>
				“Here we would ask our hearers to receive these definitions in
				the right spirit, not with jealous scrutiny of the degree of
				their exactness...and to consider our definition which affords
				an unexceptionable and exhaustive analysis is a difficult task
				in the case of all fundamental definitions…” (176)
			</h5>
			<p>
				I thought this quote of Aristoxenus getting defensive about his
				definitions shows a bit of vulnerability (or trouble to appear
				vulnerable) on his part. He appears to be aware that these
				definitions are broad, and leave some room for criticism;
				however, he also suggests that making definitions that are
				universally true is a challenge. It reads a little like a
				cop-out in place of providing examples to reinforce the
				definitions' legitimacy.
			</p>
		</div>
		<div>
			<h5>
				"The first classification of intervals distinguishes them by
				their compass,...concordant or discordant,...simple or
				compound,...divi[sion] according to the musical genus,...[and]
				rational or irrational." (176)
			</h5>
			<p>
				Aristoxenus goes into detail about intervals here, suggesting
				that they have certain qualities that allow them to be
				classified.
			</p>
			<ol>
				<li>
					Compass refers to the relative distance of intervals. For
					example, C to D would have a smaller compass than C to F
				</li>
				<li>
					Concordant intervals are what we would call <span
						class="fst-italic">perfect</span
					>: Fourths, Fifths, Octaves, and their compounds. Notice
					that Unisons are excluded, since Aristoxenus will go on the
					refer to the Fourth as the "smallest concord." Discordant
					intervals are all non-concordances.
				</li>
				<li>
					While our understanding of simple and compound intervals has
					to do with them being contained within the octave or a sum
					of a simple interval and an octave, Aristoxenus may not be
					using the term in the same way. Compound intervals might be
					intervals that can be divided into smaller intervals. For
					example, a Fourth might be considered compound because it
					can be divided into a series of tones, semitones, and even
					smaller intervals. Later in the treatise, Aristoxenus will
					go on to explain more about how context determines whether
					larger intervals (like the ditone (major Third)) can be
					simple or compound depending on context.
				</li>
				<li>
					Division according to the musical genus is a bit more
					convoluted, and gets explained indirectly in more detail
					later in the treatise. <span class="fst-italic">Genus</span>
					refers to the quality of the 3 types of tetrachords (4 note pitch
					collections that Aristoxenus explains in much more detail later,
					but he writes about it as if you're already familiar with the
					concept). From what I can gather from this, it can refer to either
					the interval belonging to a particular genus, or a compound interval's
					genus as a result of it being divided in a particular fashion.
					My hunch is that it's the latter, since Aristoxenus goes on to
					talk about scales being classified using the same qualities as
					intervals, with a few additional qualities as well.
				</li>
				<li>
					An interval's rationality, ultimately, has to do with it's
					ability to be expressed as a ratio of whole numbers. A
					perfect Fourth, for instance, can be represented as a 4:3
					ratio above the reference pitch. However, while Aristoxenus
					doesn't outright reject the mathematical principles that go
					into explaining the theory behind the intervals, Aristoxenus
					puts more of an emphasis on the ear's ability to perceive
					pitch. This results in Aristoxenus making use of intervals
					like the quarter tone, for instance. It can be identified by
					ear, and sung, but expressing it as a whole number ratio
					isn't practical.
				</li>
			</ol>
		</div>
		<div>
			<h5>
				“In scales will be found, with one exception, all the
				distinctions which we have met in intervals.” (177)
			</h5>
			<p>
				Aristoxenus says that scales follow all the same classifications
				as intervals, with the exception of simple and compound. While
				removing that quality, he adds three more in its place.
			</p>
			<ol>
				<li>
					<span class="fw-bold">Conjunct and disjunct</span> refers to
					the scales formation as a series of tetrachords. Conjunct refers
					to a scale that is formed by tetrachords that share a note. For
					example, a scale that consists of C > D > E > F > G > A > B,
					is a series of two intervallically identical tetrachords that
					share the note F. Disjunct refers to a scale that is formed by
					tetrachords that have a space in between them (Aristoxenus elaborates
					later that this gap is always a tone). For example, a scale that
					consists of C > D > E > F > G > A > B > C, is a series of two
					tetrachords (that happen to have different intervallic profiles)
					that have a gap in between them.
				</li>
				<li>
					<span class="fw-bold">Transilient and continuous</span> refers
					to the way notes progress from one to the next. Transilient refers
					to the presence of a gap larger than a tone between notes. For
					example, C > E > G, which looks like a major triad, could be
					described as a transilient scale. Continuous refers to scales
					with stepwise (or smaller) distances between notes. For example,
					C > D > E would be considered continuous.
				</li>
				<li>
					<span class="fw-bold">Single, double, or multiple</span>
					refers to the number of scales needed to construct it. A tetrachord,
					for instance, would be classified as a single scale because it's
					a standalone unit used to make larger scales. A double scale
					would be a scale comprised of two tetrachords, like the C > D
					> E > F > G > A > B > C scale I mentioned earlier. A multiple
					scale would be a scale comprised of more than two tetrachords.
					The introduction of the book talks about the
					<span class="fst-italic">Greater Complete System</span>,
					which is a series of 4 tetrachords that span the entire
					compass of what Aristoxenus considered to be the practical
					range of the voice.
				</li>
			</ol>
		</div>
		<div>
			<h5>
				“Any melody we take that is harmonized on one principle is
				diatonic or chromatic or enharmonic...the diatonic must be
				granted to be the first and oldest, inasmuch as mankind lights
				upon it before the others...the chromatic comes next....The
				enharmonic is the third and most recondite…and with great labour
				and difficulty, that the ear becomes accustomed to it.” (178)
			</h5>
			<p>
				This quote stood out to me for a couple of reasons. First, and
				less important for now, is that Aristoxenus reintroduces the
				names of the three tetrachord genera: enharmonic, chromatic, and
				diatonic.
			</p>
			<p>
				Second, and more importantly, is that Aristoxenus gives insight
				to the history behind them. Enharmonic is described with a sense
				of reverence due to it being the "first and oldest," since he
				suggests it was the first genus that was discovered.
			</p>
			<p>
				Chromatic is also really interesting because all Aristoxenus
				says about it is that it comes second. There's probably a bunch
				of research that can (or has) been done about the Chromatic
				genus in particular, but seeing that we'll find out that the
				Chromatic genus is arguably the most complex of the three, it's
				interesting to see that Aristoxenus doesn't go into much detail
				about it here.
			</p>
			<p>
				Lastly, the diatonic genus, which we know to be most akin to the
				major scale using our modern sensibilities, is described to have
				little known about it in comparison to the other two. And,
				surprisingly to me, it's also described as needing "great
				labour" to get sonically accustomed to. This is fascinating
				because I find the other two tetrachords (you can use the
				calculator above along with the preset buttons to hear them
				right now) to be much more challenging due to the sub-semi-tone
				intervals. It makes me wonder about our ability to get
				conditioned to certain sounds, and whether or not Diatonic
				tetrachords were comprised of the intervals we think they were.
			</p>
		</div>
		<div>
			<h5>
				“The nature of melody in the abstract determines which concord
				has the least compass. Though many smaller intervals than the
				Fourth occur in melody, they are without exception discords...we
				find no similar determination for the greatest...concords seem
				capable of infinite extension just as much as discords.” (179)
			</h5>
			<p>
				This section reiterates a lot of what we already know.
				Aristoxenus suggests that intervals smaller than the Fourth are
				all discords. This would technically include the Unison, so the
				Fourth by definition is the smallest concord. He also suggests
				something I find really progressive which is the idea of
				infinite expansion and diminution. Concords don't appear to have
				a limit if you keep adding octaves to the smaller concords
				(Fourths and Fifths). Although our ability to hear and sing them
				stops at a point. Similarly, discords can continue to shrink as
				intervals within the Fourth are divided. I don't know whether or
				not this is objectively progressive, but my instinct about music
				from a historical perspective is that the further back in time
				you go, the more restrictive the music theory seems to be.
				Considering the history of Western European music is told
				through the lens of harmony becoming more and more complex, it's
				interesting to see writing that suggests possibilities for
				pitches that are smaller than the semitone, which wouldn't get a
				ton of attention until the 20th century.
			</p>
		</div>
		<div>
			<h5>
				"A tone is the difference in compass between the first two
				concords...may be divided by the three lowest denominators, as
				melody admits of half tones, thirds of tones, and quarter-tones,
				while undeniably rejecting any interval less than these...the
				smallest enharmonic diesis, the next the smallest chromatic
				diesis, and the greatest, a semitone.” (180)
			</h5>
			<p>
				I thought this excerpt was interesting because Aristoxenus goes
				into detail about defining what a tone is. Not only does it
				remind me that there are things we take for granted in music
				that we just accept as true because we were told they were true,
				but it also reinforces the idea that to Aristoxenus, the Fourth
				is the smallest concord. Subtracting the difference between the
				Fourth and the Fifths results in a tone.
			</p>
			<p>
				He also goes into detail about divisions of the tone (which
				would result in irrational intervals, by the way) by the "three
				lowest denominators": 2, 3, and 4. This results in semi (half),
				third, and quarter tones.
			</p>
			<p>
				Lastly, he introduces the word <span class="fst-italic"
					>diesis</span
				>, which is the smallest interval of a tetrachord. The quarter
				tone is the "smallest Enharmonic diesis," the third tone is the
				"smallest chromatic diesis," and the, "greatest, a semitone."
				Going back to reading this quote, I think phrasing is important
				for understanding everything Aristoxenus is trying to say here.
				If the quarter tone is the smallest Enharmonic diesis, and the
				third tone is the smallest chromatic diesis, that implies that
				all tetrachords with a diesis smaller than a third tone are
				Enharmonic, and all tetrachords with a diesis larger than a
				third are Chromatic. Something that's easy to glance over, but
				probably the most imporant takeaway is that the semi tone isn't
				referred to as a diesis, but as a "greatest" interval. This
				implies that location of the diesis (which we'll learn will
				always be between the 1st and 2nd notes of the tetrachord) can't
				be larger than a semi tone, and that the semi tone isn't
				assigned to a particular genus because it can be found in both
				Chromatic and Diatonic tetrachords (more on this later).
			</p>
		</div>
		<div>
			<h3>Differences of the genera (180)</h3>
			<p>
				The next section is what originally inspired the calculator at
				the top of the page. It'll be formatted similarly to the rest of
				the webpage (quotes from the translation, followed by my own
				comments), but this section is going to contain quotes that are
				all related to the 3 tetrachord genera, as opposed to earlier
				quotes which stood on their own.
			</p>
		</div>
		<div>
			<h5>
				"...the smallest of the concords, that of which the compass is
				usually occupied by four notes.” (180)
			</h5>
			<p>
				This is Aristoxenus' base definition of a tetrachord. It spans
				the range of "the smallest of the concords," which we know to be
				a perfect Fourth, and that it usually contains 4 notes. All the
				examples Aristoxenus gives contain 4 notes, but there could
				potentially more, or maybe even less. I always assumed the
				"tetra" in tetrachord referred to the number of notes, but it
				could also refer to the outer interval.
			</p>
		</div>
		<div>
			<h5>
				“An example of the order required will be found in the interval
				between the Mese and the Hypate…Further, while there are several
				groups of notes which fill this scheme of the Fourth…there is
				one which, as being more familiar than any other to the student
				of music…It consists of the Mese, Lichanus, Participate, and
				Hypate.” (180)
			</h5>
			<p>
				Here, Aristoxenus introduces the names of the scale degrees:
				Hypate, Parhypate, Lichanus, and Mese.
			</p>
		</div>
		<div>
			<h5>
				“The locus of the variation of the Lichanus is a tone, for this
				note is never nearer the Mese than the interval of a tone, and
				never further from it than the interval of two tones. The lesser
				of these extreme intervals is recognized as…the Diatonic
				Genus….The greater of these extreme intervals…finds no such
				universal acceptance. That there is a style of composition which
				demands a Lichanus at a distance of two tones from the Mese.”
				(181)
			</h5>
			<p>
				This section describes a rule for the interval between Lichanus
				and Mese (scale degrees 3 and 4), which is that the interval
				must be between 1 and 2 tones, inclusive.
			</p>
			<p>
				When the interval between Lichanus and Mese is a tone, the
				tetrachord can be classified as Diatonic. And when the interval
				between Lichanus and Mese is 2 tones, the tetrachord can be
				classified as Enharmonic. Aristoxenus excludes the Chromatic,
				because it occupies a space in between the two extremes (we'll
				learn that, just like the case of dieses occupying a range of
				intervals, that the range between Lichanus and Mese is also a
				range).
			</p>
		</div>
		<div>
			<h5>
				“...the fact that time and attention are mostly devoted to
				chromatic music…that when the enharmonic is introduced, it is
				approximated to the chromatic, while the ethical character of
				the music suffers…” (181)
			</h5>
			<p>
				This is a bit of a philosophical aside that suggests some
				important information about Aristoxenus' perspective on the
				three genera. From an ethical standpoint, Aristoxenus is
				suggesting that during his time, the Enharmonic and Chromatic
				genera were being unfairly likened to one another (try them both
				in the calculator to compare for yourself). Because they are
				distinct, lumping them together would result in an ethical
				dilemma. Admittedly, the Enharmonic and (Soft) Chromatic
				tetrachords are very similar due to their sub semi-tone dieses;
				however Aristoxenus seems to be advocating for a theory that
				acknowledges them both as distinct. Perhaps he feared that the
				direction music was going would've resulted in a loss of any
				non-diatonic genera. In hindsight, he was somewhat right, as
				most Western music theory is based on Diatonic scales.
				Ironically, the Chromatic scale was reappropriated by Western
				theorists to describe an octave divided in equal (usually 12
				semi tones, not third tones) parts.
			</p>
		</div>
		<div>
			<h5>
				“...the locus of the Lichanus to be a tone, and that of the
				Parhypate to be the smallest diesis...” (181)
			</h5>
			<p>
				Here we see Aristoxenus talk about distances between Parhypate
				and Lichanus (scale degrees 2 and 3). This range is a bit more
				nebulous than the other two intervals, since this range is a
				result of modifying the outer intervals. We can figure out what
				the extremes of this range would be by using the ranges we know
				from the outer intervals. It's helpful to know that a perfect
				Fourth is 2 and a half tones to follow along with the math here.
			</p>
			<p>
				If the smallest diesis is a quarter tone, and the largest
				interval from Lichanus to Mese is 2 tones, the smallest extreme
				must be a quarter tone (or the smallest diesis).
			</p>
			<p>
				If the largest interval from Hypate to Parhypate is a semi tone,
				and the smallest interval from Lichanus to Mese is 1 tone, the
				largest extreme must be a tone.
			</p>
			<p>
				Long story short, the range of the middle interval is a quarter
				tone to 1 tone (inclusive).
			</p>
		</div>
		<div>
			<h5>
				"...as the [Parhypate] is never nearer to the Hypate than a
				diesis, and never further from it than a semitone." (181-182)
			</h5>
			<p>
				This section talks about the ranges we were already able to
				infer from Aristoxenus' notes ealier. The interval between
				Hypate and Parhypate (scale degrees 1 and 2), will be between a
				quarter tone and a semi tone (inclusive).
			</p>
		</div>
	</div>
</div>
