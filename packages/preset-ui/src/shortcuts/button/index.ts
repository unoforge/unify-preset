import type { BtnIconBase, BtnSizeBase, Button } from "./types";
import { getConfigValue } from "@/utils";
import { btnCongig } from "./const";

import type { SharedFormConfig } from "@/types";
import type { Shortcut } from "unocss";
import { genBtnGradientBase, genBtnOutlineBase, genBtnSoftBase, genBtnVariantSolidBase } from "./baseHelpers";

const getBtnSizeInfo = (sizeVariant: BtnSizeBase) => {
	return `h-${getConfigValue(sizeVariant?.height)} px-${getConfigValue(
		sizeVariant.px,
	)} text-${sizeVariant.textSize}`;
};
const getBtnIconSizeInfo = (sizeVariant: BtnIconBase) => {
	return `truncate justify-center size-${getConfigValue(
		sizeVariant.size,
	)} text-${sizeVariant.textSize}`;
};

const getBtnShortcuts = ({
	button,
	formConfig,
}: { button?: Button; formConfig?: SharedFormConfig }) => {
	const btn = Object.assign({}, btnCongig, button)

	const btnSizes = btn.sizes;
	const btnIconSizes = btn.iconSizes;


	const ringBase = Object.assign({}, formConfig?.ringBase, btn.ringBase)

	const btnOutlineOnFocus = () =>
		`focus-visible-outline focus-visible-[outline-offset:var(--btn-focus-outline-offset,${ringBase.offset}px)]
		focus-visible-[outline-width:var(--btn-focus-outline-width,${ringBase.size}px)] 
		focus-visible-outline-[--btn-focus-outline-color]`;
	const btns = {
		btn: "flex items-center disabled-opacity-50 disabled-cursor-not-allowed disabled-hover-opacity-70 outline-0 outline-transparent",
		"btn-xs": `${getBtnSizeInfo(btnSizes?.xs as BtnSizeBase)}`,
		"btn-sm": `${getBtnSizeInfo(btnSizes?.sm as BtnSizeBase)}`,
		"btn-md": `${getBtnSizeInfo(btnSizes?.md as BtnSizeBase)}`,
		"btn-lg": `${getBtnSizeInfo(btnSizes?.lg as BtnSizeBase)}`,
		"btn-xl": `${getBtnSizeInfo(btnSizes?.xl as BtnSizeBase)}`,
		"btn-icon-xs": `${getBtnIconSizeInfo(btnIconSizes?.xs as BtnIconBase)}`,
		"btn-icon-sm": `${getBtnIconSizeInfo(btnIconSizes?.sm as BtnIconBase)}`,
		"btn-icon-md": `${getBtnIconSizeInfo(btnIconSizes?.md as BtnIconBase)}`,
		"btn-icon-lg": `${getBtnIconSizeInfo(btnIconSizes?.lg as BtnIconBase)}`,
		"btn-icon-xl": `${getBtnIconSizeInfo(btnIconSizes?.xl as BtnIconBase)}`,
		"btn-solid": `${genBtnVariantSolidBase()} ${btnOutlineOnFocus()}`,
		"btn-outline": `${genBtnOutlineBase()} ${btnOutlineOnFocus()}`,
		"btn-soft": `${genBtnSoftBase({ isGhost: false })} ${btnOutlineOnFocus()}`,
		"btn-ghost": `${genBtnSoftBase({ isGhost: true })} ${btnOutlineOnFocus()}`,
		"btn-gradient": `${genBtnGradientBase()} ${btnOutlineOnFocus()}`
	};

	const dynamicBtns: Shortcut[] = [
		[
			/^btn-solid-(.*)$/,
			([, color]) =>  `
				[--btn-solid-color:--ui-btn-${color}] [--btn-solid-color-hover:--ui-btn-${color}-hover]
				[--btn-solid-color-press:--ui-btn-${color}-press] [--btn-solid-color-hover:--ui-btn-${color}-hover]
				[--btn-solid-top-shadow:--ui-btn-${color}-top-shadow] [--btn-solid-bottom-shadow:--ui-btn-${color}-bottom-shadow]
				[--btn-focus-outline-color:--btn-solid-color-hover]
				`,
			{ autocomplete: ["btn-solid", "btn-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
		],
		[
			/^btn-outline-(.*)$/,
			([, color]) => `
				[--btn-outline-color:--ui-btn-outline-${color}] [--btn-outline-color-hover:--ui-btn-outline-${color}-hover]
				[--btn-outline-text-color:--ui-btn-outline-${color}-text] [--btn-outline-text-color-hover:--btn-ui-outline-${color}-hover]
				[--btn-focus-outline-color:--btn-outline-text-color-hover]
				`,
			{ autocomplete: ["btn-outline", "btn-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-outline-$colors"], },
		],
		[
			/^btn-soft-(.*)$/,
			([, color]) =>  `
				[--btn-soft-bg-color:--ui-btn-soft-${color}] [--btn-soft-bg-color-hover:--ui-btn-soft-${color}-hover]
				[--btn-soft-bg-color-press:--ui-btn-soft-${color}-press] [--btn-soft-text-color:--ui-btn-soft-text-${color}]
				[--btn-focus-outline-color:--btn-soft-text-color]
				`,
			{ autocomplete: ["btn-soft", "btn-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-soft-$colors"] },
		],
		[
			/^btn-ghost-(.*)$/,
			([, color]) =>`
				[--btn-soft-bg-color-hover:--ui-btn-ghost-${color}] [--btn-soft-bg-color-press:--ui-btn-ghost-${color}-press]
				[--btn-soft-text-color:--ui-btn-ghost-text-${color}] [--btn-focus-outline-color:--btn-soft-text-color]
				`,
			{ autocomplete: ["btn-ghost", "btn-ghost-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-ghost-$colors"], },
		],
		[
			/^btn-gradient-(.*)$/,
			([, color]) =>  `
				[--btn-gradient-border-color:--ui-btn-gradient-color-${color}] [--btn-gradient-color-from:--ui-btn-gradient-from-${color}]
    			[--btn-gradient-color-to:--ui-btn-gradient-to-${color}] [--btn-focus-outline-color:--btn-gradient-color-to]
				`,
			{ autocomplete: ["btn-gradient", "btn-gradient-(primary|secondary|accent|success|warning|info|danger|gray|neutral)","btn-gradient-$colors"], },
		],
	];

	return [btns, ...dynamicBtns];
};

export { getBtnShortcuts, type Button };
