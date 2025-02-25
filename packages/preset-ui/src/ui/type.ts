import { ColorShade, BaseVariant, UiFormOutline } from "@/types/ui-t";


export type UiSoftBase = {
	textShade: ColorShade;
	bgShade: ColorShade;
	opacity: number;
};

export type UiSoft = UiSoftBase & {
	dark?: UiSoftBase;
};

export type UiSolidBase = {
	bgShade: ColorShade;
	textShade: ColorShade;
};

export type UiSolid = UiSolidBase & {
	dark?: UiSolidBase;
};

export type UiOutlineBase = {
	textShade: ColorShade;
	borderShade: ColorShade;
};

export type UiOutline = UiOutlineBase & {
	dark?: UiOutlineBase;
};

export type UiSubtleBase = {
	textShade: ColorShade;
	bgShade: ColorShade;
	opacity: number;
	borderShade: ColorShade;
	borderOpacity: number;
};

export type UiSubtle = UiSubtleBase & {
	dark?: UiSubtleBase;
};

export type UiSoftVariants = BaseVariant<UiSoft>;
export type UiSolidVariants = BaseVariant<UiSolid>;
export type UiOutlineVariants = BaseVariant<UiOutline>;
export type UiSubtleVariants = BaseVariant<UiSubtle>;




export type Btn_GhostSoftBase = {
	bgShade?: ColorShade;
	bgOpacity?: number;
	hoverBgOpacity: number;
	hoverBgShade: ColorShade;
	pressBgShade: ColorShade;
	pressOpacity: number;
	textShade: ColorShade;
};

export type BtnGhostOrSoft = Btn_GhostSoftBase & {
	dark?: Btn_GhostSoftBase;
};

export type SolidBtnShadeBase = {
	bgShade: ColorShade;
	hoverBgShade: ColorShade;
	activeBgShade: ColorShade;
	shadowShadeA: ColorShade;
	shadowShadeB: ColorShade;
	shadowShadeC: ColorShade;
	activeShadowShadeA: ColorShade;
	activeShadowShadeB: ColorShade;
	activeShadowShadeC: ColorShade;
};
export type SolidBtnShade = SolidBtnShadeBase & {
	dark?: SolidBtnShadeBase;
};

export type BtnSolidVariants = BaseVariant<SolidBtnShade>;
export type BtnSoftVariants = BaseVariant<BtnGhostOrSoft>;
export type BtnGhostVariants = BaseVariant<BtnGhostOrSoft>;
export type BtnOutlineVariants = BaseVariant<UiFormOutline>


export type UiButton = {
	solidVariants?: BtnSolidVariants,
	outlineVariants?: BtnOutlineVariants,
	softVariants?: BtnSoftVariants,
	ghostVariants?: BtnGhostVariants
};

export type UiVariants = {
	solid: UiSolidVariants,
	soft: UiSoftVariants,
	outline: UiOutlineVariants,
	subtle: UiSubtleVariants
}