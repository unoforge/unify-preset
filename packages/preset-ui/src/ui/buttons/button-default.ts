import { UiFormOutline } from "@/types/ui-t";
import type {
	BtnGhostOrSoft,
	FlexiBtnShade,
	BtnFlexiVariants,
	BtnSoftVariants,
	BtnGhostVariants,
	BtnOutlineVariants,
	UiButton,
	SolidBtnShade,
	BtnSolidVariants
} from "@/ui/type";

const ghostConfig: BtnGhostOrSoft = {
	hoverBgShade: "100",
	hoverBgOpacity: 50,
	pressBgShade: "100",
	pressOpacity: 70,
	textShade: "600",
	dark: {
		hoverBgShade: "600",
		hoverBgOpacity: 30,
		pressOpacity: 25,
		pressBgShade: "600",
		textShade: "300",
	},
};
const ghostGrayCongif: BtnGhostOrSoft = {
	hoverBgShade: "200",
	hoverBgOpacity: 40,
	pressBgShade: "200",
	pressOpacity: 75,
	textShade: "800",
	dark: {
		hoverBgShade: "800",
		hoverBgOpacity: 40,
		pressBgShade: "900",
		pressOpacity: 20,
		textShade: "100",
	},
};

const softConfig: BtnGhostOrSoft = {
	bgShade: "50",
	hoverBgShade: "400",
	hoverBgOpacity: 60,
	pressOpacity: 40,
	pressBgShade: "400",
	textShade: "600",
	dark: {
		bgShade: "600",
		bgOpacity: 15,
		hoverBgShade: "600",
		hoverBgOpacity: 30,
		pressOpacity: 25,
		pressBgShade: "600",
		textShade: "300",
	},
};
const softGrayConfig: BtnGhostOrSoft = {
	bgShade: "50",
	hoverBgShade: "200",
	hoverBgOpacity: 75,
	pressBgShade: "200",
	pressOpacity: 80,
	textShade: "800",
	dark: {
		bgShade: "600",
		bgOpacity: 20,
		hoverBgShade: "600",
		hoverBgOpacity: 40,
		pressBgShade: "600",
		pressOpacity: 25,
		textShade: "100",
	},
};


const btnOutline: UiFormOutline = {
	borderSize: 1,
	borderShade: "300",
	hoverBorderShade: "400",
	activeBorderShade: "300",
	textShade: "800",
	hoverTextShade: "900",
	dark: {
		borderShade: "400",
		hoverBorderShade: "300",
		activeBorderShade: "500",
		textShade: "300",
		hoverTextShade: "400",
	},
};

const btnGrayOutline: UiFormOutline = {
	borderSize: 1,
	borderShade: "500",
	hoverBorderShade: "600",
	activeBorderShade: "700",
	textShade: "800",
	hoverTextShade: "900",
	dark: {
		borderShade: "500",
		hoverBorderShade: "600",
		activeBorderShade: "700",
		textShade: "300",
		hoverTextShade: "400",
	},
};


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
	hoverBgShade: "400",
	hoverBgOpacity: 70,
	pressBgShade: "300",
	pressOpacity: 40,
	textShade: "900",
	dark: {
		bgShade: "700",
		bgOpacity: 60,
		hoverBgShade: "600",
		hoverBgOpacity: 70,
		pressBgShade: "700",
		pressOpacity: 40,
		textShade: "100"
	}
};

const ghostNeutralConfig: BtnGhostOrSoft = {
	hoverBgShade: "400",
	hoverBgOpacity: 70,
	pressBgShade: "300",
	pressOpacity: 40,
	textShade: "900",
	dark: {
		hoverBgShade: "600",
		hoverBgOpacity: 70,
		pressBgShade: "700",
		pressOpacity: 40,
		textShade: "100"
	}
};

const solidVariants:BtnSolidVariants = {
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

const btnNeutralOutline: UiFormOutline = {
	borderSize: 1,
	borderShade: "800",
	hoverBorderShade: "900",
	activeBorderShade: "900",
	textShade: "700",
	hoverTextShade: "700",
	dark: {
		borderShade: "400",
		hoverBorderShade: "500",
		activeBorderShade: "500",
		textShade: "300",
		hoverTextShade: "400"
	}
};
const btnWhiteOutline: UiFormOutline = {
	borderSize: 1,
	borderShade: "200",
	hoverBorderShade: "300",
	activeBorderShade: "300",
	textShade: "700",
	hoverTextShade: "900",
	dark: {
		borderShade: "200",
		hoverBorderShade: "300",
		activeBorderShade: "300",
		textShade: "700",
		hoverTextShade: "900"
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
		white: btnWhiteOutline,
		neutral: btnNeutralOutline
	},
	global: btnOutline
}

export const btnConfig: UiButton = {
	solidVariants,
	flexiVariants,
	softVariants,
	ghostVariants,
	outlineVariants,
};
