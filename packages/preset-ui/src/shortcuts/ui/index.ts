import type { SizeVariantBase, uiColorFormat, } from "@/types";

import { genUiSizes, getUiCardSize } from "../helpers";

import type { Shortcut } from "unocss";
import type { BaseVariants } from "./types";
import { getColorFormat } from "@/utils/colors-utils";


const getUiShortcuts = (
    colorFormat: uiColorFormat,
    globalUi?: BaseVariants,
) => {

    const { size: sizes, cardSize } = Object.assign({}, globalUi)

    const baseUi = {
        'ui-soft': "bg-[--ui-soft-bg] text-[--ui-soft-text]",
        'ui-solid': "bg-[--ui-solid-bg] text-[--ui-solid-text]",
        'ui-outline': "text-[--ui-outline-text] border-[--ui-outline-border]",
        'ui-subtle': "bg-[--ui-subtle-bg] border text-[--ui-subtle-text] border-[--ui-subtle-border]",
    }


    const dynamicUi: Shortcut[] = [
        [
            /^ui-solid-(.*)$/,
            ([, color]) => `[--ui-solid-bg:${getColorFormat(`--ui-solid-bg-${color}`, colorFormat)}] [--ui-solid-text:${getColorFormat(`--ui-solid-text-${color}`, colorFormat)}]`,
            { autocomplete: ["ui-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "ui-solid-$colors"] },
        ],
        [
            /^ui-outline-(.*)$/,
            ([, color]) => `[--ui-outline-border:${getColorFormat(`--ui-outline-${color}`, colorFormat)}] [--ui-outline-text:${getColorFormat(`--ui-outline-text-${color}`, colorFormat)}]`,
            { autocomplete: ["ui-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
        ],
        [
            /^ui-subtle-(.*)$/,
            ([, color]) => `[--ui-subtle-bg:var(--ui-subtle-bg-${color})] 
            [--ui-subtle-text:${getColorFormat(`--ui-subtle-text-${color}`, colorFormat)}] 
            [--ui-subtle-border:var(--ui-subtle-border-${color})]`,
            { autocomplete: ["ui-subtle-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
        ],
        [
            /^ui-soft-(.*)$/,
            ([, color]) => `[--ui-soft-bg:var(--ui-soft-bg-${color})] [--ui-soft-text:${getColorFormat(`--ui-soft-text-${color}`, colorFormat)}]`,
            { autocomplete: ["ui-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "ui-soft-$colors"], },
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

    return [baseUi, ...dynamicUi];
};

export { getUiShortcuts };