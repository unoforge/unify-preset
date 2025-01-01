import { uiColorFormat } from "@/types";
import { getColorFormat } from "@/utils/colors-utils";

const getFormCheckboxShortcuts = (colorFormat:uiColorFormat) => {

	const baseUtilities = `disabled-op50 disabled-cursor-not-allowed outline-0 outline-transparent focus-visible:ring-1 focus-visible:ring-current focus:ring-0 focus:ring-transparent focus:ring-offset-transparent 
	focus-visible:ring-offset-[${getColorFormat(`--ui-ring-bg`, colorFormat)}]
	focus-visible:ring-offset-2`;

	const checkbox = {
		"form-input-checkbox":`${baseUtilities} bg-[${getColorFormat(`--ui-checkbox-bg`, colorFormat)}] b b-[${getColorFormat(`--ui-checkbox-border`, colorFormat)}]
			checked-bg-current checked-b-transparent 
			indeterminate-bg-current indeterminate-b-transparent`
	}


	return [checkbox];
};

export { getFormCheckboxShortcuts };
