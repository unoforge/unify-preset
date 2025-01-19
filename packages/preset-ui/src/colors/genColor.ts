
const getBrice = (colorMode: "rgba" | "rgb", value: string) => {
    if (colorMode === "rgb") {
        return `rgb(${value}, <alpha-value>)`
    } else return `rgba(${value}) / <alpha-value>`
}
export const genColorValue = (initialKey: string, colorMode: "rgba" | "rgb") => {
    return {
        50: getBrice(colorMode, `${initialKey}-50`),
        100: getBrice(colorMode, `${initialKey}-100`),
        200: getBrice(colorMode, `${initialKey}-200`),
        300: getBrice(colorMode, `${initialKey}-300`),
        400: getBrice(colorMode, `${initialKey}-400`),
        500: getBrice(colorMode, `${initialKey}-500`),
        600: getBrice(colorMode, `${initialKey}-600`),
        700: getBrice(colorMode, `${initialKey}-700`),
        800: getBrice(colorMode, `${initialKey}-800`),
        900: getBrice(colorMode, `${initialKey}-900`),
        950: getBrice(colorMode, `${initialKey}-950`)
    }
}