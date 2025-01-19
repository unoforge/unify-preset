import type {
	TextSize,
	RingBase,
} from "@/types";



export type BtnSizeBase = {
	height?: number | string;
	px?: number | string;
	textSize?: TextSize;
};

export type BtnSizes = {
	xs?: BtnSizeBase;
	sm?: BtnSizeBase;
	md?: BtnSizeBase;
	lg?: BtnSizeBase;
	xl?: BtnSizeBase;
};

export type BtnIconBase = { size?: number | string; textSize?: TextSize };
export type BtnIconSizes = {
	xs?: BtnIconBase;
	sm?: BtnIconBase;
	md?: BtnIconBase;
	lg?: BtnIconBase;
	xl?: BtnIconBase;
};

export type Button = {
	ringBase?: RingBase;
	sizes?: BtnSizes;
	iconSizes?: BtnIconSizes;
};