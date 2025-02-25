import type { Appearance, uiColorFormat } from "@/types";
import { getShortcutsIfNotSame } from "@/utils";
import { UiOutline, UiSoft, UiSolid, UiSubtle } from "../type";
import { getColorFormat, getColorFormatWithOpacity, getVarName } from "@/utils/colors-utils";


export const genVariantSolid = ({ color, shades, appearance, colorFormat, prefix = 'c' }: { color: string; shades: UiSolid; appearance: Appearance; colorFormat: uiColorFormat; prefix?: string; }) => {
    const { textColor, bgShade, dark } = shades
    const light = appearance === "light" || appearance === "both" ? `[--ui-solid-bg:${getColorFormat(getVarName(color, bgShade, prefix), colorFormat)}] [--ui-solid-text:${getColorFormat(getVarName(color, textColor, prefix), colorFormat)}]` : ""
    const darkOnly = appearance === "dark" && dark ? `[--ui-solid-bg:${getColorFormat(getVarName(color, dark?.bgShade, prefix), colorFormat)}] [--ui-solid-text:${getColorFormat(getVarName(color, dark?.textColor, prefix), colorFormat)}]` : ''
    const darkInBoth = appearance === "both" && dark ? `
    ${getShortcutsIfNotSame({ val1: `${color}-${bgShade}`, val2: `${color}-${dark?.bgShade}`, shortcuts: `dark-[--ui-solid-bg:${getColorFormat(getVarName(color, dark?.bgShade, prefix), colorFormat)}]` })}
    ${getShortcutsIfNotSame({ val1: `${textColor}`, val2: `${dark?.textColor}`, shortcuts: `dark-[--ui-solid-text:${getColorFormat(getVarName(color, dark?.textColor, prefix), colorFormat)}]` })}` : ''
    return `${light} ${darkOnly} ${darkInBoth}`;
};

export const genUiVariantOutline = ({ color, shades, appearance, colorFormat, prefix = 'c' }: { color: string; shades: UiOutline, appearance: Appearance; colorFormat: uiColorFormat; prefix?: string; }) => {
    const { textShade, borderShade, dark } = shades
    const light = appearance === "light" || appearance === "both" ? `[--ui-outline-border:${getColorFormat(getVarName(color, borderShade, prefix), colorFormat)}] [--ui-outline-text:${getColorFormat(getVarName(color, textShade, prefix), colorFormat)}]` : ""
    const darkOnly = appearance === "dark" ? `[--ui-outline-border:${getColorFormat(getVarName(color, dark?.borderShade, prefix), colorFormat)}] [--ui-outline-text:${getColorFormat(getVarName(color, dark?.textShade, prefix), colorFormat)}]` : ''
    const darkInBoth = appearance === "both" && dark ? `
    ${getShortcutsIfNotSame({ val1: `${color}-${borderShade}`, val2: `${color}-${dark.borderShade}`, shortcuts: `dark-[--ui-outline-border:${getColorFormat(getVarName(color, dark?.borderShade, prefix), colorFormat)}]` })}
    ${getShortcutsIfNotSame({ val1: `${textShade}`, val2: `${dark.textShade}`, shortcuts: `dark-[--ui-outline-text:${getColorFormat(getVarName(color, dark?.textShade, prefix), colorFormat)}]` })}` : ''
    return `${light} ${darkOnly} ${darkInBoth}`;
};



export const genUiVariantSoft = ({ color, appearance, shades, colorFormat, prefix }: { color: string; appearance: Appearance; shades: UiSoft; colorFormat: uiColorFormat, prefix?: string }) => {
    const { bgShade, opacity, textShade, dark } = shades;
    const variantLight = appearance === "light" || appearance === "both" ? `[--ui-soft-bg:${getColorFormatWithOpacity(getVarName(color, bgShade, prefix), opacity, colorFormat)}] [--ui-soft-text:${getColorFormat(getVarName(color, textShade, prefix), colorFormat)}]` : "";
    const variantDark = dark ? appearance === "dark"
        ? `[--ui-soft-bg:${getColorFormatWithOpacity(getVarName(color, dark.bgShade, prefix), opacity, colorFormat)}]
         [--ui-soft-text:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat)}]`
        : appearance === "both"
            ? `dark-[--ui-soft-bg:${getColorFormatWithOpacity(getVarName(color, dark.bgShade, prefix), opacity, colorFormat)}]
         dark-[--ui-soft-text:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat)}]` : ""
        : '';
    return `${variantLight} ${variantDark}`;
};

export const genUiVariantSubtle = ({ color, appearance, shades, colorFormat, prefix }: { color: string; appearance: Appearance; shades: UiSubtle; colorFormat: uiColorFormat, prefix?: string }) => {
    const { bgShade, opacity, textShade, borderOpacity, borderShade, dark } = shades;
    const variantLight = appearance === "light" || appearance === "both" ? `[--ui-subtle-bg:${getColorFormatWithOpacity(getVarName(color, bgShade, prefix), opacity, colorFormat)}] [--ui-subtle-text:${getColorFormat(getVarName(color, textShade, prefix), colorFormat)}]
    [--ui-subtle-border:${getColorFormatWithOpacity(getVarName(color, borderShade, prefix), borderOpacity, colorFormat)}]` : "";
    const variantDark = dark ? appearance === "dark" ? `[--ui-subtle-bg:${getColorFormatWithOpacity(getVarName(color, dark.bgShade, prefix), opacity, colorFormat)}] [--ui-subtle-text:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat)}] [--ui-subtle-border:${getColorFormatWithOpacity(getVarName(color, dark.borderShade, prefix), dark.borderOpacity, colorFormat)}]`
        : appearance === "both" ? `dark-[--ui-subtle-bg:${getColorFormatWithOpacity(getVarName(color, dark.bgShade, prefix), opacity, colorFormat)}] dark-[--ui-subtle-text:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat)}] dark-[--ui-subtle-border:${getColorFormatWithOpacity(getVarName(color, dark.borderShade, prefix), dark.borderOpacity, colorFormat)}]` : "" : '';
    return `${variantLight} ${variantDark}`;
};