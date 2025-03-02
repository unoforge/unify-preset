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