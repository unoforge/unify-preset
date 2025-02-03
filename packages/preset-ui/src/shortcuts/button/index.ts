import type { BtnIconBase, BtnSizeBase, Button } from "./types";
import { getConfigValue } from "@/utils";
import { btnCongig } from "./const";

import type { SharedFormConfig } from "@/types";
import { genBtnOutlineBase, genBtnSoftBase, genBtnVariantSolidBase } from "./baseHelpers";


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

}: { button?: Button; formConfig?: SharedFormConfig, }) => {
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


	return [btns];
};

export { getBtnShortcuts, type Button };
