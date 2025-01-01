import type { UiConfig } from "@/types";
import { getRingOffsetBg } from "../shortcut_helper";
import { getRadioBase } from "./helper";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";

const getFormRadioShortcuts = () => {

	const baseUtilities = `disabled-op50 disabled-cursor-not-allowed outline-0 outline-transparent 
	focus-visible:ring-2 focus-visible:ring-current focus:ring-0 focus:ring-transparent focus:ring-offset-transparent 
	focus-visible:ring-offset-[--ui-ring-bg]
    focus-visible:ring-offset-2`;

	const dynamicRadio: Shortcut[] = [
		[
			/^form-input-radio(-(\S+))?$/,
			([, , color = "primary"]) => 
				`${baseUtilities} bg-[--ui-radio-bg] b b-[--ui-radio-border]
			text-[--ui-radio-text-${color}] checked-bg-current checked-b-transparent 
			indeterminate-bg-current indeterminate-b-transparent
			`,
			{ autocomplete: ["form-input-radio", "form-input-radio-(primary|secondary|accent|success|warning|info|danger|gray|neutral)","form-input-radio-$colors"], },
		],
	];
	return [...dynamicRadio];
};

export { getFormRadioShortcuts };
