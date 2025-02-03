import type { RingBase, ElSizeVariants, CardSizeVariant, TextTypos, } from "@/types";


export const uiSizeVariants: ElSizeVariants = {
	xs: { py: 0.5, px: 1, textSize: "xs" },
	sm: { py: 0.65, px: 1.5, textSize: "xs" },
	md: { py: 1, px: 2, textSize: "sm" },
	lg: { py: 1.115, px: 2.5, textSize: "base" },
	xl: { py: 1.3, px: 3, textSize: "base" },
}

export const cardSizeVariants: CardSizeVariant = {
	xs: { padding: 2.5, textSize: "xs" },
	sm: { padding: 3, textSize: "sm" },
	md: { padding: 4, textSize: "base" },
	lg: { padding: 6, textSize: "base" },
	xl: { padding: 8, textSize: "base" },
}




const ringBase: RingBase = {
	size: 2,
	offset: 2,
};


const textTypo: TextTypos = {
	"x-body": "text-10px",
	"xs-body": "text-xs",
	body: "text-base",
	"x-title": "text-lg sm-text-xl md-text-2xl",
	title: "text-3xl sm-text-4xl/snug lg-text-5xl",
	"l-title": "text-3xl/tight md-text-4xl/tight xl-text-5xl/tight",
	"xl-title": "text-3xl/tight lg-text-4xl/tight xl-text-5xl/tight",
	'2xl-title': "text-3xl/tight md-text-4xl/tight xl-text-6xl/tight"
}

export const helperDefaultValues = {
	ringBase,
	textTypo
};