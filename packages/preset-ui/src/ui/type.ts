import { ColorShade, BaseVariant, UiBtnOutline } from "@/types/ui-t";


export type PredefinedValues = 'primary' | "secondary" | "accent" | "danger" | "warning" | "success" | "info" | "neutral" | "white" | "gray" | string;

export type ExcludedVariants = "all" | "none" | PredefinedValues[]
export type ThingsToExclude = {
	btn?: {
		solid?: ExcludedVariants,
		flexi?: ExcludedVariants,
		soft?: ExcludedVariants,
		ghost?: ExcludedVariants,
		outlined?: ExcludedVariants,
		cn?: ExcludedVariants,
	} | "all" | "none",
	ui?: {
		solid?: ExcludedVariants,
		outline?: ExcludedVariants,
		soft?: ExcludedVariants,
		subtle?: ExcludedVariants
	}
};

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
	textColor: string;
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
	textHover?: ColorShade
};

export type BtnGhostOrSoft = Btn_GhostSoftBase & {
	dark?: Btn_GhostSoftBase;
};



export type SoliddBtnShadeBase = {
	bgShade: ColorShade;
	bgHoverShade: ColorShade;
	bgPressShade: ColorShade;
	topShadow: ColorShade;
	bottomShadow: ColorShade;
	topShadowHover: ColorShade;
	bottomShadowHover: ColorShade;
}

export type SolidBtnShade = SoliddBtnShadeBase & {
	dark?: SoliddBtnShadeBase;
}
export type FlexiBtnShadeBase = {
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
export type FlexiBtnShade = FlexiBtnShadeBase & {
	dark?: FlexiBtnShadeBase;
};

export type CnBtnBase = {
	bgColor: ColorShade,
	textColor: string;
	hoverBgColor: string;
	hoverBgOpacity?:number,
}
export type CnBtn = CnBtnBase & {
	dark?: CnBtnBase;
}



export type BtnSolidVariants = BaseVariant<SolidBtnShade>;
export type BtnFlexiVariants = BaseVariant<FlexiBtnShade>;
export type BtnSoftVariants = BaseVariant<BtnGhostOrSoft>;
export type BtnGhostVariants = BaseVariant<BtnGhostOrSoft>;
export type BtnOutlineVariants = BaseVariant<UiBtnOutline>
export type BtnCnVariants = BaseVariant<CnBtn>

export type UiButton = {
	solidVariants?: BtnSolidVariants
	flexiVariants?: BtnFlexiVariants,
	outlineVariants?: BtnOutlineVariants,
	softVariants?: BtnSoftVariants,
	ghostVariants?: BtnGhostVariants,
	cnVariants?: BtnCnVariants,
};

export type UiCommon = {
	uiVariants?: {
		solid?: UiSolidVariants,
		soft?: UiSoftVariants,
		outline?: UiOutlineVariants,
		subtle?: UiSubtleVariants
	},
}

export type UiVariants = {
	solid: UiSolidVariants,
	soft: UiSoftVariants,
	outline: UiOutlineVariants,
	subtle: UiSubtleVariants
}