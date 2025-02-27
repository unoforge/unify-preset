import {
    defineConfig,
    presetIcons,
    presetMini,
    presetWind3,
} from "unocss";

import { flexillaPreset } from "@unifydev/flexilla"
import { presetUI, presetUIHelper } from "@unifydev/preset-ui"





export default defineConfig({
    theme: {
        colors: {
            bg: {
                DEFAULT: "hsl(var(--bg))",
                lighter: "hsl(var(--bg-lighter))",
                light: "hsl(var(--bg-light))",
                high: "hsl(var(--bg-high))",
                higher: "hsl(var(--bg-higher))"
            },
            fg: {
                DEFAULT: "hsl(var(--fg-text))",
                title: "hsl(var(--fg-title))",
                subtitle: "hsl(var(--fg-subtitle))",
                text: "hsl(var(--fg-text))",
                subtext: "hsl(var(--fg-subtext))",
                light: "hsl(var(--fg-light))"
            },
            border: {
                DEFAULT: "hsl(var(--border))",
                light: "hsl(var(--border-light))",
                lighter: "hsl(var(--border-ligther))",
                high: "hsl(var(--border-high))",
                higher: "hsl(var(--border-higher))"
            },
            primary: {
                DEFAULT: 'hsl(var(--c-primary-600))',
                50: 'hsl(var(--c-primary-50))',
                100: 'hsl(var(--c-primary-100))',
                200: 'hsl(var(--c-primary-200))',
                300: 'hsl(var(--c-primary-300))',
                400: 'hsl(var(--c-primary-400))',
                500: 'hsl(var(--c-primary-500))',
                600: 'hsl(var(--c-primary-600))',
                700: 'hsl(var(--c-primary-700))',
                800: 'hsl(var(--c-primary-800))',
                900: 'hsl(var(--c-primary-900))',
                950: 'hsl(var(--c-primary-950))',
            },
            secondary: {
                DEFAULT: 'hsl(var(--c-secondary-600))',
                50: 'hsl(var(--c-secondary-50))',
                100: 'hsl(var(--c-secondary-100))',
                200: 'hsl(var(--c-secondary-200))',
                300: 'hsl(var(--c-secondary-300))',
                400: 'hsl(var(--c-secondary-400))',
                500: 'hsl(var(--c-secondary-500))',
                600: 'hsl(var(--c-secondary-600))',
                700: 'hsl(var(--c-secondary-700))',
                800: 'hsl(var(--c-secondary-800))',
                900: 'hsl(var(--c-secondary-900))',
                950: 'hsl(var(--c-secondary-950))',
            },
            accent: {
                DEFAULT: 'hsl(var(--c-accent-600))',
                50: 'hsl(var(--c-accent-50))',
                100: 'hsl(var(--c-accent-100))',
                200: 'hsl(var(--c-accent-200))',
                300: 'hsl(var(--c-accent-300))',
                400: 'hsl(var(--c-accent-400))',
                500: 'hsl(var(--c-accent-500))',
                600: 'hsl(var(--c-accent-600))',
                700: 'hsl(var(--c-accent-700))',
                800: 'hsl(var(--c-accent-800))',
                900: 'hsl(var(--c-accent-900))',
                950: 'hsl(var(--c-accent-950))',
            },
            danger: {
                DEFAULT: 'hsl(var(--c-danger-600))',
                50: 'hsl(var(--c-danger-50))',
                100: 'hsl(var(--c-danger-100))',
                200: 'hsl(var(--c-danger-200))',
                300: 'hsl(var(--c-danger-300))',
                400: 'hsl(var(--c-danger-400))',
                500: 'hsl(var(--c-danger-500))',
                600: 'hsl(var(--c-danger-600))',
                700: 'hsl(var(--c-danger-700))',
                800: 'hsl(var(--c-danger-800))',
                900: 'hsl(var(--c-danger-900))',
                950: 'hsl(var(--c-danger-950))',
            },
            success: {
                DEFAULT: 'hsl(var(--c-success-600))',
                50: 'hsl(var(--c-success-50))',
                100: 'hsl(var(--c-success-100))',
                200: 'hsl(var(--c-success-200))',
                300: 'hsl(var(--c-success-300))',
                400: 'hsl(var(--c-success-400))',
                500: 'hsl(var(--c-success-500))',
                600: 'hsl(var(--c-success-600))',
                700: 'hsl(var(--c-success-700))',
                800: 'hsl(var(--c-success-800))',
                900: 'hsl(var(--c-success-900))',
                950: 'hsl(var(--c-success-950))',
            },
            warning: {
                DEFAULT: 'hsl(var(--c-warning-600))',
                50: 'hsl(var(--c-warning-50))',
                100: 'hsl(var(--c-warning-100))',
                200: 'hsl(var(--c-warning-200))',
                300: 'hsl(var(--c-warning-300))',
                400: 'hsl(var(--c-warning-400))',
                500: 'hsl(var(--c-warning-500))',
                600: 'hsl(var(--c-warning-600))',
                700: 'hsl(var(--c-warning-700))',
                800: 'hsl(var(--c-warning-800))',
                900: 'hsl(var(--c-warning-900))',
                950: 'hsl(var(--c-warning-950))',
            },
            info: {
                DEFAULT: 'hsl(var(--c-info-500))',
                50: 'hsl(var(--c-info-50))',
                100: 'hsl(var(--c-info-100))',
                200: 'hsl(var(--c-info-200))',
                300: 'hsl(var(--c-info-300))',
                400: 'hsl(var(--c-info-400))',
                500: 'hsl(var(--c-info-500))',
                600: 'hsl(var(--c-info-600))',
                700: 'hsl(var(--c-info-700))',
                800: 'hsl(var(--c-info-800))',
                900: 'hsl(var(--c-info-900))',
                950: 'hsl(var(--c-info-950))',
            },
            gray: {
                DEFAULT: 'hsl(var(--c-gray-500))',
                50: 'hsl(var(--c-gray-50))',
                100: 'hsl(var(--c-gray-100))',
                200: 'hsl(var(--c-gray-200))',
                300: 'hsl(var(--c-gray-300))',
                400: 'hsl(var(--c-gray-400))',
                500: 'hsl(var(--c-gray-500))',
                600: 'hsl(var(--c-gray-600))',
                700: 'hsl(var(--c-gray-700))',
                800: 'hsl(var(--c-gray-800))',
                900: 'hsl(var(--c-gray-900))',
                950: 'hsl(var(--c-gray-950))',
            },
            black: "hsl(var(--c-gray-950))",
            white: "hsl(var(--c-white))",
        }
    },
    presets: [
        presetWind3(),
        presetMini({
            dark: "class",
        }),
        presetIcons({
            collections: {
                //@ts-ignore
                ph: () =>
                    import("@iconify-json/ph/icons.json").then((i) => i.default),
                carbon:()=>import("@iconify-json/carbon/icons.json")
            },
        }),
        // presetForms(),
        presetUI({}) as any,
        presetUIHelper({}) as any,
        flexillaPreset(),
    ],
})