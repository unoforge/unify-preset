import type { BaseVariants } from "@/shortcuts/ui/types";
import type {
	RingBase,
} from ".";
import type { Components } from "@/shortcuts/types";

export type uiColorFormat = "rgb"|"hex"| "hsl"

export type VariantSizeBoth = {
	xs?: number | string;
	sm?: number | string;
	md?: number | string;
	lg?: number | string;
	xl?: number | string;
};

export type SharedFormConfig = {
	ringBase?: RingBase;
};



export type formOutline = {
	borderSize?: number | string;
};

/**
 * - appearance
 * - prefixDataStateVariant
 * - components
 * - baseUi
 */
export type presetUiConfig = {
	prefixDataStateVariant?: string;
	components?: Components;
	baseVariants?: BaseVariants,
	colorFormat?:uiColorFormat;
};
