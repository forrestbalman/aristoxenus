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
		<h1 class="text-center">Book 2</h1>
		<div class="d-flex gap-2 flex-wrap justify-content-center">
			<ColorCode color="#85c1e9" text="Ear first, math later" />
			<ColorCode color="#f7dc6f" text="About the voice" />
			<ColorCode color="#82e0aa" text="Rules and guidelines" />
			<ColorCode color="#d98880" text="Tetrachord construction" />
			<ColorCode color="#e59866" text="Questions and inconsistencies" />
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
		<h5 class="ear-text">
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
		<h5 class="voice-text">
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
		<h5 class="rules-text">
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
		<Figure file={30} caption="Both smallest dieses and the semitone." />
	</div>
	<div>
		<h5 class="voice-text">
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
		<Figure
			file={31}
			caption="Diagrams of third tones being used in a Chromatic tetrachord, and of consecutive third tones being used unmelodiously." />
	</div>
	<div>
		<h5 class="questions-text">
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
		<Figure file={32} caption="A diagram of all octave scale degrees" />
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
		<Figure
			file={33}
			caption="A diagram of fixed and variable intervals within the tetrachord." />
	</div>
	<div>
		<h5 class="rules-text">
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
		<Figure
			file={34}
			caption="A diagram of the 4 Fifths produced by two tetrachords." />
	</div>
	<div>
		<h5 class="ear-text">
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
		<Figure
			file={35}
			caption="A diagram of 2 tetrachords that belong to the Diatonic genus." />
	</div>
	<div>
		<h5 class="tetrachord-text">
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
		<Figure file={14} caption="A diagram of an Enharmonic tetrachord." />
	</div>
	<div>
		<h5 class="tetrachord-text">
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
		<Figure file={15} caption="A diagram of a Soft Chromatic tetrachord." />
		<p>
			The Hemiolic Chromatic is the unusually vague case from Book 1
			that's explained much more clearly here. It's pycnum is 1 and 1/2
			times the Enharmonic pycnum, which works out to 3/4 tones. This
			leaves us with a complement of 1 and 3/4 tones.
		</p>
		<Figure
			file={23}
			caption="A diagram of a Hemiolic Chromatic tetrachord." />
		<p>
			Lastly, the Tonic Chromatic is a series of 2 semi tones, leaving us
			with a complement of 1 and 1/2 tones.
		</p>
		<Figure
			file={24}
			caption="A diagram of a Tonic Chromatic tetrachord." />
	</div>
	<div>
		<h5 class="tetrachord-text">
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
		<Figure file={25} caption="A diagram of a Soft Diatonic tetrachord." />
		<p>
			The Sharp (or some resources call it Intense) Diatonic is a 1/2 tone
			followed by 2 whole tones. This tetrachord is most like the interval
			relationships we'll find in our everyday Diatonic scales.
		</p>
		<Figure file={26} caption="A diagram of a Sharp Diatonic tetrachord." />
	</div>
	<div>
		<h5 class="tetrachord-text">
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
		<Figure
			file={36}
			caption="A diagram of the 6 unique intervals between Hypate and Lichanus." />
		<p>
			Second, he talks about the disparity between the number of divisions
			of the tetrachord, and the number of Parhypate. While the
			Enharmonic, Soft Chromatic, and Hemiolic Chromatic all have a unique
			Parhypate, the rest of the tetrachord shades all have a semi tone
			parhypate. Even though he doesn't say this explicitly, I think this
			is a hint at why he doesn't call the semi tone a diesis.
		</p>
		<Figure
			file={37}
			caption="A diagram of the 4 unique intervals from Hypate to Parhypate." />
	</div>
	<div>
		<h5 class="rules-text">
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
		<h5 class="tetrachord-text">
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
		<Figure
			file={38}
			caption="A diagram of a melodic tetrachord using a Soft Chromatic Pahypate and a Tonic Chromatic Lichanus." />
		<p>
			The next example produces an unmelodic result because the interval
			from Parhypate to Lichanus is smallest: a semitone Parhypate (1/2
			tone) and a Lichanus of the Hemiolic Chromatic (1 and 1/2 tones).
		</p>
		<Figure
			file={39}
			caption="A diagram of an unmelodious tetrachord using a Hemiolic Chromatic Parhypate and a Soft Chromatic Lichanus." />
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
		<Figure
			file={40}
			caption="A diagram of an unmelodious tetrachord using a Hemiolic Chromatic Parhypate and a Soft Chromatic Lichanus." />
	</div>
	<div>
		<h5 class="rules-text">
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
		<Figure file={26} caption="A diagram of a Sharp Diatonic tetrachord." />
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
		<Figure
			file={41}
			caption="A diagram of a tetrachord with a middle interval that's larger than the rightmost interval: a Soft Chromatic Parhypate and an Intense Diatonic Lichanus." />
	</div>
	<div>
		<h5 class="voice-text">
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
		<Figure
			file={27}
			caption="A diagram of more than 3 consecutive quarter tones." />
		<p>
			I think we also can read into a bit of nuance about the word diesis
			here. Earlier, I was theorizing why semitones weren't referred to as
			dieses; however, if this adds additional context to the discussion,
			semi tones can be sung consecutively without issue, but smaller
			intervals can't (according to Aristoxenus). Therefore, I'm inclined
			to believe that semitones aren't a diesis.
		</p>
	</div>
	<div>
		<h5 class="rules-text">
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
			So, with this quote in mind, why does my calculator divide the tone
			into cents? First, the math is a little more intuitive with whole
			numbers, so calculating intervals in terms of cents is easier for me
			to visualize. Second, all of the limitations that Aristoxenus puts
			in place for minimum and maximum intervals are in place. All the
			calculator does is allow for cent divisions of the tone within the
			range. For example, the Parhypate can be between 1/4 (50 cents) and
			1/2 (100 cents) tone, inclusive. So a 13/50 (52 cents) is
			theoretically possible, but singing it would be basically
			indistinguishable from a 1/4 tone Parhypate.
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
	<div>
		<h5 class="rules-text">
			“Whatever be the genus, from whatever note one starts, if the melody
			moves in continuous progression either upwards or downwards, the
			fourth note in order from any note must for with it the concord of
			the Fourth, or the fifth note in order from it the concord of the
			Fifth. Any note that answers neither of these tests must be… out of
			tune...this then [is] a fundamental principle, the violation of
			which is destructive of harmony. ” (205)
		</h5>
		<p>
			Here, Aristoxenus elaborates about the significance of the Fourth
			(and the Fifth for the case of disjunct scales, I imagine) as an
			interval not just as an outline of the tetrachord, but as a means of
			both determining whether or not it's "in tune", or in other words,
			continuous.
		</p>
		<p></p>
		<Figure
			file={42}
			caption="A diagram of a double scales concordances between the upper and lower tetrachords, as well as an example of 2 similar intervals, 1 continuous, 1 not continuous (or transilient)." />
	</div>
	<div>
		<h5 class="questions-text">
			“It is quite possible that notes of a scale might form the
			above-mentioned concords with one another, and yet that the scale
			might be unmelodiously constructed.” (205)
		</h5>
		<p>
			This quote is an extension of the previous. It states that
			unmelodious scales can produce notes that are seemingly in tune due
			to having a concordant interval above it. It just so happens that
			this must be true of melodious scales, despite the fact that
			unemlodious scales can also produce the same result.
		</p>
		<Figure
			file={43}
			caption="a diagram of a seemingly melodious scale that's actually unmelodious." />
	</div>
	<div>
		<h5 class="rules-text">
			“If any two tetrachords are to belong to the same scale, one or
			other of the following conditions must be fulfilled…they must be in
			concord with each other, the notes of one forming some concord or
			other with the corresponding notes of the other…or they must both be
			in concord with a third tetrachord, with which they are alike
			continuous but in opposite directions.” (206)
		</h5>
		<p>
			This quote is a bit of a head scratcher for me due to the second
			condition, but before I try to tackle that, the first condition is
			fairly straightforward. Aristoxenus appears to be reiterating what
			he said in the previous quotes: that multiple tetrachords must have
			a concordant relationship between each set of corresponding notes.
			In other words, each note in a tetrachord also has a perfect Fourth
			or Fifth above or below it.
		</p>
		<Figure
			file={28}
			caption="A diagram of 2 linked tetrachords forming a double scale." />
		<p>
			The second scenario applies to scales containing three or more
			tetrachords. Saying that the tetrachords must be in concord with a
			third implies that the relationship of a perfect Fourth or Fifth
			still applies. The main difference is that because this third
			tetrachord is what I believe to be the middle tetrachord, due to the
			fact that the tetrachords are continuous in opposite directions.
			What confuses me the most is where exactly the middle tetrachord is
			placed in the scale. My instinct is to assume that it's placed no
			differently that any other linked tetrachords, either conjunct where
			it shares a note with the tetrachord below, or disjunct where it's
			separated by a tone.
		</p>
		<p>
			This could be worked out in a bunch of different ways, but a unique
			example would be 3 linked Diatonic tetrachords with no disjunctions,
			which would start on E and end on G a Tenth above. We know that the
			multiple scale this scenario forms is continuous and melodious
			because all of the notes form a perfect Fourth either above or below
			with the middle tetrachord.
		</p>
		<Figure
			file={44}
			caption="A diagram of 3 linked Diatonic tetrachords forming a conjunct triple scale." />
	</div>
	<div>
		<h5 class="ear-text">
			“...the ear is much more assured of the magnitudes of the concords
			that of the discords.” (206)
		</h5>
		<p>
			A bit of a break from the verbose theory with this quote. It talks
			about concords being easier to distinguish from one another than
			discords. Even though Aristoxenus states they're both infinite in
			Book 1, an infinite number of concords would imply a never ending
			process of adding octaves to the Fourth and Fifth. Because the
			Fourth and Fifth are really the only two distinct concords, in
			comparison to the many discords within the octave, they're easier to
			pick out.
		</p>
	</div>
	<div>
		<h5 class="rules-text">
			“...the most accurate method of ascertaining a discord is by the
			principle of concordance....one should take the Fourth above the
			given note, then descend a Fifth, then ascend a Fourth again, and
			finally descend another Fifth...to ascertain the discord in the
			other direction, the concords must be taken in the other direction.”
			(206)
		</h5>
		<p>
			Here, Aristoxenus introduces us to the "principle of concordance,"
			which looks quite similar to our circle of fifths. Ascending or
			descending a more than 1 Fourth or Fifth will eventually produce a
			series of discords. Aristoxenus contextualizes this by using it to
			identify the <span class="fst-italic">ditone</span> which is literally
			"2 tones," or a major Third. Even though his procedure stops at the ditone,
			you could still produce every discord down to the semi tone using this.
		</p>
		<p>
			For example: Fourth up, Fith down, Fourth up, Fifth down, starting
			on C works out to: C, F, Bb, Eb, Ab. Therefore, this process will
			always produce a ditone below the starting note.
		</p>
		<Figure
			file={45}
			caption="A diagram of the principle of concordance going down from C to A-flat." />
		<p>
			Conversely: Fifth up, Fourth down, Fifth up, Fourth down, starting
			on C works out to: C, G, D, A, E. Therefore, this process will
			always produce a ditone above the starting note.
		</p>
		<Figure
			file={46}
			caption="A diagram of the principle of concordance going up from C to E." />
	</div>
	<div>
		<h5 class="rules-text">
			“...if a discord be subtracted from a concord by the method of
			concordance, the remaining discord is thereby ascertained on the
			same principle.” (207)
		</h5>
		<p>
			Because Aristoxenus' is being vague about what "a discord" is
			implying here, we don't know if he has a particular interval in
			mind. The way I interpret this is that if you perform the operation
			from both directions, the result will give you the complement that
			adds up to the concord.
		</p>
		<p>
			For example, C to F is a Fourth. A ditone up from C is E (C, G, D,
			A, E). The remaining space in the Fourth is a semitone, E to F. A
			ditone down from F is Db (F, Bb, Eb, Ab, Db). The remaining space in
			the Fourth is also a semitone, Db to C.
		</p>
		<Figure
			file={47}
			caption="A diagram showing the same interval being the result of the method of concordance from the bottom and top of a perfect Fourth." />
		<p>
			Let's do the same with C to G, which is a Fifth. This time our
			discord will be Eb, which is a minor Third above C (C, F, Bb, Eb).
			The remaining space in the Fifth is a ditone, Eb to G. A minor Third
			down from G is E (G, D, A, E), which leaves a ditone worth of space
			between E and C.
		</p>
		<Figure
			file={48}
			caption="A diagram showing the same interval being the result of the method of concordance from the bottom and top of a perfect Fifth." />
	</div>
	<div>
		<h5 class="rules-text">
			“The surest method of verifying our original assumption that the
			Fourth consists of two and a half tones…let us find the discord of
			two tones above its lower note...and the same discord below its
			higher note...the complements will be equal, since they are
			remainders obtained by subtracting equal from equals...let us take
			the Fourth above the lower note of the higher ditone...and the
			Fourth below the higher note in the lower ditone...adjacent to each
			of the extreme notes of the scale…will be two complements in
			juxtaposition, which must be equal.” (207)
		</h5>
		<p>
			This is an elaboration of the process I went over above. Aristoxenus
			is using it to prove what we already know: that the Fourth is 2 and
			1/2 tones, and that the Fifth is a Fourth with an additional tone.
		</p>
		<p>
			To prove the Fourth's size, in this case we'll use C to F, we find
			the ditone above the lower note, which is E. Then we do the same for
			the ditone below the higher note, which is Db. The complements are
			equal, like we saw in the previous quote, C to E leaves a semi tone
			up to F, and F to Db leaves a semi tone down to C. 2 tones and 1/2
			tone.
		</p>
		<Figure
			file={49}
			caption="A diagram of the process Aristoxenus uses to prove the size of the Fourth." />
		<p>
			To prove the Fifth's size, we start by taking the Fourth above the
			bottom of the higher ditone: Db to Gb. Then the Fourth below the top
			of the lower ditone: E to B. If we make a continuous scale using the
			pitches, the result is a "Fifth" (or a diminished 6th if you spell
			it diatonically): B, C, Db, E, F, Gb. 1/2 + 1/2 + 1 and 1/2 + 1/2 +
			1/2 = 2 and 1/2 tones (a Fourth) + 1 tone.
		</p>
		<Figure
			file={50}
			caption="A diagram of the process Aristoxenus uses to prove the size of the Fifth." />
	</div>
	<div>
		<h5 class="rules-text">
			“...if the concord formed by the extreme notes…is greater than a
			Fourth, and less than an octave, it must be a Fifth.” (208)
		</h5>
		<p>
			To preface, this quote is accompanied by more explanation that
			justifies the point of these procedures, however this quote is
			really the best summary of what I believe Aristoxenus set out to
			achieve with the "principle of concords" in this context. This quote
			is essentially the end of Book 2. After doing all these procedures
			on my own, I didn't really expect the point to be about determining
			the size of the concords in question.
		</p>
		<p>
			Like he said in an earlier quote, concords are easier to distinguish
			by ear than discords because of their distinct size. Because
			concords are much more clearly defined in terms of their sizes, if a
			sum of intervals results in an interval you can identify as a
			concord, and it's bigger than a Fourth, but smaller than an octave,
			it must be a Fifth. Honestly, kind of a let down because I feel like
			he's stating the obvious. Of course a Fifth is in between a Fourth
			and and Octave, Aristoxenus. Even though I didn't have expectations
			about how the book was going to end, all of that grappling with
			Aristoxenus' writing ultimately led to a pretty underwhelming proof.
			Then again, this is a reminder that Aristoxenus didn't have the
			centuries of music theory and mathematics that we have today, so
			proving truths like this one might've been a huge deal back then.
		</p>
	</div>
</div>

<style>
	.ear-text {
		color: #85c1e9;
	}

	.voice-text {
		color: #f7dc6f;
	}

	.rules-text {
		color: #82e0aa;
	}

	.tetrachord-text {
		color: #d98880;
	}

	.questions-text {
		color: #e59866;
	}
</style>
