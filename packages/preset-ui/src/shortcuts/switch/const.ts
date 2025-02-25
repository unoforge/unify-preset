
// Extra Small (xs)
const xs = {
	width: '2.25rem',
	height: '1.25rem',
	knob: {
		size: '1rem',
		left: '0.125rem',        // initial position
		top: '0.125rem',
		checkedLeft: '1.125rem'  // position when checked
	}
};

// Small (sm)
const sm = {
	width: '2.5rem',
	height: '1.5rem',
	knob: {
		// The class "before:size-5" in Tailwind usually corresponds to 1.25rem
		size: '1.25rem',
		left: '0.125rem',
		top: '0.125rem',
		checkedLeft: '1.125rem'
	}
};

// Medium (md)
const md = {
	width: '3rem',
	height: '1.75rem',
	knob: {
		size: '1.25rem',
		left: '0.25rem',
		top: '0.25rem',
		checkedLeft: '1.5rem'
	}
};

// Large (lg)
const lg = {
	width: '3.5rem',
	height: '2rem',
	knob: {
		size: '1.5rem',
		left: '0.25rem',
		top: '0.25rem',
		checkedLeft: '1.75rem'
	}
};

export const switchSizeVariants = {
	xs,
	sm,
	md,
	lg,
};

