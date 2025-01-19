import type {
	BorderPrefix,
} from "@/types";


export type AccordionItemBordered = {
	prefix?: BorderPrefix;
};

export type Accordion = {
	
	itemWithBorder?: AccordionItemBordered;
};
