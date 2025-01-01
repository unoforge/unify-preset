

import type { Accordion } from "./types";
import type { Shortcut } from "unocss";

const getAccordionShortcuts = () => {

	const dynamicAccordions: Shortcut[] = [
		[
			/^accordion-wrapper-joined(-(\S+))?$/,
			([, , color = "gray"]) => `divide-[var(--ui-accordion-divider-size,1px)] divide-[--ui-accordion-divider-${color}]`,
			{ autocomplete: ["wrapper-joined", "wrapper-joined-$colors"] },
		],
		[
			/^accordion-item-border-bottom(-(\S+))?$/,
			([, , color = "gray"]) => `border-b-[--ui-border-${color}]`,
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

export { getAccordionShortcuts, type Accordion };
