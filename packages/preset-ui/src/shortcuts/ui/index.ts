import type { SizeVariantBase, } from "@/types";

import { genUiSizes,  getUiCardSize } from "../helpers";

import type { Shortcut } from "unocss";
import type { BaseVariants } from "./types";


const getUiShortcuts = (
    globalUi?: BaseVariants
) => {

    const { size: sizes, cardSize } = Object.assign({},  globalUi)


    const dynamicUi: Shortcut[] = [
        [
            /^ui-solid(-(\S+))?$/,
            ([, , color = "gray"]) => `bg-[--ui-soft-${color}-bg] text-[--ui-soft-text-${color}]`,
            { autocomplete: ["ui-solid", "ui-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "ui-solid-$colors"]},
        ],
        [
            /^ui-outline(-(\S+))?$/,
            ([, , color = "gray"]) =>`border border-[--ui-outline-${color}] text-[--ui-outline-text-${color}]`,
            { autocomplete: ["ui-outline", "ui-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
        ],
        [
            /^ui-subtle(-(\S+))?$/,
            ([, , color = "gray"]) =>`bg-[--ui-subtle-${color}]/[var(--subtle-op)] border border-[--ui-subtle-${color}] text-[--ui-subtle-text-${color}]`,
            { autocomplete: ["ui-subtle", "ui-subtle-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
        ],
        [
            /^ui-soft(-(\S+))?$/,
            ([, , color = "gray"]) => `bg-[--ui-soft-${color}]/[var(--soft-op)] text-[--ui-outline-text-${color}]`,
            { autocomplete: ["ui-soft", "ui-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)","ui-soft-$colors"], },
        ],
        [
            /^ui-card-(xs|sm|md|lg|xl)$/,
            ([, size]) => {
                if (cardSize) {
                    const uSize = cardSize[size as SizeVariantBase]
                    if (uSize)
                        return `${getUiCardSize(uSize)}`;
                }
            },
            { autocomplete: ["ui-card-(xs|sm|md|lg|xl)"], },
        ],
        [
            /^ui-(sz|size)-(xs|sm|md|lg|xl)$/,
            ([, , size]) => {
                if (sizes) {
                    const uSize = sizes[size as SizeVariantBase]
                    if (uSize)
                        return `${genUiSizes(uSize)}`;
                }
            },
            { autocomplete: ["ui-size-(xs|sm|md|lg|xl)", "ui-sz-(xs|sm|md|lg|xl)"], },
        ],
    ];

    return [...dynamicUi];
};

export { getUiShortcuts };