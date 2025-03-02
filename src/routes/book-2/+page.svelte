<script>
	import { base } from "$app/paths";
	import ColorCode from "$lib/ColorCode.svelte";
</script>

<div class="container">
	<!-- Intro/Color Code -->
	<div>
		<h1 class="text-center">Book 2</h1>
		<div class="d-flex gap-2 flex-wrap justify-content-center">
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
			There's part of me that feels that Book 2 would've been better off
			as Book 1, since there's a lot more foundational information here
			that clarifies the concepts of Book 1. However, Aristoxenus wrote so
			many books that it's hard to say whether or not someone reading this
			book would've already been familiar with the terms and concepts
			covered in Book 1. That being said, here are some of what I think
			are the most important takeaways from Book 2:
		</p>
		<ol>
			<li>
				Sense perception is crucial to the study of music, and it's the
				main thing separating musicians from mathemeticians.
			</li>
			<li>
				The voice is the most important instrument for understanding the
				natural laws that inform Aristoxenus' theory of harmony.
			</li>
			<li>
				Just because there are exceptionally small intervals in some
				tetrachord genera, it doesn't mean that playing them
				consecutively and out of their scalar context produces a
				melodious result.
			</li>
			<li>
				Even though the genera have different shades, the ear can still
				distinguish what genera a tetrachord belongs to.
			</li>
			<li>
				Aristoxenus still has beef with his predecessors and their
				supposed stripping of music from their theories.
			</li>
			<li>
				The ditone is approximately a major Third, and can be derived by
				a series of perfect Fourths or Fifths.
			</li>
			<li>The Fifth is a Fourth with an added tone.</li>
		</ol>
		<p>
			I also want to add that there's a bit of discussion about
			Aristoxenus' precessors' organization of the modes near the
			beginning of Book 2, and while I'd like to talk about it, most of my
			commentary is about how I'm confused about how they've arrived at
			the distances between scale degrees. That being said, I think it's
			better that I focus on the tetrachords and scales they're used to
			create instead, since the book goes into much more detail about it
			over a modal context.
		</p>
	</div>
	<div>
		<h5>
			“The geometrician makes no use of his faculty of sense-perception.
			He does not in any degree train his sight to discriminate the
			straight line, the circle, or any other figure, such training
			belonging rather to the practice of the carpenter, the turner, or
			some other such handicraftsman. But for the student of musical
			science accuracy of sense-perception is a fundamental requirement.”
			(189)
		</h5>
		<p>
			I'm going to go out on a limb and say that the aesthetic of
			Aristoxenus' theory of harmony is our senses should guide our
			theories. Mathemeticians don't readily use their senses to dictate
			their theories, so why has theory up to this point been so number
			centric? Aristoxenus likens the musician to the artisan, which I
			think is an interesting comparison, since artisinal work is often
			associated with the average person, and education is often
			associated with the elite. There's almost a sense of trying to
			distribute music theory to the masses, which seems the most fair
			considering that music is generally beloved by everyone.
		</p>
	</div>
	<div>
		<h5>
			"But as a fact neither clarinets nor any other instrument will apply
			a foundation for the principles of harmony.” (196)
		</h5>
		<p>
			This quote is easy to read over if you're looking at Aristoxenus'
			writings through a tetrachordal lens, however, it's a reminder that
			the voice is ultimately guiding Aristoxenus in regards to his theory
			of harmony.
		</p>
	</div>
	<div>
		<h5>
			“The following fractions of a tone occur in melody…the half, called
			a semi tone...the third, called the smallest Chromatic diesis…the
			quarter, called the smallest Enharmonic diesis.” (199)
		</h5>
		<p>
			I wen't into detail about this in comments I made about Book 1,
			however, this is the actual quote that introduces the three most
			common melodic divisions of the tone. Something to bear in mind is
			that he excludes the Hemiolic diesis, which is a 3/8 despite it
			being one of the more noteworthy shades of the Chromatic genus.
			Something to bear in mind though is that when combining two Hemiolic
			dieses results in a 3/4 tone pycnum, and because that's also a sum
			of quarter tones, it's most likely a melodic division of the tone.
		</p>
	</div>
	<div>
		<h5>
			“...many have misunderstood…that melody admits the division of the
			tone into three or four equal parts…to employ the third part of a
			tone is a very different thing from dividing a tone into three parts
			and singing all three.” (199)
		</h5>
		<p>
			This quote reinforces what I said earlier about the tone being
			divided into smaller fractions, but the biggest takeway is that
			fractional divisions of the tone don't necessarily mean that playing
			many of them in succession will produce a melodious result.
		</p>
	</div>
	<div>
		<h5>
			“There is admittedly but one interval between the Mese and Paramese,
			and again between the Mese and Hypate, and in fact between any pair
			of the permanent notes. Why then should we admit a plurality of
			intervals between the Mese and the Lichanus?” (200)
		</h5>
		<p>
			Aristoxenus sets up the next excerpt with this question. Before
			breaking it down, in an octave scale, there are fourth additional
			scale degree names (in order from lowest to highest): Paramese,
			Trite, Paranete, and Nete.
		</p>
		<p>
			This question talks about why the Lichanus is the only variable note
			in the scale, in comparison to the other notes, which are fixed in
			order to maintain the perfect Fourth and Fifth needed to complete
			the octave in this line of thinking. I make the comparison between
			the Lichanus and the third of a major/minor triad. The third is what
			constitutes the flavor of the triad, while the root and the fifth
			are always a fixed distance, so in order to create different genera,
			the Lichanus must be the variable note because of it's location in
			the tetrachord.
		</p>
		<p>
			Something that confuses me, however, is why Aristoxenus puts much
			more emphasis on the Lichanus being variable, while the Parhypate is
			conceptually just as variable, albeit the range is smaller.
		</p>
	</div>
	<div>
		<h5>
			“We see that the Nete and Mese differ in function from the Paranete
			and Lichanus, and the Paranete and Lichanus again from the Trite and
			Parhypate, and these latter again from the Paramese and Hypate; and
			for this reason each pair has names of its own, though the contained
			interval in every case is a Fifth.” (200)
		</h5>
		<p>
			All this quote is saying is that two tetrachord scales will always
			produce a series of 4 Fifths: Hypate to Paramese, Parhypate to
			Trite, Lichanus to Paranete, and Mese to Nete. Aristoxenus doesn't
			specify the quality of the Fifths, however, which might be on
			purpose because some scales could potentially produce a diminished
			Fifth.
		</p>
	</div>
	<div>
		<h5>
			“For the ear detects a motion peculiar to each of the genera, though
			each genus employs not one but many divisions of the tetrachord.”
			(201)
		</h5>
		<p>
			Here's another quote that suggests the ear has the ability to
			distinguish genera from one another. Because of the concept of
			shading, we know that the slight differences in tuning make the
			shades sound similar to one another that belong to the same genus,
			but even if the ear can't distinguish the shades, it can still tell
			what genus a tetrachord belongs to.
		</p>
	</div>
	<div>
		<h5>
			“There are certain divisions of the tetrachord which stand out from
			the rest as familiar…one is Enharmonic, in which the Pycnum is a
			semitone, and it’s complement two tones…” (202)
		</h5>
		<p>
			Here is the complete explanation of what an Enharmonic tetrachord
			consists of. We get a bit of a cryptic explanation in Book 1,
			however, here we see that it contains a semi tone pycnum (1/4 tone +
			1/4 tone) and a 2 tone complement.
		</p>
	</div>
	<div>
		<h5>
			“...three are Chromatic, namely, the Soft, the Hemiolic, and the
			Tonic Chromatic. The division of the Soft Chromatic is… the Pycnum
			consists of two of the smallest Chromatic dieses, while its
			complement is expressed in terms of… a semitone taken thrice and a
			Chromatic diesis taken once. he… Hemiolic Chromatic is that in which
			the Pycnum is one and a half times the Enharmonic Pycnum, and each
			Diesis one and a half times and Enharmonic diesis. The… Tonic
			Chromatic… the Pycnum consists of two semitones, and its complement
			of a tone and a half." (202)
		</h5>
		<p>
			A long quote, but it fully explains the 3 common shades of Chromatic
			tetrachord. There was a quote in Book 1 that mentions the genera,
			and pays the least attention to the Chromatic genus; however, we see
			that the Chromatic genus has the most common shades of the 6 the
			Aristoxenus offers here.
		</p>
		<p>
			The Soft Chromatic is described with some difficult to intuit
			language. It works out to be 1/3 + 1/3 + 1 5/6 tones, which I talked
			about in the Book 1 commentary, however his language is a bit wordy
			here because he's trying to explain the complement in less number
			oriented terms. It's complement is a semitone taken thrice (1/2 +
			1/2 + 1/2) and a Chromatic diesis taken once (1/3). When summing it
			all together, you get 3/2 + 1/3, which requires you to think in
			terms of 6ths: 9/6 + 2/6, which equally 11/6, or 1 and 5/6 tones.
		</p>
		<p>
			The Hemiolic Chromatic is the unusually vague case from Book 1
			that's explained much more clearly here. It's pycnum is 1 and 1/2
			times the Enharmonic pycnum, which works out to 3/4 tones. This
			leaves us with a complement of 1 and 3/4 tones.
		</p>
		<p>
			Lastly, the Tonic Chromatic is a series of 2 semi tones, leaving us
			with a complement of 1 and 1/2 tones.
		</p>
	</div>
	<div>
		<h5>
			“There are two divisions of the Diatonic genus, the Soft and the
			Sharp Diatonic. The… Soft Diatonic… the interval between the Hypate
			and Parhypate is a semitone, that between the Parhypate and Lichanus
			three Enharmonic dieses, that between the Lichanus and Mese five
			dieses. The… Sharp Diatonic is that in which the interval between
			the Hypate and Parhypate is a semitone, while each of the remaining
			intervals is a tone.” (203)
		</h5>
		<p>
			Another longer quote, however it gives us all we need to know about
			the 2 common Diatonic shades.
		</p>
		<p>
			The Soft Diatonic is an interesting case because it's the first
			division that's offered and doesn't have a pycnum. The first
			interval is 1/2 tone, and the middle interval is "three Enharmonic
			diesis," which works out to be 3/4 tones, just like the interval
			from Hypate to Lichanus in the Hemiolic Chromatic. The complement is
			the same as the sum of the first two intervals, 1 and 1/4 tones,
			which is why this tetrachord doesn't have a pycnum.
		</p>
		<p>
			The Sharp (or some resources call it Intense) Diatonic is a 1/2 tone
			followed by 2 whole tones. This tetrachord is most like the interval
			relationships we'll find in our everyday Diatonic scales.
		</p>
	</div>
	<div>
		<h5>
			“Thus, while we have six Lichani, as there are six divisions of the
			tetrachord...we have but four Parhypate, that is, two less than the
			divisions of the tetrachord. For the semitone Parhypate is employed
			for both diatonic divisions, and for the Tonic Chromatic.” (203-204)
		</h5>
		<p>
			Here, it looks like Aristoxenus is just summarizing what we were
			just told: that there are 6 common divisions of the tetrachord;
			however I think there's a bit more to read into here.
		</p>
		<p>
			For starters, Aristoxenus describes the number of Lichani as
			"infinite" in Book 1, which would imply an infinite number of
			divisions of the tetrachord. However, perhaps he's suggesting that
			despite there being 3 genera, each of the infinite divisions of the
			tetrachord will always fall into one of these 6 common divisions. I
			can't say for sure, but just from reading, there's a hint of
			contradiction.
		</p>
		<p>
			Second, he talks about the disparity between the number of divisions
			of the tetrachord, and the number of Parhypate. While the
			Enharmonic, Soft Chromatic, and Hemiolic Chromatic all have a unique
			Parhypate, the rest of the tetrachord shades all have a semi tone
			parhypate. Even though he doesn't say this explicitly, I think this
			is a hint at why he doesn't call the semi tone a diesis.
		</p>
	</div>
	<div>
		<h5>
			“...the Hypate and Parhypate may be equal to that between the
			Parhypate and Lichanus, or less… but never greater...” (204)
		</h5>
		<p>
			This is an elaboration of what we already know. The lowest interval
			has to also be the smallest. The middle interval can equal the
			lowest interval, but it can't be less that it.
		</p>
	</div>
	<div>
		<h5>
			"..and also may be ascertained in the Chromatic by taking a
			Parhypate of the Soft, and a Lichanus of the Tonic Chromatic: for
			such divisions of the Pycnum sound melodious. ...the opposite order
			produces an unmelodious result; for instance, to take the semitone
			Parhypate, and the Lichanus of the Hemiolic Chromatic…...or the
			Parhypate of the Hemiolic, and the Lichanus of the Soft Chromatic."
			(204)
		</h5>
		<p>
			Here is an interesting quote that suggests that tetrachords can be
			formed by mixing and matching elements of unlike genera (how fun
			🎉).
		</p>
		<p>
			The first example is a melodious tetrachord that consists of the
			Parhypate of the Soft Chromatic (1/3 tone), and the Lichanus of the
			Tonic Chromatic (1 tone). This works out to be 1/3 tone + 2/3 tone +
			1 and 1/2 tones. This is a melodic tetrachord because it's intervals
			are packed from smallest to largest, left to right.
		</p>
		<p>
			The next example is the inverse of the first example, 2/3 tone + 1/3
			tone + 1 and 1/2 tones. This is an unmelodious tetrachord because
			the intervals are no longer packed from smallest to largest, left to
			right.
		</p>
		<p>
			The last example is another unmelodious tetrachord that consists of
			the Parhypate of the Hemiolic Chromatic (3/8 tone), and the Licahnus
			of the Soft Chromatic (2/3 tone). This works out to be very unusual
			fractional math: 3/8 tone + 7/24 tone + 1 and 5/6 tones. The need
			for 24ths of a tone is unintuitive, but we need it to express the
			fraction that, when added to the Parhypate, gives us the Lichanus,
			which is a 2/3 tone above the Hypate. In other words, 3/8 can be
			expressed as 9/24 and 9/24 + 7/24 = 16/24, which is 2/3s. This is a
			bit confusing to me since the smallest number we see Aristoxenus use
			in his math from Book 1 is 1/12 of a tone, so I'm not sure why I
			haven't encountered 24ths of a tone in any supplemental research
			I've done on Aristoxenus.
		</p>
	</div>
	<div>
		<h5>
			“...the interval between the Parhypate and Lichanus may be equal to,
			greater than, or less than that between the Lichanus and
			Mese...equal in the Sharp Diatonic...less in all the other
			shades...greater when we employ a Lichanus the highest of the
			Diatonic Lichani, and as Parhypate any one lower than that of the
			semitone.” (204)
		</h5>
		<p>
			Here, we see Aristoxenus devoting some time to explain the middle
			interval. Up until this point, we've seen the Parhypate and Lichanus
			explained as separate entities, which has led us to believe that the
			middle interval is just a byproduct of following the guidelines that
			have been set up for us. That being said, we can see that the middle
			interval can be equal to, less, or greater than the rightmost
			interval.
		</p>
		<p>
			The middle interval will be equal to the rightmost interval in one
			case: the Sharp Diatonic, which conists of 1/2 tone + 1 tone + 1
			tone.
		</p>
		<p>
			The middle interval is greater in shades that involve the greatest
			Diatonic Lichanus (1 and 1/2 tones) and any Parhypate that's lower
			than a semi tone. For example, if we have a tetrachord with a Soft
			Chromatic diesis (1/3 tone) and the greatest Diatonic Lichanus (1
			and 1/2 tones), it works out to: 1/3 tone + 1 and 1/6 tones + 1
			tone. I think the easiest way to reason this is that, if the
			Lichanus is 1 and 1/2 tones, the complement has to be 1 tone in
			order to remain a perfect Fourth. Therefore, the complement will
			always be smaller than the middle interval in these cases.
		</p>
		<p>
			In every other shade, we see that the middle interval is less than
			the right most interval.
		</p>
	</div>
	<div>
		<h5>
			“...in investigating continuity the laws of melody must be our
			guide, nor must we imitate those who shape their account of
			continuity with a view to the massing of small intervals...the
			voice’s power of connecting dieses stops short of three.” (204-205)
		</h5>
		<p>
			Another tidbit that Aristoxenus adds in regarding our natural
			capacity to accurately sing consecutive small intervals. If you read
			over the quote quickly, you see that the hard and fast rule is
			"short of three." Why doesn't he just say 2? I don't know 🤷.
		</p>
		<p>
			I think we also can read into a bit of nuance about the word diesis
			here. Earlier, I was theorizing why semi tones weren't referred to
			as dieses; however, if this adds additional context to the
			discussion, semi tones can be sung consecutively without issue, but
			smaller intervals can't (according to Aristoxenus). Therefore, I'm
			inclined to believe that semi tones aren't a diesis.
		</p>
	</div>
	<div>
		<h5>
			"...there is no interval which can be divided ad infinitum in
			melody, and that the natural laws of melody assign a maximum number
			of fractions to every interval. We necessarily infer that the notes
			containing fractions of the said number are consecutive. To this
			class belong the notes which… have been in use from the earliest
			times… for instance the Nete, the Paranete, and those that follow
			them." (205)
		</h5>
		<p>
			Aristoxenus says a lot of the natural order of pitches and intervals
			in this quote. Not only does he say that fractions of intervals can
			only be divided so many times before they become impractical to
			sing, or difficult to distinguish, but he also refers to fractional
			divisions of the tone as "consecutive."
		</p>
		<p>
			I want there to be more to read into this, because it feels complex
			based on the way that it's written; however, all I think Aristoxenus
			is saying here is that tetrachords are constructed using consecutive
			intervals. Sometimes there's nuance, like in the case of adjacent
			notes that are more than a tone apart (the Enharmonic Lichanus and
			Mese, for example), but Aristoxenus throws in Nete and Paranete out
			of nowhere it seems, considering we've been discussing tetrachords
			from Hypate to Mese up until this point.
		</p>
		<p>
			I think starting with Nete and Paranete was intentional, however,
			because this connects with the idea that I mentioned in my comments
			about Book 1 that tetrachords are sometimes constructed from the top
			(or what we would consider the top) down.
		</p>
	</div>
</div>
