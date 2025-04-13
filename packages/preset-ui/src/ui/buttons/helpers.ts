import type { Appearance, uiColorFormat } from "@/types";
import { getShortcutsIfNotSame } from "@/utils";
import { getColorFormat, getColorFormatWithOpacity, getVarName } from "@/utils/colors-utils";
import { FlexiBtnShade, BtnGhostOrSoft, SolidBtnShade } from "../type";
import { UiBtnOutline } from "@/types/ui-t";

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
		bgHoverShade,
		bgPressShade,
		topShadow,
		bottomShadow,
		topShadowHover,
		bottomShadowHover,
		dark
	} = shades;

	const bgDark = getShortcutsIfNotSame({
		val1: `${color}-${bgShade}`,
		val2: `${color}-${dark?.bgShade}`,
		shortcuts: `dark-[--btn-solid-color:${getColorFormat(getVarName(color, dark?.bgShade, prefix), colorFormat)}]`,
	});
	const bgHover = getShortcutsIfNotSame({
		val1: `${color}-${bgHoverShade}`,
		val2: `${color}-${dark?.bgHoverShade}`,
		shortcuts: `dark-[--btn-solid-color-hover:${getColorFormat(getVarName(color, dark?.bgHoverShade, prefix), colorFormat)}]`,
	});
	const activeBg = getShortcutsIfNotSame({
		val1: `${color}-${bgPressShade}`,
		val2: `${color}-${dark?.bgPressShade}`,
		shortcuts: ` dark-[--btn-solid-color-press:${getColorFormat(getVarName(color, dark?.bgPressShade, prefix), colorFormat)}]`,
	});

	const shadowLight = `[--btn-solid-top-shadow:${getColorFormat(getVarName(color, topShadow, prefix), colorFormat)}] 
						 [--btn-solid-bottom-shadow:${getColorFormat(getVarName(color, bottomShadow, prefix), colorFormat)}] 
						 [--btn-solid-top-shadow-hover:${getColorFormat(getVarName(color, topShadowHover, prefix), colorFormat)}] 
						 [--btn-solid-bottom-shadow-hover:${getColorFormat(getVarName(color, bottomShadowHover, prefix), colorFormat)}]`;
	const shadowDark = dark ? `[--btn-solid-top-shadow:${getColorFormat(getVarName(color, dark.topShadow, prefix), colorFormat)}] 
						 [--btn-solid-bottom-shadow:${getColorFormat(getVarName(color, dark.bottomShadow, prefix), colorFormat)}] 
						 [--btn-solid-top-shadow-hover:${getColorFormat(getVarName(color, dark.topShadowHover, prefix), colorFormat)}] 
						 [--btn-solid-bottom-shadow-hover:${getColorFormat(getVarName(color, dark.bottomShadowHover, prefix), colorFormat)}]` : '';
	const darkBoth = dark ? `
    ${getShortcutsIfNotSame({
		val1: `${color}-${topShadow}`,
		val2: `${color}-${dark?.topShadow}`,
		shortcuts: `dark-[--btn-solid-top-shadow:${getColorFormat(getVarName(color, dark.topShadow, prefix), colorFormat)}]`,
	})}
    ${getShortcutsIfNotSame({
		val1: `${color}-${bottomShadow}`,
		val2: `${color}-${dark.bottomShadow}`,
		shortcuts: `dark-[--btn-solid-bottom-shadow:${getColorFormat(getVarName(color, dark.topShadow, prefix), colorFormat)}]`,
	})}
	${getShortcutsIfNotSame({
		val1: `${color}-${topShadowHover}`,
		val2: `${color}-${dark.topShadowHover}`,
		shortcuts: `dark-[--btn-solid-top-shadow-hover:${getColorFormat(getVarName(color, dark.topShadow, prefix), colorFormat)}]`,
	})}
	${getShortcutsIfNotSame({
		val1: `${color}-${bottomShadowHover}`,
		val2: `${color}-${dark.bottomShadowHover}`,
		shortcuts: `dark-[--btn-solid-bottom-shadow-hover:${getColorFormat(getVarName(color, dark.topShadow, prefix), colorFormat)}]`,
	})}
    `: '';

	const btnvariantDefault = `${appearance === "light" || appearance === "both"
		? `${shadowLight} 
			[--btn-solid-color:${getColorFormat(getVarName(color, bgShade, prefix), colorFormat)}]
			[--btn-solid-color-hover:${getColorFormat(getVarName(color, bgHoverShade, prefix), colorFormat)}] 
			[--btn-solid-color-press:${getColorFormat(getVarName(color, bgPressShade, prefix), colorFormat)}]`
		: ""} `;

	const variantDark = dark ? `${appearance === "dark"
		? `${shadowDark} [--btn-solid-color:${getColorFormat(getVarName(color, dark.bgShade, prefix), colorFormat)}]
			[--btn-solid-color-hover:${getColorFormat(getVarName(color, dark.bgHoverShade, prefix), colorFormat)}] 
			[--btn-solid-color-press:${getColorFormat(getVarName(color, dark.bgPressShade, prefix), colorFormat)}]`
		: appearance === "both"
			? `${bgDark} ${bgHover} ${activeBg} ${darkBoth}`
			: ""
		}` : '';
	return `${btnvariantDefault} ${variantDark}`;
};

