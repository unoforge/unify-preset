import type { ElSizeVariants, RingBase } from "@/types";

export const defRingBase: RingBase = {
	size: 2,
	offset: 6,
};

export const InputSizes: ElSizeVariants = {
	"2xs": {
		px: 2,
		py: 1,
		textSize: "xs",
	},
	xs: {
		px: 2.5,
		py: 1.5,
		textSize: "xs",
	},
	sm: {
		px: 2.5,
		py: 1.5,
		textSize: "sm",
	},
	md: {
		px: 3,
		py: 2,
		textSize: "sm",
	},
	lg: {
		px: 3.5,
		py: 2.5,
		textSize: "sm",
	},
	xl: {
		px: 3.5,
		py: 2.5,
		textSize: "base",
	},
}