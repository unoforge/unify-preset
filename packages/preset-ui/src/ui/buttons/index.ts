import type { SemanticColorNames, uiColorFormat } from "@/types";
import type { Shortcut } from "unocss";
import { BtnGhostOrSoft, BtnGhostVariants, BtnOutlineVariants, BtnSoftVariants, CnBtn, FlexiBtnShade, SolidBtnShade, ThingsToExclude, UiButton } from "../type";
import { btnConfig } from "@/ui/buttons/button-default";

import { genBtnVariantGhost, genBtnVariantOutline, genBtnVariantSoft, genBtnVariantFlexi, genBtnVariantSolid, genBtnVariantCn } from "./helpers";
import { UiBtnOutline } from "@/types/ui-t";
import { isVariantExcluded } from "@/utils";


const getUiBtnShortcuts = ({
	button,
	colorFormat,
	appearance,
	prefix, exclude
}: { button?: UiButton; colorFormat: uiColorFormat, appearance: "light" | "dark" | "both", prefix?: string, exclude?: ThingsToExclude }) => {
	const btn = Object.assign({}, btnConfig, button)

	const solidVariants = btn.solidVariants
	const flexiVariants = btn.flexiVariants
	const softVariants = btn.softVariants
	const ghostVariants = btn.ghostVariants
	const outlineVariants = btn.outlineVariants
	const cnVariants = btn.cnVariants

	const btnWhite = flexiVariants?.base?.white!

	const buttons = {
		'ui-btn-white': `${genBtnVariantFlexi({ color: "white", appearance, shades: btnWhite, colorFormat, prefix })}`
	}

	const dynamicBtns: Shortcut[] = [
		[
			/^btn-solid-(.*)$/,
			([, color]) => {
				let shades: SolidBtnShade = {
					bgShade: "600",
					bgHoverShade: "700",
					bgPressShade: "800",
					topShadow: "500",
					bottomShadow: "700",
					topShadowHover: "600",
					bottomShadowHover: "800",
				};
				if (solidVariants && !isVariantExcluded(exclude, "btn", "solid", color)) {
					const key = color as SemanticColorNames
					if (solidVariants.base && color in solidVariants.base) {
						shades = solidVariants.base[key] as SolidBtnShade;
					} else if (solidVariants.custom && color in solidVariants.custom) {
						shades = solidVariants.custom[key];
					} else { shades = solidVariants['global'] as SolidBtnShade }
					return `${genBtnVariantSolid({ color, appearance, shades, colorFormat, prefix })}`;
				}
			},
			{ autocomplete: ["btn-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",], },
		],
		[
			/^btn-flexi-(.*)$/,
			([, color]) => {
				let shades: FlexiBtnShade = {
					bgShade: "500",
					hoverBgShade: "600",
					activeBgShade: "700",
					shadowShadeA: "700",
					shadowShadeB: "500",
					shadowShadeC: "400",
					activeShadowShadeA: "800",
					activeShadowShadeB: "600",
					activeShadowShadeC: "500"
				};
				if (flexiVariants && !isVariantExcluded(exclude, "btn", "flexi", color)) {
					const key = color as SemanticColorNames
					if (flexiVariants.base && color in flexiVariants.base) {
						shades = flexiVariants.base[key] as FlexiBtnShade;
					} else if (flexiVariants.custom && color in flexiVariants.custom) {
						shades = flexiVariants.custom[key];
					} else { shades = flexiVariants['global'] as FlexiBtnShade }
					return `${genBtnVariantFlexi({ color, appearance, shades, colorFormat, prefix })}`;
				}
			},
			{ autocomplete: ["btn-flexi-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",], },
		],
		[
			/^btn-outline-(.*)$/,
			([, color]) => {
				let shades: UiBtnOutline = { borderShade: "200", borderOpacity: 100, textShade: "800", bg: "50" }
				if (outlineVariants && !isVariantExcluded(exclude, "btn", "outline", color)) {
					const key = color as SemanticColorNames
					if (outlineVariants.base && color in outlineVariants.base) {
						shades = outlineVariants.base[key] as UiBtnOutline;
					} else if (outlineVariants.custom && color in outlineVariants.custom) {
						shades = outlineVariants.custom[color as keyof BtnOutlineVariants];
					} else { shades = outlineVariants['global'] as UiBtnOutline }
					return `${genBtnVariantOutline({
						color, appearance, outlineShades: shades, colorFormat, prefix
					})}`;
				}
			},
			{ autocomplete: ["btn-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",], },
		],
		[
			/^btn-soft-(.*)$/,
			([, color]) => {
				if (softVariants && !isVariantExcluded(exclude, "btn", "soft", color)) {
					let shades: BtnGhostOrSoft
					const key = color as SemanticColorNames
					if (softVariants.base && color in softVariants.base) {
						shades = softVariants.base[key] as BtnGhostOrSoft;
					} else if (softVariants.custom && color in softVariants.custom) {
						shades = softVariants.custom[color as keyof BtnSoftVariants];
					} else { shades = softVariants.global as BtnGhostOrSoft }

					return `${genBtnVariantSoft({
						color,
						appearance,
						ghostOrSoft: shades,
						colorFormat,
						prefix
					})}`;
				}
			},
			{ autocomplete: ["btn-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",] },
		],
		[
			/^btn-ghost-(.*)$/,
			([, color]) => {
				if (ghostVariants && !isVariantExcluded(exclude, "btn", "ghost", color)) {
					let shades: BtnGhostOrSoft
					const key = color as SemanticColorNames
					if (ghostVariants.base && color in ghostVariants.base) {
						shades = ghostVariants.base[key] as BtnGhostOrSoft;
					} else if (ghostVariants.custom && color in ghostVariants.custom) {
						shades = ghostVariants.custom[color as keyof BtnGhostVariants];
					} else { shades = ghostVariants['global'] as BtnGhostOrSoft }

					return `${genBtnVariantGhost({
						color,
						appearance,
						ghost: shades,
						colorFormat
					})}`;
				}
			},
			{ autocomplete: ["btn-ghost-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)",], },
		],
		[
			/^btn-cn-(.*)$/,
			([, color]) => {
				let shades: CnBtn = {
					bgColor: "600",
					textColor: "50",
					hoverBgColor: "700",
					hoverBgOpacity: 80
				};

				if (cnVariants && !isVariantExcluded(exclude, "btn", "cn", color)) {
					const key = color as SemanticColorNames
					if (cnVariants.base && color in cnVariants.base) {
						shades = cnVariants.base[key] as CnBtn;
					} else if (cnVariants.custom && color in cnVariants.custom) {
						shades = cnVariants.custom[key];
					} else {
						shades = cnVariants['global'] as CnBtn
					}

					return `${genBtnVariantCn({
						color,
						appearance,
						colorFormat,
						prefix,
						cn: shades
					})}`;
				}
			},
			{ autocomplete: ["btn-cn-(primary|secondary|accent|success|warning|info|danger|gray|neutral|white)"] }
		],
	];

	return [buttons, ...dynamicBtns];
};

export { getUiBtnShortcuts, type UiButton };