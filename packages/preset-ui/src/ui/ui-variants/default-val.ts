import { UiCommon, UiOutline, UiSolid, UiSubtle } from "../type";



const defaultSolidShades: UiSolid = { bgShade: "600", textColor: "white", dark: { bgShade: "500", textColor: "white" } };

const defaultSolidGrayShades: UiSolid = { bgShade: "100", textColor: "gray-700", dark: { bgShade: "900", textColor: "gray-300" } };

const defaultNeutralSolidShades: UiSolid = { bgShade: "900", textColor: "white", dark: { bgShade: "white", textColor: "gray-900" } }


const defaultSubtleShades: UiSubtle = {
    bgShade: "50",
    opacity: 100,
    borderShade: "300",
    borderOpacity: 20,
    textShade: "700",
    dark: {
        bgShade: "600",
        opacity: 15,
        borderShade: "500",
        borderOpacity: 40,
        textShade: "300",
    }
}

const defaultSubtleNeutral: UiSubtle = {
    bgShade: "950",
    opacity: 10,
    borderShade: "900",
    borderOpacity: 70,
    textShade: "900",
    dark: {
        bgShade: "50",
        opacity:20,
        borderShade: "800",
        borderOpacity: 60,
        textShade: "white",
    }
}
const defaultSubtleGray: UiSubtle = {
    bgShade: "50",
    opacity: 100,
    borderShade: "400",
    borderOpacity: 30,
    textShade: "800",
    dark: {
        bgShade: "600",
        opacity: 40,
        borderShade: "500",
        borderOpacity: 40,
        textShade: "300",
    },
};



const defaultOutlineELement: UiOutline = {
    borderShade: "600", textShade: "600", dark: { borderShade: "500", textShade: "500" },
};

const defaultOutlineGrayELement: UiOutline = {
    borderShade: "200", textShade: "700", dark: { borderShade: "800", textShade: "300" },
};

const defaultOutlineNeutral: UiOutline = {
    borderShade: "800", textShade: "700", dark: { borderShade: "400", textShade: "300" },
};






export const defaultUiConfig: UiCommon = {
    uiVariants: {
        solid: {
            base: {
                neutral: defaultNeutralSolidShades,
                gray: defaultSolidGrayShades
            },
            global: defaultSolidShades
        },
        subtle: {
            base: {
                gray: defaultSubtleGray,
                neutral: defaultSubtleNeutral
            },
            global: defaultSubtleShades
        },
        soft: {
            base: {
                gray: defaultSubtleGray,
                neutral: defaultSubtleNeutral
            },
            global: defaultSubtleShades
        },
        outline: {
            base: {
                gray: defaultOutlineGrayELement,
                neutral: defaultOutlineNeutral
            },
            global: defaultOutlineELement
        }
    }
}