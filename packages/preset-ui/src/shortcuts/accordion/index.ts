

import { uiColorFormat } from "@/types";
import type { Shortcut } from "unocss";
import { getColorFormat } from "@/utils/colors-utils";

const getAccordionShortcuts = (colorFormat:uiColorFormat) => {

	const dynamicAccordions: Shortcut[] = [
		[
			/^accordion-wrapper-joined(-(\S+))?$/,
			([, , color = "gray"]) => `divide-[var(--ui-accordion-divider-size,1px)] divide-[${getColorFormat(`--ui-accordion-divider-${color}`, colorFormat)}]`,
			{ autocomplete: ["wrapper-joined", "wrapper-joined-$colors"] },
		],
		[
			/^accordion-item-border-bottom(-(\S+))?$/,
			([, , color = "gray"]) => `border-b-[${getColorFormat(`--ui-border-${color}`, colorFormat)}]`,
			{
				autocomplete: [
					"accordion-item-border-bottom",
					"accordion-item-border-bottom-$colors",
				],
			},
		],
	];

	return [...dynamicAccordions];
};

export { getAccordionShortcuts };