export const genBtnVariantFlexi = ({
	color,
	shades,
	appearance,
	colorFormat,
	prefix = 'c'
}: {
	color: string;
	shades: FlexiBtnShade;
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
			[--btn-flexi-bg:${getColorFormat(getVarName(color, bgShade, prefix), colorFormat, prefix)}]
			[--btn-flexi-bg-hover:${getColorFormat(getVarName(color, hoverBgShade, prefix), colorFormat, prefix)}]
			[--btn-flexi-bg-active:${getColorFormat(getVarName(color, activeBgShade, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-a:${getColorFormat(getVarName(color, shadowShadeA, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-b:${getColorFormat(getVarName(color, shadowShadeB, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-c:${getColorFormat(getVarName(color, shadowShadeC, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-active-a:${getColorFormat(getVarName(color, activeShadowShadeA, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-active-b:${getColorFormat(getVarName(color, activeShadowShadeB, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-active-c:${getColorFormat(getVarName(color, activeShadowShadeC, prefix), colorFormat, prefix)}]
		`
		: ""} `;

	const variantDark = dark ? `${appearance === "dark"
		? `
			[--btn-flexi-bg:${getColorFormat(getVarName(color, dark.bgShade, prefix), colorFormat, prefix)}]
			[--btn-flexi-bg-hover:${getColorFormat(getVarName(color, dark.hoverBgShade, prefix), colorFormat, prefix)}]
			[--btn-flexi-bg-active:${getColorFormat(getVarName(color, dark.activeBgShade, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-a:${getColorFormat(getVarName(color, dark.shadowShadeA, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-b:${getColorFormat(getVarName(color, dark.shadowShadeB, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-c:${getColorFormat(getVarName(color, dark.shadowShadeC, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-active-a:${getColorFormat(getVarName(color, dark.activeShadowShadeA, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-active-b:${getColorFormat(getVarName(color, dark.activeShadowShadeB, prefix), colorFormat, prefix)}]
			[--btn-flexi-shadow-active-c:${getColorFormat(getVarName(color, dark.activeShadowShadeC, prefix), colorFormat, prefix)}]
		`
		: appearance === "both"
			? `
				dark:[--btn-flexi-bg:${getColorFormat(getVarName(color, dark.bgShade, prefix), colorFormat, prefix)}]
				dark:[--btn-flexi-bg-hover:${getColorFormat(getVarName(color, dark.hoverBgShade, prefix), colorFormat, prefix)}]
				dark:[--btn-flexi-bg-active:${getColorFormat(getVarName(color, dark.activeBgShade, prefix), colorFormat, prefix)}]
				dark:[--btn-flexi-shadow-a:${getColorFormat(getVarName(color, dark.shadowShadeA, prefix), colorFormat, prefix)}]
				dark:[--btn-flexi-shadow-b:${getColorFormat(getVarName(color, dark.shadowShadeB, prefix), colorFormat, prefix)}]
				dark:[--btn-flexi-shadow-c:${getColorFormat(getVarName(color, dark.shadowShadeC, prefix), colorFormat, prefix)}]
				dark:[--btn-flexi-shadow-active-a:${getColorFormat(getVarName(color, dark.activeShadowShadeA, prefix), colorFormat, prefix)}]
				dark:[--btn-flexi-shadow-active-b:${getColorFormat(getVarName(color, dark.activeShadowShadeB, prefix), colorFormat, prefix)}]
				dark:[--btn-flexi-shadow-active-c:${getColorFormat(getVarName(color, dark.activeShadowShadeC, prefix), colorFormat, prefix)}]
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
	outlineShades: UiBtnOutline;
	colorFormat: uiColorFormat;
	prefix?: string;
}) => {
	const { textShade, borderShade, bgHover, bg, bgOpacity, borderOpacity, dark } = outlineShades;


	const variantLight = `${appearance === "light" || appearance === "both"
		? ` 
		[--btn-outline-bg:${getColorFormatWithOpacity(getVarName(color, bg, prefix), bgOpacity || 100, colorFormat)}]
		${bgHover ? `[--btn-outline-bg-hover:${getColorFormat(getVarName(color, bgHover, prefix), colorFormat, prefix)}]` : ''}
		[--btn-outline-color:${getColorFormatWithOpacity(getVarName(color, borderShade, prefix), borderOpacity || 100, colorFormat)}] 
		[--btn-outline-text-color:${getColorFormat(getVarName(color, textShade, prefix), colorFormat, prefix)}]`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? ` ]
		[--btn-outline-bg:${getColorFormatWithOpacity(getVarName(color, dark.bg, prefix), dark.bgOpacity || 100, colorFormat)}]
		${dark.bgHover ? `[--btn-outline-bg-hover:${getColorFormatWithOpacity(getVarName(color, dark.bgHover, prefix), dark.bgHoverOpacity || 100, colorFormat)}]` : ''}
		[--btn-outline-color:${getColorFormatWithOpacity(getVarName(color, dark.borderShade, prefix), dark.borderOpacity || 100, colorFormat)}] 
		[--btn-outline-text-color:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat, prefix)}] `
		: appearance === "both"
			? `
            ${getShortcutsIfNotSame({
				val1: `${borderShade}`,
				val2: `${dark?.borderShade}`,
				shortcuts: `dark-[--btn-outline-color:${getColorFormatWithOpacity(getVarName(color, dark.borderShade, prefix), dark.borderOpacity || 100, colorFormat)}]`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${textShade}`,
				val2: `${dark?.textShade}`,
				shortcuts: `dark-[--btn-outline-text-color:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat, prefix)}] `,
			})}
			dark-[--btn-outline-bg:${getColorFormatWithOpacity(getVarName(color, dark.bg, prefix), dark.bgOpacity || 100, colorFormat)}]
			${dark.bgHover ? `dark-[--btn-outline-bg-hover:${getColorFormatWithOpacity(getVarName(color, dark.bgHover, prefix), dark.bgHoverOpacity || 100, colorFormat)}]` : ''}	
			`
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
	prefix?: string
}) => {

	const { bgShade, bgOpacity, hoverBgOpacity,textHover, hoverBgShade, textShade, pressBgShade, pressOpacity, dark } = ghostOrSoft;
	const variantLight = `${appearance === "light" || appearance === "both"
		? `
		${variant === "ghost" ? "" :
			`[--btn-soft-bg-color:${getColorFormatWithOpacity(getVarName(color, bgShade, prefix), bgOpacity as number, colorFormat)}]`}
		 [--btn-${variant}-bg-color-hover:${getColorFormatWithOpacity(getVarName(color, hoverBgShade, prefix), hoverBgOpacity, colorFormat)}]
		 [--btn-${variant}-bg-color-press:${getColorFormatWithOpacity(getVarName(color, pressBgShade, prefix), pressOpacity, colorFormat)}]
		 [--btn-${variant}-text-color:${getColorFormat(getVarName(color, textShade, prefix), colorFormat)}]
		 ${textHover? `[--btn-${variant}-text-color-hover:${getColorFormat(getVarName(color, textHover, prefix), colorFormat)}]` : ''}
		 `
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `${variant === "ghost" ? "" :
			`
			 [--btn-${variant}-bg-color:${getColorFormatWithOpacity(getVarName(color, dark.bgShade, prefix), dark.bgOpacity as number, colorFormat)}] `}
		 [--btn-${variant}-bg-color-hover:${getColorFormatWithOpacity(getVarName(color, dark.hoverBgShade, prefix), dark.hoverBgOpacity, colorFormat)}] 
		 [--btn-${variant}-bg-color-press:${getColorFormatWithOpacity(getVarName(color, dark.pressBgShade, prefix), dark.pressOpacity, colorFormat)}]
		 [--btn-${variant}-text-color:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat)}]
		 ${dark.textHover? `[--btn-${variant}-text-color-hover:${getColorFormat(getVarName(color, dark.textHover, prefix), colorFormat)}]` : ''}
		`
		: appearance === "both"
			? `${variant === "ghost" ? "" :
				`
				dark-[--btn-${variant}-bg-color:${getColorFormatWithOpacity(getVarName(color, dark.bgShade, prefix), dark.bgOpacity as number, colorFormat)}] 
			`
			}
		 dark-[--btn-${variant}-bg-color-hover:${getColorFormatWithOpacity(getVarName(color, dark.hoverBgShade, prefix), dark.hoverBgOpacity, colorFormat)}]
		 dark-[--btn-${variant}-bg-color-press:${getColorFormatWithOpacity(getVarName(color, dark.pressBgShade, prefix), dark.pressOpacity, colorFormat)}]
		 dark-[--btn-${variant}-text-color:${getColorFormat(getVarName(color, dark.textShade, prefix), colorFormat)}]
		 ${dark.textHover? `dark-[--btn-${variant}-text-color-hover:${getColorFormat(getVarName(color, dark.textHover, prefix), colorFormat)}]` : ''}
		 ` : ""
		}` : '';
	return `${variantLight} ${variantDark}`;
};

export const genBtnVariantSoft = ({
	color,
	appearance,
	ghostOrSoft,
	colorFormat,
	prefix
}: { color: string; appearance: Appearance; ghostOrSoft: BtnGhostOrSoft, colorFormat: uiColorFormat, prefix?: string }) => {
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
}: { color: string; appearance: Appearance; ghost: BtnGhostOrSoft, colorFormat: uiColorFormat, prefix?: string }) => {
	return `${genBtnVariantSoftOrGost({
		variant: "ghost",
		color,
		appearance,
		ghostOrSoft,
		colorFormat,
		prefix
	})}`;
};