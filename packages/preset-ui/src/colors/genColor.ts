import { uiColorFormat } from "@/types";

export const getBrice = (colorMode: uiColorFormat, value: string, colorPrefix?: string) => {
    const color_prefix = colorPrefix ? colorPrefix === '' || colorPrefix === "none" ? `--${value}` : `--${colorPrefix}-${value}` : `--c-${value}`;
    if (colorMode === "rgb") return `rgb(var(${color_prefix}), <alpha-value>)`
    else if (colorMode === "hsl") return `hsl(var(${color_prefix}))`
    else return `oklch(var(${color_prefix}))`
}
export const genColorValue = (initialKey: string, colorMode: uiColorFormat, colorPrefix?: string) => {
    return {
        DEFAULT: getBrice(colorMode, `${initialKey}-DEFAULT`, colorPrefix),
        50: getBrice(colorMode, `${initialKey}-50`, colorPrefix),
        1: getBrice(colorMode, `${initialKey}-100`, colorPrefix),
        2: getBrice(colorMode, `${initialKey}-200`, colorPrefix),
        3: getBrice(colorMode, `${initialKey}-300`, colorPrefix),
        4: getBrice(colorMode, `${initialKey}-400`, colorPrefix),
        5: getBrice(colorMode, `${initialKey}-500`, colorPrefix),
        6: getBrice(colorMode, `${initialKey}-600`, colorPrefix),
        7: getBrice(colorMode, `${initialKey}-700`, colorPrefix),
        8: getBrice(colorMode, `${initialKey}-800`, colorPrefix),
        9: getBrice(colorMode, `${initialKey}-900`, colorPrefix),
        100: getBrice(colorMode, `${initialKey}-100`, colorPrefix),
        200: getBrice(colorMode, `${initialKey}-200`, colorPrefix),
        300: getBrice(colorMode, `${initialKey}-300`, colorPrefix),
        400: getBrice(colorMode, `${initialKey}-400`, colorPrefix),
        500: getBrice(colorMode, `${initialKey}-500`, colorPrefix),
        600: getBrice(colorMode, `${initialKey}-600`, colorPrefix),
        700: getBrice(colorMode, `${initialKey}-700`, colorPrefix),
        800: getBrice(colorMode, `${initialKey}-800`, colorPrefix),
        900: getBrice(colorMode, `${initialKey}-900`, colorPrefix),
        950: getBrice(colorMode, `${initialKey}-950`, colorPrefix)
    }
}
