import type { SemanticColorNames, uiColorFormat } from "@/types";
import type { Shortcut } from "unocss";
import { UiButton, UiCommon, UiOutline, UiSoft, UiSolid, UiSubtle } from "../type";
import { defaultUiConfig } from "./default-val";
import { genUiVariantOutline, genUiVariantSoft, genUiVariantSubtle, genVariantSolid } from "./ui-helpers";


const getCommonUiShortcuts = ({
    uiCommon,
    colorFormat,
    appearance,
    prefix = 'c'
}: { uiCommon?: UiCommon; colorFormat: uiColorFormat, appearance: "light" | "dark" | "both", prefix?: string }) => {
    const ui = Object.assign({}, defaultUiConfig, uiCommon)
    const { uiVariants } = ui
    const solidVariants = uiVariants?.solid
    const outlineVariants = uiVariants?.outline
    const softVariants = uiVariants?.soft
    const subtleVariants = uiVariants?.subtle

    const getPrefix = prefix === "none" || prefix === '' ? '--' : `${prefix}-`


    const dynamicUi: Shortcut[] = [
        [
            /^ui-solid-(.*)$/,
            ([, color]) => {
                let shades: UiSolid = {
                    bgShade: "600",
                    textColor: "sl"
                };
                if (solidVariants) {
                    const key = color as SemanticColorNames
                    if (solidVariants.base && color in solidVariants.base) {
                        shades = solidVariants.base[key] as UiSolid;
                    } else if (solidVariants.custom && color in solidVariants.custom) {
                        shades = solidVariants.custom[key];
                    } else { shades = solidVariants['global'] as UiSolid }
                    return `${genVariantSolid({ color, appearance, shades, colorFormat, prefix })}`;
                }
            },
            { autocomplete: ["ui-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",], },
        ],
        [
            /^ui-subtle-(.*)$/,
            ([, color]) => {
                let shades: UiSubtle = { bgShade: "100", borderOpacity: 40, textShade: "400", borderShade: "300", opacity: 10, };
                if (subtleVariants) {
                    const key = color as SemanticColorNames
                    if (subtleVariants.base && color in subtleVariants.base) {
                        shades = subtleVariants.base[key] as UiSubtle;
                    } else if (subtleVariants.custom && color in subtleVariants.custom) {
                        shades = subtleVariants.custom[key];
                    } else { shades = subtleVariants['global'] as UiSubtle }
                    return `${genUiVariantSubtle({ color, appearance, shades, colorFormat, prefix })}`;
                }
            },
            { autocomplete: ["ui-subtle-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",], },
        ],
        [
            /^ui-soft-(.*)$/,
            ([, color]) => {
                let shades: UiSoft = {
                    bgShade: "100",
                    textShade: "400",
                    opacity: 10,
                };
                if (softVariants) {
                    const key = color as SemanticColorNames
                    if (softVariants.base && color in softVariants.base) {
                        shades = softVariants.base[key] as UiSoft;
                    } else if (softVariants.custom && color in softVariants.custom) {
                        shades = softVariants.custom[key];
                    } else { shades = softVariants['global'] as UiSoft }
                    return `${genUiVariantSoft({ color, appearance, shades, colorFormat, prefix })}`;
                }
            },
            { autocomplete: ["ui-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",], },
        ],
        [
            /^ui-outline-(.*)$/,
            ([, color]) => {
                let shades: UiOutline = {
                    textShade: "400",
                    borderShade: "500"
                };
                if (outlineVariants) {
                    const key = color as SemanticColorNames
                    if (outlineVariants.base && color in outlineVariants.base) {
                        shades = outlineVariants.base[key] as UiOutline;
                    } else if (outlineVariants.custom && color in outlineVariants.custom) {
                        shades = outlineVariants.custom[key];
                    } else { shades = outlineVariants['global'] as UiOutline }
                    return `${genUiVariantOutline({ color, appearance, shades, colorFormat, prefix })}`;
                }
            },
            { autocomplete: ["ui-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",], },
        ],
        [
            /^range-track-bg-(light|body|high|higher|lighter)$/,
            ([, color]) => {
                const finalColor = color === 'body' ? "bg" : `bg-${color}`
                return `[--ui-range-track-bg:${getPrefix}${finalColor}]`
            },
            { autocomplete: ["range-track-bg-(light|body|high|higher|lighter)"], },
        ],
    ];

    return [...dynamicUi];
};

export { getCommonUiShortcuts, type UiButton };