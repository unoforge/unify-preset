import { UiBtnOutline } from "@/types/ui-t";
import type {
	BtnGhostOrSoft,
	FlexiBtnShade,
	BtnFlexiVariants,
	BtnSoftVariants,
	BtnGhostVariants,
	BtnOutlineVariants,
	UiButton,
	SolidBtnShade,
	BtnSolidVariants,
	BtnCnVariants,
	CnBtn,
} from "@/ui/type";


const ghostConfig: BtnGhostOrSoft = {
	hoverBgShade: "100",
	hoverBgOpacity: 50,
	pressBgShade: "100",
	pressOpacity: 70,
	textShade: "600",
	textHover: "700",
	dark: {
		hoverBgShade: "600",
		hoverBgOpacity: 30,
		pressOpacity: 25,
		pressBgShade: "600",
		textShade: "300",
		textHover: "200"
	},
};
const softConfig: BtnGhostOrSoft = {
	bgShade: "50",
	hoverBgShade: "400",
	hoverBgOpacity: 60,
	pressOpacity: 40,
	pressBgShade: "400",
	textShade: "600",
	textHover: "700",
	dark: {
		bgShade: "600",
		bgOpacity: 15,
		hoverBgShade: "600",
		hoverBgOpacity: 30,
		pressOpacity: 25,
		pressBgShade: "600",
		textShade: "300",
		textHover: "200"
	},
};
const softGrayConfig: BtnGhostOrSoft = {
	bgShade: "50",
	hoverBgShade: "200",
	hoverBgOpacity: 75,
	pressBgShade: "200",
	pressOpacity: 80,
	textShade: "800",
	textHover: "900",
	dark: {
		bgShade: "600",
		bgOpacity: 20,
		hoverBgShade: "600",
		hoverBgOpacity: 40,
		pressBgShade: "600",
		pressOpacity: 25,
		textShade: "100",
		textHover: "50",
	},
};
const ghostGrayCongif: BtnGhostOrSoft = {
	hoverBgShade: "200",
	hoverBgOpacity: 40,
	pressBgShade: "200",
	pressOpacity: 75,
	textShade: "800",
	textHover: "900",
	dark: {
		hoverBgShade: "800",
		hoverBgOpacity: 40,
		pressBgShade: "900",
		pressOpacity: 20,
		textShade: "100",
		textHover: "50"
	},
};


const btnOutline: UiBtnOutline = {
	borderSize: 1,
	borderShade: "200",
	borderOpacity: 100,
	textShade: "800",
	bg: "50",
	bgHover: "100",
	dark: {
		borderShade: "500",
		borderOpacity: 30,
		textShade: "300",
		bg: "500",
		bgOpacity: 5,
		bgHover: "500",
		bgHoverOpacity: 10,
	}
};

const btnGrayOutline: UiBtnOutline = btnOutline


const solidShade: SolidBtnShade = {
	bgShade: "600",
	bgHoverShade: "700",
	bgPressShade: "800",
	topShadow: "500",
	bottomShadow: "700",
	topShadowHover: "600",
	bottomShadowHover: "800",
};


const solidWhite: SolidBtnShade = {
	bgShade: "white",
	bgHoverShade: "100",
	bgPressShade: "50",
	topShadow: "50",
	bottomShadow: "100",
	topShadowHover: "200",
	bottomShadowHover: "300",
	dark: {
		bgShade: "900",
		bgHoverShade: "800",
		bgPressShade: "700",
		topShadow: "900",
		bottomShadow: "800",
		topShadowHover: "700",
		bottomShadowHover: "700",
	}
};

const solidNeutral: SolidBtnShade = {
	bgShade: "900",
	bgHoverShade: "950",
	bgPressShade: "900",
	topShadow: "800",
	bottomShadow: "700",
	topShadowHover: "800",
	bottomShadowHover: "900",
	dark: {
		bgShade: "100",
		bgHoverShade: "white",
		bgPressShade: "200",
		topShadow: "200",
		bottomShadow: "100",
		topShadowHover: "300",
		bottomShadowHover: "200",
	}
};


const flexiShade: FlexiBtnShade = {
	bgShade: "600",
	hoverBgShade: "700",
	activeBgShade: "800",
	shadowShadeA: "700",
	shadowShadeB: "500",
	shadowShadeC: "400",
	activeShadowShadeA: "900",
	activeShadowShadeB: "700",
	activeShadowShadeC: "600",
	dark: {
		bgShade: "500",
		hoverBgShade: "600",
		activeBgShade: "500",
		shadowShadeA: "700",
		shadowShadeB: "600",
		shadowShadeC: "400",
		activeShadowShadeA: "600",
		activeShadowShadeB: "500",
		activeShadowShadeC: "400"
	}
};

const whiteFlexiShade: FlexiBtnShade = {
	bgShade: "white",
	hoverBgShade: "100",
	activeBgShade: "50",
	shadowShadeA: "300",
	shadowShadeB: "200",
	shadowShadeC: "50",
	activeShadowShadeA: "400",
	activeShadowShadeB: "300",
	activeShadowShadeC: "500",
	dark: {
		bgShade: "900",
		hoverBgShade: "800",
		activeBgShade: "900",
		shadowShadeA: "800",
		shadowShadeB: "700",
		shadowShadeC: "800",
		activeShadowShadeA: "700",
		activeShadowShadeB: "800",
		activeShadowShadeC: "900"
	}
};

