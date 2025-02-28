import { centMappings, approximateFraction } from "$lib/ratio.js";

export function fraction(cents) {
	let tones = Math.floor(cents / 200);
	let centsRemainder = centMappings[cents % 200];

	if (centsRemainder > 0) {
		const { numerator, denominator } = approximateFraction(centsRemainder);
		const fractionString = `${numerator}/${denominator}`;

		return tones > 0
			? `${tones} + ${fractionString} tones`
			: `${fractionString} tone`;
	} else {
		return tones > 1 ? `${tones} tones` : `${tones} tone`;
	}
}
