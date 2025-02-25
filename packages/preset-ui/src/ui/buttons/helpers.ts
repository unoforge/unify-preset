import type { Appearance, uiColorFormat } from "@/types";
import { getShortcutsIfNotSame } from "@/utils";
import { getColorFormat, getColorFormatWithOpacity, getVarName } from "@/utils/colors-utils";
import { SolidBtnShade, BtnGhostOrSoft } from "../type";
import { UiFormOutline } from "@/types/ui-t";

export const genBtnVariantSolid = ({
	color,
	shades,
	appearance,
	colorFormat,
	prefix = 'c'
}: {
	color: string;
	shades: SolidBtnShade;
	appearance: Appearance;
	colorFormat: uiColorFormat;
	prefix?: string;
}) => {
	const {
		bgShade,
		hoverBgShade,
		activeBgShade,
		shadowShadeA,
		shadowShadeB,
		shadowShadeC,
		activeShadowShadeA,
		activeShadowShadeB,
		activeShadowShadeC,
		dark
	} = shades;

	const btnvariantDefault = `${appearance === "light" || appearance === "both"
		? `
			[--btn-solid-bg:${getColorFormat(getVarName(color, bgShade, prefix), colorFormat, prefix)}]
			[--btn-solid-bg-hover:${getColorFormat(getVarName(color, hoverBgShade, prefix), colorFormat, prefix)}]
			[--btn-solid-bg-active:${getColorFormat(getVarName(color, activeBgShade, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-a:${getColorFormat(getVarName(color, shadowShadeA, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-b:${getColorFormat(getVarName(color, shadowShadeB, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-c:${getColorFormat(getVarName(color, shadowShadeC, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-active-a:${getColorFormat(getVarName(color, activeShadowShadeA, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-active-b:${getColorFormat(getVarName(color, activeShadowShadeB, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-active-c:${getColorFormat(getVarName(color, activeShadowShadeC, prefix), colorFormat, prefix)}]
		`
		: ""} `;

	const variantDark = dark ? `${appearance === "dark"
		? `
			[--btn-solid-bg:${getColorFormat(getVarName(color, dark.bgShade, prefix), colorFormat, prefix)}]
			[--btn-solid-bg-hover:${getColorFormat(getVarName(color, dark.hoverBgShade, prefix), colorFormat, prefix)}]
			[--btn-solid-bg-active:${getColorFormat(getVarName(color, dark.activeBgShade, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-a:${getColorFormat(getVarName(color, dark.shadowShadeA, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-b:${getColorFormat(getVarName(color, dark.shadowShadeB, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-c:${getColorFormat(getVarName(color, dark.shadowShadeC, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-active-a:${getColorFormat(getVarName(color, dark.activeShadowShadeA, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-active-b:${getColorFormat(getVarName(color, dark.activeShadowShadeB, prefix), colorFormat, prefix)}]
			[--btn-solid-shadow-active-c:${getColorFormat(getVarName(color, dark.activeShadowShadeC, prefix), colorFormat, prefix)}]
		`
		: appearance === "both"
			? `
				dark:[--btn-solid-bg:${getColorFormat(getVarName(color, dark.bgShade, prefix), colorFormat, prefix)}]
				dark:[--btn-solid-bg-hover:${getColorFormat(getVarName(color, dark.hoverBgShade, prefix), colorFormat, prefix)}]
				dark:[--btn-solid-bg-active:${getColorFormat(getVarName(color, dark.activeBgShade, prefix), colorFormat, prefix)}]
				dark:[--btn-solid-shadow-a:${getColorFormat(getVarName(color, dark.shadowShadeA, prefix), colorFormat, prefix)}]
				dark:[--btn-solid-shadow-b:${getColorFormat(getVarName(color, dark.shadowShadeB, prefix), colorFormat, prefix)}]
				dark:[--btn-solid-shadow-c:${getColorFormat(getVarName(color, dark.shadowShadeC, prefix), colorFormat, prefix)}]
				dark:[--btn-solid-shadow-active-a:${getColorFormat(getVarName(color, dark.activeShadowShadeA, prefix), colorFormat, prefix)}]
				dark:[--btn-solid-shadow-active-b:${getColorFormat(getVarName(color, dark.activeShadowShadeB, prefix), colorFormat, prefix)}]
				dark:[--btn-solid-shadow-active-c:${getColorFormat(getVarName(color, dark.activeShadowShadeC, prefix), colorFormat, prefix)}]
			`
			: ""
		}` : '';
	return `${btnvariantDefault} ${variantDark} `;
};

export const genBtnVariantOutline = ({
	color,
	appearance,
	outlineShades,
	colorFormat,
	prefix = 'c'
}: {
	color: string;
	appearance: Appearance;
	outlineShades: UiFormOutline;
	colorFormat: uiColorFormat;
	prefix?: string;
}) => {
	const { textShade, borderShade, hoverBorderShade, hoverTextShade, dark } = outlineShades;

	const variantLight = `${appearance === "light" || appearance === "both"
		? ` 
		[--btn-outline-color:${getColorFormat(getVarName(color, borderShade, prefix), colorFormat, prefix)}] 
		[--btn-outline-border-hover:${getColorFormat(getVarName(color, hoverBorderShade, prefix), colorFormat, prefix)}] 
		[--btn-outline-text-color:${getColorFormat(getVarName(color, textShade, prefix), colorFormat, prefix)}] 
		[--btn-outline-text-color-hover:${getColorFormat(getVarName(color, hoverTextShade, prefix), colorFormat, prefix)}]`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `
		[--btn-outline-color:${getColorFormat(getVarName(color, dark.borderShade, prefix), colorFormat, prefix)}] 
		[--btn-outline-border-hover:${getColorFormat(getVarName(color, dark.hoverBorderShade, prefix), colorFormat, prefix)}] 
		[--btn-outline-text-color:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat, prefix)}] 
		[--btn-outline-text-color-hover:${getColorFormat(getVarName(color, dark.hoverTextShade, prefix), colorFormat, prefix)}]`
		: appearance === "both"
			? `
            ${getShortcutsIfNotSame({
				val1: `${borderShade}`,
				val2: `${dark?.borderShade}`,
				shortcuts: `dark-[--btn-outline-color:${getColorFormat(getVarName(color, dark?.borderShade, prefix), colorFormat, prefix)}]`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${textShade}`,
				val2: `${dark?.textShade}`,
				shortcuts: `dark-[--btn-outline-text-color:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat, prefix)}] `,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverBorderShade}`,
				val2: `${dark?.hoverBorderShade}`,
				shortcuts: `dark-[--btn-outline-border-hover:${getColorFormat(getVarName(color, dark.hoverBorderShade, prefix), colorFormat, prefix)}]`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverTextShade}`,
				val2: `${dark?.hoverTextShade}`,
				shortcuts: `dark-[--btn-outline-text-color-hover:${getColorFormat(getVarName(color, dark.hoverTextShade, prefix), colorFormat, prefix)}]`,
			})}`
			: ""
		}` : '';
	return `${variantLight} ${variantDark}`;
};

export const genBtnVariantSoftOrGost = ({
	color,
	appearance,
	ghostOrSoft,
	variant,
	colorFormat,
	prefix
}: {
	color: string;
	appearance: Appearance;
	ghostOrSoft: BtnGhostOrSoft;
	variant: "soft" | "ghost";
	colorFormat: uiColorFormat,
	prefix?:string
}) => {

	const { bgShade, bgOpacity, hoverBgOpacity, hoverBgShade, textShade, pressBgShade, pressOpacity, dark } = ghostOrSoft;
	const variantLight = `${appearance === "light" || appearance === "both"
		? `
		${variant === "ghost" ? "" :
			`
				[--btn-soft-bg-color:${getColorFormatWithOpacity(getVarName(color, bgShade, prefix), bgOpacity as number, colorFormat)}]
			`
		}
		 [--btn-soft-bg-color-hover:${getColorFormatWithOpacity(getVarName(color, hoverBgShade, prefix), hoverBgOpacity, colorFormat)}]
		 [--btn-soft-bg-color-press:${getColorFormatWithOpacity(getVarName(color, pressBgShade, prefix), pressOpacity, colorFormat)}]
		 [--btn-soft-text-color:${getColorFormat(getVarName(color, textShade, prefix), colorFormat)}]`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `
			${variant === "ghost" ? "" :
			`
				[--btn-soft-bg-color:${getColorFormatWithOpacity(getVarName(color, dark.bgShade, prefix), dark.bgOpacity as number, colorFormat)}] 
			`
		}
		 [--btn-soft-bg-color-hover:${getColorFormatWithOpacity(getVarName(color, dark.hoverBgShade, prefix), dark.hoverBgOpacity, colorFormat)}] 
		 [--btn-soft-bg-color-press:${getColorFormatWithOpacity(getVarName(color, dark.pressBgShade, prefix), dark.pressOpacity, colorFormat)}]
		 [--btn-soft-text-color:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat)}]
		`
		: appearance === "both"
			? `${variant === "ghost" ? "" :
				`
				dark-[--btn-soft-bg-color:${getColorFormatWithOpacity(getVarName(color, dark.bgShade, prefix), dark.bgOpacity as number, colorFormat)}] 
			`
			}
		 dark-[--btn-soft-bg-color-hover:${getColorFormatWithOpacity(getVarName(color, dark.hoverBgShade, prefix), dark.hoverBgOpacity, colorFormat)}]
		 dark-[--btn-soft-bg-color-press:${getColorFormatWithOpacity(getVarName(color, dark.pressBgShade, prefix), dark.pressOpacity, colorFormat)}]
		 dark-[--btn-soft-text-color:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat)}]` : ""
		}` : '';
	return `${variantLight} ${variantDark} [--btn-focus-outline-color:var(--btn-soft-bg-color-hover)]`;
};

export const genBtnVariantSoft = ({
	color,
	appearance,
	ghostOrSoft,
	colorFormat,
	prefix
}: { color: string; appearance: Appearance; ghostOrSoft: BtnGhostOrSoft, colorFormat: uiColorFormat, prefix?:string }) => {
	return `${genBtnVariantSoftOrGost({
		variant: "soft",
		color,
		appearance,
		ghostOrSoft,
		colorFormat,
		prefix
	})}`;
};

export const genBtnVariantGhost = ({
	color,
	appearance,
	ghost: ghostOrSoft,
	colorFormat,
	prefix
}: { color: string; appearance: Appearance; ghost: BtnGhostOrSoft, colorFormat: uiColorFormat, prefix?:string }) => {
	return `${genBtnVariantSoftOrGost({
		variant: "ghost",
		color,
		appearance,
		ghostOrSoft,
		colorFormat,
		prefix
	})}`;
};