const neutralFlexiShade: FlexiBtnShade = {
	bgShade: "900",
	hoverBgShade: "800",
	activeBgShade: "950",
	shadowShadeA: "700",
	shadowShadeB: "500",
	shadowShadeC: "400",
	activeShadowShadeA: "700",
	activeShadowShadeB: "600",
	activeShadowShadeC: "500",
	dark: {
		bgShade: "white",
		hoverBgShade: "100",
		activeBgShade: "50",
		shadowShadeA: "100",
		shadowShadeB: "200",
		shadowShadeC: "50",
		activeShadowShadeA: "200",
		activeShadowShadeB: "300",
		activeShadowShadeC: "50"
	}
};
const flexiGrayShade: FlexiBtnShade = {
	bgShade: "600",
	hoverBgShade: "700",
	activeBgShade: "800",
	shadowShadeA: "700",
	shadowShadeB: "500",
	shadowShadeC: "400",
	activeShadowShadeA: "900",
	activeShadowShadeB: "700",
	activeShadowShadeC: "600",
	dark: {
		bgShade: "500",
		hoverBgShade: "600",
		activeBgShade: "700",
		shadowShadeA: "600",
		shadowShadeB: "400",
		shadowShadeC: "500",
		activeShadowShadeA: "600",
		activeShadowShadeB: "500",
		activeShadowShadeC: "400"
	}
};

const neutralSoftConfig: BtnGhostOrSoft = {
	bgShade: "300",
	bgOpacity: 60,
	hoverBgShade: "950",
	hoverBgOpacity: 100,
	pressBgShade: "900",
	pressOpacity: 100,
	textShade: "900",
	textHover: "white",
	dark: {
		bgShade: "700",
		bgOpacity: 60,
		hoverBgShade: "white",
		hoverBgOpacity: 100,
		pressBgShade: "200",
		pressOpacity: 100,
		textShade: "100",
		textHover: "950"
	}
};

const ghostNeutralConfig: BtnGhostOrSoft = {
	hoverBgShade: "950",
	hoverBgOpacity: 100,
	pressBgShade: "900",
	pressOpacity: 100,
	textShade: "900",
	textHover: "white",
	dark: {
		hoverBgShade: "white",
		hoverBgOpacity: 100,
		pressBgShade: "200",
		pressOpacity: 100,
		textShade: "100",
		textHover: "950"
	}
};

const btnCnDefault: CnBtn = {
	bgColor: "600",
	textColor: "white",
	hoverBgColor: "600",
	hoverBgOpacity: 90
}

const btnCnNeutral: CnBtn = {
	bgColor: "900",
	textColor: "white",
	hoverBgColor: "900",
	hoverBgOpacity: 90,
	dark: {
		bgColor: "white",
		textColor: "900",
		hoverBgColor: "100",
		hoverBgOpacity: 90
	}
}

const solidVariants: BtnSolidVariants = {
	base: {
		primary: solidShade,
		secondary: solidShade,
		accent: solidShade,
		info: solidShade,
		warning: solidShade,
		danger: solidShade,
		success: solidShade,
		gray: solidShade,
		neutral: solidNeutral,
		white: solidWhite
	},
	global: solidShade
}
const flexiVariants: BtnFlexiVariants = {
	base: {
		primary: flexiShade,
		secondary: flexiShade,
		accent: flexiShade,
		info: flexiShade,
		warning: flexiShade,
		danger: flexiShade,
		success: flexiShade,
		gray: flexiGrayShade,
		white: whiteFlexiShade,
		neutral: neutralFlexiShade
	},
	global: flexiShade
}
const softVariants: BtnSoftVariants = {
	base: {
		primary: softConfig,
		secondary: softConfig,
		accent: softConfig,
		info: softConfig,
		warning: softConfig,
		danger: softConfig,
		success: softConfig,
		gray: softGrayConfig,
		neutral: neutralSoftConfig
	},
	global: softConfig
}
const ghostVariants: BtnGhostVariants = {
	base: {
		primary: ghostConfig,
		secondary: ghostConfig,
		accent: ghostConfig,
		info: ghostConfig,
		warning: ghostConfig,
		danger: ghostConfig,
		success: ghostConfig,
		gray: ghostGrayCongif,
		neutral: ghostNeutralConfig
	},
	global: ghostConfig
}

const btnNeutralOutline: UiBtnOutline = {
	borderSize: 1,
	borderShade: "300",
	textShade: "800",
	bg: "100",
	bgHover: "200",
	bgHoverOpacity: 60,
	dark: {
		borderShade: "white",
		textShade: "white",
		bg: "500",
		bgOpacity: 5,
		bgHover: "500",
		bgHoverOpacity: 10,
	}
};

const outlineVariants: BtnOutlineVariants = {
	base: {
		primary: btnOutline,
		secondary: btnOutline,
		accent: btnOutline,
		info: btnOutline,
		warning: btnOutline,
		danger: btnOutline,
		success: btnOutline,
		gray: btnGrayOutline,
		neutral: btnNeutralOutline
	},
	global: btnOutline
}

const btnCnVariant: BtnCnVariants = {
	base: {
		primary: btnCnDefault,
		secondary: btnCnDefault,
		accent: btnCnDefault,
		info: btnCnDefault,
		warning: btnCnDefault,
		danger: btnCnDefault,
		success: btnCnDefault,
		gray: btnCnDefault,
		neutral: btnCnNeutral
	},
	global: btnCnDefault
}



export const btnConfig: UiButton = {
	solidVariants,
	flexiVariants,
	softVariants,
	ghostVariants,
	outlineVariants,
	cnVariants: btnCnVariant,
};
