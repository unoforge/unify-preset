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
                surface: getBrice(colorMode, "bg-surface", "none"),
                subtle: getBrice(colorMode, "bg-subtle", "none"),
                muted: getBrice(colorMode, "bg-muted", "none"),
                'surface-elevated': getBrice(colorMode, "bg-surface-elevated", "none"),
                input:getBrice(colorMode, "bg-input", "none"),
                'input-gray':getBrice(colorMode, "bg-input-gray", "none"),
            },
            fg: {
                DEFAULT: getBrice(colorMode, "fg", "none"),
                title: getBrice(colorMode, "fg-title", "none"),
                subtitle: getBrice(colorMode, "fg-subtitle", "none"),
                muted: getBrice(colorMode, "fg-muted", "none"),
                input:getBrice(colorMode, "fg-input", "none"),
            },
            border: {
                DEFAULT: getBrice(colorMode, "border", "none"),
                light: getBrice(colorMode, "border-light", "none"),
                subtle: getBrice(colorMode, "border-subtle", "none"),
                strong: getBrice(colorMode, "border-strong", "none"),
                emphasis: getBrice(colorMode, "border-emphasis", "none"),
                input: getBrice(colorMode, "border-input", "none"),
            },
            card:{
                DEFAULT: getBrice(colorMode, "card", "none"),
                gray: getBrice(colorMode, "card-gray", "none"),
            },
            popover:{
                DEFAULT: getBrice(colorMode, "popover", "none"),
                gray: getBrice(colorMode, "popover-gray", "none"),
            },

            dark: getBrice(colorMode, "gray-950", colorPrefix),
            white: getBrice(colorMode, "white", colorPrefix),
            ...colors
        }
    };
    return theme
}