import type { Shortcut } from "unocss";

const getFormCheckboxShortcuts = () => {

	const baseUtilities = `disabled-op50 disabled-cursor-not-allowed outline-0 outline-transparent focus-visible:ring-1 focus-visible:ring-current focus:ring-0 focus:ring-transparent focus:ring-offset-transparent 
	focus-visible:ring-offset-[--ui-ring-bg]
	focus-visible:ring-offset-2`;

	const dynamicCheckboxes: Shortcut[] = [
		[
			/^form-input-checkbox(-(\S+))?$/,
			([, , color = "primary"]) => `${baseUtilities}
			bg-[--ui-checkbox-bg] b b-[--ui-checkbox-border]
			text-[--ui-checkbox-text-${color}] checked-bg-current checked-b-transparent 
			indeterminate-bg-current indeterminate-b-transparent`,
			{ autocomplete: ["form-input-checkbox", "form-input-checkbox-(primary|secondary|accent|success|warning|info|danger|gray|neutral)","form-input-checkbox-$colors"], },
		],
	];
	return [...dynamicCheckboxes];
};

export { getFormCheckboxShortcuts };
