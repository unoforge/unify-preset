import { uiColorFormat } from "@/types"
import { genColorValue } from "./genColor"
import { ColorShade } from "@/types/ui-t"

export const themeColors = (colorMode: uiColorFormat,  colorPrefix?: string) => {
    return {
        primary: genColorValue("primary", colorMode,  colorPrefix),
        secondary: genColorValue("secondary", colorMode,  colorPrefix),
        accent: genColorValue("accent", colorMode,  colorPrefix),
        success: genColorValue("success", colorMode,  colorPrefix),
        warning: genColorValue("warning", colorMode,  colorPrefix),
        info: genColorValue("info", colorMode,  colorPrefix),
        danger: genColorValue("danger", colorMode,  colorPrefix),
        gray: genColorValue("gray", colorMode,  colorPrefix),
    }
}