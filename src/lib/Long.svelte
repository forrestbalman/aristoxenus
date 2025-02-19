<script>
	let { value = $bindable() } = $props();
</script>

<div class="intro-bio">
	<h3>A brief intro to Aristoxenus</h3>
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
		In comparison to Greek theorists that preceded him, Aristoxenus wrote
		about theory from a "practicality-first" perspective. By no means does
		he entirely do away with the mathematical principles that informed his
		practice; however, there seems to be a stronger emphasis on whether or
		not any theoretical pitch material is pragmatic to the practicing
		musician.
	</p>
</div>
<div id="intro-theory">
	<h3>An intro to Aristoxenus' theory of tetrachords</h3>
	<div id="excerpt">
		<p>
			This generator/calculator is inspired by a particular section from <span
				class="fst-italic">Elementa Harmonica</span>
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
			some key terms as they are referenced in and around the exceprt.
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
			like the triads of Western music theory. Where major, minor, diminished,
			and augmented are all different combinations of Major and Minor Thirds,
			the genera of tetrachords describe ranges of different intervals found
			in a tetrachord.
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
	</div>
	<div id="scale-degrees"></div>
	<div id="lichanus-to-mese-rules"></div>
	<div id="hypate-to-parhypate-rules"></div>
	<div id="the-six-tetrachords"></div>
	<div id="shading-and-naming"></div>
</div>
