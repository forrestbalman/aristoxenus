export let tetrachord = $state({
	total: 500,
	parhypate: {
		storage: 50,
		value: 50,
	},
	lichanus: {
		storage: 100,
		value: 100,
	},
	title: {
		diesis: "Enharmonic",
		genus: "Enharmonic",
		pycnum: true,
		value: null,
		unmelodic: false,
	},
	frequencies: {
		hypate: 440,
		parhypate: 440 * Math.pow(2, 50 / 1200),
		lichanus: 440 * Math.pow(2, 100 / 1200),
		mese: 440 * Math.pow(2, 500 / 1200),
	},
	error: null,
	unmelodic: false,
	light: null,
});

export const presets = {
	Enharmonic: [50, 100],
	"Soft Chromatic": [66, 133],
	"Hemiolic Chromatic": [75, 150],
	"Tonic (Intense) Chromatic": [100, 200],
	"Soft Diatonic": [100, 250],
	"Sharp (Intense) Diatonic": [100, 300],
	"Unnamed Chromatic": [66, 200],
	"Diatonic with Tonic Chromatic Diesis": [66, 300],
	"Diatonic with Hemiolic Chromatic Diesis": [75, 300],
	"Rejected Chromatic": [100, 150],
	"Unmelodic Chromatic": [75, 133],
};
