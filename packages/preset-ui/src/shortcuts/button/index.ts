import type { BtnIconBase, BtnSizeBase, Button } from "./types";
import { getConfigValue } from "@/utils";
import { btnCongig } from "./const";

import type { SharedFormConfig, uiColorFormat } from "@/types";
import type { Shortcut } from "unocss";
import { genBtnOutlineBase, genBtnSoftBase, genBtnVariantSolidBase } from "./baseHelpers";
import { getColorFormat } from "@/utils/colors-utils";

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
	colorFormat
}: { button?: Button; formConfig?: SharedFormConfig, colorFormat: uiColorFormat }) => {
	const btn = Object.assign({}, btnCongig, button)

	const btnSizes = btn.sizes;
	const btnIconSizes = btn.iconSizes;


	const ringBase = Object.assign({}, formConfig?.ringBase, btn.ringBase)

	const btnOutlineOnFocus = () =>
		`focus-visible-outline focus-visible-[outline-offset:var(--btn-focus-outline-offset,${ringBase.offset}px)]
		focus-visible-[outline-width:var(--btn-focus-outline-width,${ringBase.size}px)] 
		focus-visible-[outline-color:var(--btn-focus-outline-color)]`;
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
	};

	const dynamicBtns: Shortcut[] = [
		[
			/^btn-solid-(.*)$/,
			([, color]) => `
			  [--btn-solid-bg:${getColorFormat(`--ui-btn-bg-${color}`, colorFormat)}]
			  [--btn-solid-bg-hover:${getColorFormat(`--ui-btn-bg-hover-${color}`, colorFormat)}]
			  [--btn-solid-bg-active:${getColorFormat(`--ui-btn-bg-press-${color}`, colorFormat)}]
			  [--btn-solid-shadow-a:${getColorFormat(`--ui-btn-shadow-a-${color}`, colorFormat)}]
			  [--btn-solid-shadow-b:${getColorFormat(`--ui-btn-shadow-b-${color}`, colorFormat)}]
			  [--btn-solid-shadow-c:${getColorFormat(`--ui-btn-shadow-c-${color}`, colorFormat)}]
			`,
			{ autocomplete: ["btn-solid", "btn-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)"] },
		],
		[
			/^btn-outline-(.*)$/,
			([, color]) => `
				[--btn-outline-color:${getColorFormat(`--ui-btn-outline-${color}`, colorFormat)}]
				[--btn-outline-color-hover:${getColorFormat(`--ui-btn-outline-${color}-hover`, colorFormat)}]
				[--btn-outline-text-color:${getColorFormat(`--ui-btn-outline-${color}-text`, colorFormat)}]
				[--btn-outline-text-color-hover:${getColorFormat(`--ui-btn-outline-${color}-hover`, colorFormat)}]
				[--btn-focus-outline-color:${getColorFormat(`--ui-btn-outline-text-color-hover`, colorFormat)}]
			`,
			{ autocomplete: ["btn-outline", "btn-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-outline-$colors"] },
		],
		[
			/^btn-soft-(.*)$/,
			([, color]) => `
			  [--btn-soft-bg-color:var(--ui-btn-soft-bg-${color})]
			  [--btn-soft-bg-color-hover:var(--ui-btn-soft-bg-hover-${color})]
			  [--btn-soft-bg-color-press:var(--ui-btn-soft-bg-press-${color})]
			  [--btn-soft-text-color:${getColorFormat(`--ui-btn-soft-text-${color}`, colorFormat)}]
			`,
			{ autocomplete: ["btn-soft", "btn-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-soft-$colors"] },
		],
		[
			/^btn-ghost-(.*)$/,
			([, color]) => `
			  [--btn-ghost-bg-color-hover:var(--ui-btn-ghost-bg-hover-${color})]
			  [--btn-ghost-bg-color-press:var(--ui-btn-ghost-bg-press-${color})]
			  [--btn-ghost-text-color:${getColorFormat(`--ui-btn-ghost-text-${color}`, colorFormat)}]
			`,
			{ autocomplete: ["btn-ghost", "btn-ghost-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-ghost-$colors"] },
		],
	];

	return [btns, ...dynamicBtns];
};

export { getBtnShortcuts, type Button };
