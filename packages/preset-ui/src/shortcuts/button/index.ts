import type { BtnIconBase, BtnSizeBase, Button } from "./types";
import { getConfigValue } from "@/utils";
import { btnCongig } from "./const";

import type { SharedFormConfig, uiColorFormat } from "@/types";
import type { Shortcut } from "unocss";
import { genBtnOutlineBase, genBtnSoftBase, genBtnVariantSolidBase } from "./baseHelpers";
import { getColorFormat, getGhostSpftBtnUi } from "@/utils/colors-utils";

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
		focus-visible-outline-[${getColorFormat(`--btn-focus-outline-color`, colorFormat)}]`;
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
			  [--btn-solid-bg:${getColorFormat(`--ui-btn-${color}`, colorFormat)}]
			  [--btn-solid-bg-hover:${getColorFormat(`--ui-btn-${color}-hover`, colorFormat)}]
			  [--btn-solid-bg-active:${getColorFormat(`--ui-btn-${color}-press`, colorFormat)}]
			  [--btn-solid-shadow-a:${getColorFormat(`--ui-btn-solid-shadow-a-${color}`, colorFormat)}]
			  [--btn-solid-shadow-b:${getColorFormat(`--ui-btn-solid-shadow-b-${color}`, colorFormat)}]
			  [--btn-solid-shadow-c:${getColorFormat(`--ui-btn-solid-shadow-c-${color}`, colorFormat)}]
			`,
			{ autocomplete: ["btn-solid", "btn-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)"] },
		],
		[
			/^btn-outline-(.*)$/,
			([, color]) => `
			  [--btn-outline-color:${getColorFormat(`--ui-btn-outline-${color}`, colorFormat)}]
			  [--btn-outline-color-hover:${getColorFormat(`--ui-btn-outline-${color}-hover`, colorFormat)}]
			  [--btn-outline-text-color:${getColorFormat(`--ui-btn-outline-${color}-text`, colorFormat)}]
			  [--btn-outline-text-color-hover:${getColorFormat(`--btn-ui-outline-${color}-hover`, colorFormat)}]
			  [--btn-focus-outline-color:${getColorFormat(`--btn-outline-text-color-hover`, colorFormat)}]
			`,
			{ autocomplete: ["btn-outline", "btn-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-outline-$colors"] },
		],
		[
			/^btn-soft-(.*)$/,
			([, color]) => `
			  [--btn-soft-bg-color:${getGhostSpftBtnUi(color, "soft", colorFormat)}]
			  [--btn-soft-bg-color-hover:${getGhostSpftBtnUi(`hover-${color}`, "soft", colorFormat)}]
			  [--btn-soft-bg-color-press:${getGhostSpftBtnUi(`press-${color}`, "soft", colorFormat)}]
			  [--btn-soft-text-color:${getColorFormat(`--ui-btn-soft-text-${color}`, colorFormat)}]
			  [--btn-focus-outline-color:${getColorFormat(`--ui-btn-soft-text-hover-${color}`, colorFormat)}]
			`,
			{ autocomplete: ["btn-soft", "btn-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-soft-$colors"] },
		],
		[
			/^btn-ghost-(.*)$/,
			([, color]) => `[--btn-ghost-bg-color-hover:${getGhostSpftBtnUi(`hover-${color}`, "ghost", colorFormat)}]
			  [--btn-ghost-bg-color-press:${getGhostSpftBtnUi(`press-${color}`, "ghost", colorFormat)}]
			  [--btn-ghost-text-color:${getColorFormat(`--ui-btn-ghost-text-${color}`, colorFormat)}]
			  [--btn-focus-outline-color:${getColorFormat(`--ui-btn-ghost-text-hover-${color}`, colorFormat)}]
			`,
			{ autocomplete: ["btn-ghost", "btn-ghost-(primary|secondary|accent|success|warning|info|danger|gray|neutral)", "btn-ghost-$colors"] },
		],
	];

	return [btns, ...dynamicBtns];
};

export { getBtnShortcuts, type Button };
