import type { SizeVariantBase, } from "@/types";

import { cardSizeVariants, genUiSizes, getUiCardSize, uiSizeVariants } from "../helpers";

import type { Shortcut } from "unocss";
import type { BaseVariants } from "./types";


const getUiShortcuts = (
    globalUi?: BaseVariants,
) => {
    const defaultSizes: BaseVariants = {
        size: uiSizeVariants,
        cardSize: cardSizeVariants
    }
    const { size: sizes, cardSize } = Object.assign({}, defaultSizes, globalUi)

    const baseUi = {
        'ui-soft': "bg-[--ui-soft-bg] text-[--ui-soft-text]",
        'ui-solid': "bg-[--ui-solid-bg] text-[--ui-solid-text]",
        'ui-outline': "text-[--ui-outline-text] border border-[--ui-outline-border]",
        'ui-subtle': "bg-[--ui-subtle-bg] border text-[--ui-subtle-text] border-[--ui-subtle-border]",
    }


    const dynamicUi: Shortcut[] = [
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
                        return `${genUiSizes(uSize, size as SizeVariantBase)}`;
                }
            },
            { autocomplete: ["ui-size-(xs|sm|md|lg|xl)", "ui-sz-(xs|sm|md|lg|xl)"], },
        ],
    ];

    return [baseUi, ...dynamicUi];
};

export { getUiShortcuts };