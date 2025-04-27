import type { InputSizeVariant, RingBase } from "@/types";

export const defRingBase: RingBase = {
	size: 2,
	offset: 6,
};

export const InputSizes: InputSizeVariant = {
	"2xs": {
		px: 2,
		textSize: "xs",
		height:7.5
	},
	xs: {
		px: 2.5,
		textSize: "xs",
		height:7
	},
	sm: {
		px: 2.5,
		textSize: "sm",
		height:8
	},
	md: {
		px: 3,
		textSize: "sm",
		height:9
	},
	lg: {
		px: 4,
		textSize: "sm",
		height:10
	},
	xl: {
		px: 5,
		textSize: "base",
		height:12
	},
}