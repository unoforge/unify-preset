import type { TextVariantBase, uiColorFormat } from "@/types";
import { helperDefaultValues } from "../helpers";
import type { Shortcut } from "unocss";
import { getColorFormat } from "@/utils/colors-utils";


const getGeneralShortcuts = (colorFormat:uiColorFormat) => {
	const textTypo = helperDefaultValues.textTypo
	const utils: Record<string, string> = {
		// typo
		"text-title": `text-[${getColorFormat("--ui-fg-title", colorFormat)}]`,
		"text-title-reverse": `text-[${getColorFormat("--ui-fg-title-reverse", colorFormat)}]`,
		"text-sub-title": `text-[${getColorFormat("--ui-fg-title-sub-title", colorFormat)}]`,
		"text-sub-title-reverse": `text-[${getColorFormat("--ui-fg-title-sub-title-reverse", colorFormat)}]`,
		"text-body": `text-[${getColorFormat("--ui-fg-body", colorFormat)}]`,
		"text-body-reverse": `text-[${getColorFormat("--ui-fg-body-reverse", colorFormat)}]`,
		"text-sub-body": `text-[${getColorFormat("--ui-fg-sub-body", colorFormat)}]`,
		"text-sub-body-reverse": `text-[${getColorFormat("--ui-fg-sub-body-reverse", colorFormat)}]`,

		
		"ui-bg-clip-text": "text-transparent bg-clip-text",
		"ui-text-transparent": "text-transparent bg-clip-text",

		//flex
		"d-flex-justify-center": "flex justify-center",
		"d-flex-justify-start": "flex justify-start",
		"d-flex-justify-end": "flex justify-end",
		"d-flex-items-start": "flex items-start",
		"d-flex-items-center": "flex items-center",
		"d-flex-items-end": "flex items-end",
		"d-flex-between": "flex justify-between",
		"d-flex-place-center": "flex justify-center items-center",

		// pseudo before and after 
		"before-empty": "before-absolute before-content-empty",
		"after-empty": "after-absolute after-content-empty",
		"before-after-empty": "before-absolute before-content-empty after-absolute after-content-empty",
		"before-0-x": "before-empty before-inset-x-0",
		"before-0-y": "before-empty before-inset-y-0",
		'before-0': "before-empty before-inset-0",
		"after-0-x": "after-empty after-inset-x-0",
		"after-0-y": "after-empty after-inset-y-0",
		'after-0': "after-empty after-inset-0",
		"before-after-0-x": "before-empty before-inset-x-0 after-empty inset-x-0",
		"before-after-0-y": "before-empty before-inset-y-0 after-empty inset-y-0",
		'before-after-0': "before-empty after-empty before-inset-0 after-inset-0"
	};


	const dynamicUtils: Shortcut[] = [
		[
			/^(txt|ui-text)-(xs-body|x-body|body|x-title|title|l-title)$/,
			([, size]) => {
				if (["xs-body", "x-body", "body", "x-title", "title", "l-title"].includes(size)) {
					return `${textTypo[size as TextVariantBase]}`
				}
			},
			{ autocomplete: ["(txt|ui-text)-(xs-body|x-body|body|x-title|title|l-title)"] },
		],
	];

	return [utils, ...dynamicUtils];
};
export { getGeneralShortcuts };
