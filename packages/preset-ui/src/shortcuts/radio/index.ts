import { uiColorFormat } from "@/types";
import { getColorFormat } from "@/utils/colors-utils";

const getFormRadioShortcuts = (colorFormat:uiColorFormat) => {

	const baseUtilities = `disabled-op50 disabled-cursor-not-allowed outline-0 outline-transparent 
	focus-visible:ring-2 focus-visible:ring-current focus:ring-0 focus:ring-transparent focus:ring-offset-transparent 
	focus-visible:ring-offset-[${getColorFormat('--ui-radio-bg',colorFormat)}]
    focus-visible:ring-offset-2`;

	const radio ={
		"ui-form-radio":`${baseUtilities} checked-bg-current checked-b-transparent 
			indeterminate-bg-current indeterminate-b-transparent
			checked:preset-internal-radio-icon
			
			`,
	}

	
	return [radio];
};

export { getFormRadioShortcuts };
