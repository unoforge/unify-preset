
import type { uiColorFormat } from "@/types";
import { getColorFormat } from "@/utils/colors-utils";
import type { Shortcut } from "unocss";

const getDividerShortcuts = (colorFormat:uiColorFormat) => {
	const dividers = {
		"divider-hr-2": "border-2",
		"divider-hr-3": "border-3",
		"divider-hr-4": "border-4",
		"divider-hr-6": "border-6",
		"divider-hr-8": "border-8",
		"divider-custom":
			"relative before-absolute before-content-empty before-inset-x-0 flex items-center",
		"divider-custom-1": "before-h-px ",
		"divider-custom-2": "before-h-2px",
		"divider-custom-3": "before-h-3px",
		"divider-custom-4": "before-h-4px",
		"divider-custom-6": "before-h-6px",
		"divider-custom-8": "before-h-8px",
	};
	const dynamicDividers: Shortcut[] = [
		[
			/^divider-hr-border(-(\S+))?$/,
			([, , color = "gray"]) => `border-[${getColorFormat(`--ui-divider-${color}`, colorFormat)}]`,
		],
		[
			/^divider-custom-bg(-(\S+))?$/,
			([, , color = "gray"]) => `bg-[${getColorFormat(`--ui-divider-bg-${color}`, colorFormat)}]`,
		],
	];
	return [dividers, ...dynamicDividers];
};

export { getDividerShortcuts };
