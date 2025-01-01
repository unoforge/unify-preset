import { getConfigValue } from "@/utils";
import { switchInfos } from "./const";
import type { switchSize } from "./types";
import { uiColorFormat } from "@/types";
import { getColorFormat } from "@/utils/colors-utils";

const getSwitchSize = (value: switchSize) => {
	return switchInfos[value];
};

const getInfoSizes = (size: switchSize) => {
	const sizeS = getSwitchSize(size);
	if (!sizeS) return "";
	return `checked:before:translate-x-${getConfigValue(
		sizeS.translateX,
	)} before:left-${getConfigValue(sizeS.left)} w-${getConfigValue(
		sizeS.width,
	)} h-${getConfigValue(sizeS.height)} before:size-${getConfigValue(
		sizeS.indicatorSize,
	)}`;
};
const getSwitchShortcuts = (colorFormat:uiColorFormat) => {
	const switchs = {
		switch: `appearance-none focus-visible:ring-2 focus-visible:ring-current focus:ring-0 focus:ring-transparent focus:ring-offset-transparent 
			focus-visible:[--un-ring-offset-color:var(${getColorFormat('--ui-ring-bg', colorFormat)})]
                focus-visible:ring-offset-2 relative disabled:opacity-50 disabled:cursor-not-allowed 
                indeterminate:bg-current indeterminate:border-transparent rounded-full cursor-pointer before:absolute 
                before:bg-[${getColorFormat('--switch-thumb', colorFormat)}] before:rounded-full before-content-empty
                before:top-1/2 before:-translate-y-1/2 checked:bg-none checked:!bg-current 
                checked:before:bg-[${getColorFormat('--switch-checked-thumb', colorFormat)}] before:duration-300 before:ease-linear`,
		"switch-sm": `${getInfoSizes("sm")}`,
		"switch-md": `${getInfoSizes("md")}`,
		"switch-lg": `${getInfoSizes("lg")}`,
		"switch-xl": `${getInfoSizes("xl")}`,
	};

	return [switchs];
};
export { getSwitchShortcuts };
