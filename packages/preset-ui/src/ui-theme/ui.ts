import { getBrice } from "@/colors/genColor";
import { themeColors } from "@/colors/getPreconfigColors";
import { uiColorFormat } from "@/types";
import type { Theme } from "@unocss/preset-uno";

export const getUiTheme = (colorMode: uiColorFormat, colorPrefix?: string) => {
    const colors = themeColors(colorMode, colorPrefix);
    const theme: Theme = {
        colors: {
            bg: {
                DEFAULT: getBrice(colorMode, "bg", "none"),
                light: getBrice(colorMode, "bg-light", "none"),
                lighter: getBrice(colorMode, "bg-lighter", "none"),
                high: getBrice(colorMode, "bg-high", "none"),
                higher: getBrice(colorMode, "bg-higher", "none"),
            },
            fg: {
                DEFAULT: getBrice(colorMode, "fg", "none"),
                title: getBrice(colorMode, "fg-title", "none"),
                subtitle: getBrice(colorMode, "fg-subtitle", "none"),
                subtext: getBrice(colorMode, "fg-subtext", "none"),
            },
            border: {
                DEFAULT: getBrice(colorMode, "border", "none"),
                light: getBrice(colorMode, "border-light", "none"),
                lighter: getBrice(colorMode, "border-lighter", "none"),
                high: getBrice(colorMode, "border-high", "none"),
                higher: getBrice(colorMode, "border-higher", "none"),
            },
            dark: getBrice(colorMode, "gray-950", colorPrefix),
            white: getBrice(colorMode, "white", colorPrefix),
            ...colors
        },
    };
    return theme
}