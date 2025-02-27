import type { ElSizeBase, uiColorFormat } from "@/types";
import { InputSizes } from "./const";
import type { Input } from "./types";
import { genInputSizes } from "../helpers";
import { getColorFormat } from "@/utils/colors-utils";


const getFormInputShortcuts = ({
	input,
	colorFormat
}: { input?: Input, colorFormat: uiColorFormat }) => {

	const size = input?.size || InputSizes
	const _2xs = size["2xs"]
	const xs = size.xs;
	const sm = size.sm;
	const md = size.md;
	const lg = size.lg;
	const xl = size.xl;

	const borderFocus = `outline-offset-0 focus-outline focus-outline-offset-0 focus-border-transparent focus-outline-2 focus-outline-[${getColorFormat('--ui-input-focus-outline', colorFormat)}]`;

	const inputs = {
		'ui-form-input': `${borderFocus} disabled:hover:cursor-not-allowed disabled:opacity-80`,
		"ui-form-input-2xs": `${genInputSizes(_2xs as ElSizeBase, "2xs")}`,
		"ui-form-input-xs": `${genInputSizes(xs as ElSizeBase, "xs")}`,
		"ui-form-input-sm": `${genInputSizes(sm as ElSizeBase, "sm")}`,
		"ui-form-input-md": `${genInputSizes(md as ElSizeBase, "md")}`,
		"ui-form-input-lg": `${genInputSizes(lg as ElSizeBase, "lg")}`,
		"ui-form-input-xl": `${genInputSizes(xl as ElSizeBase, "xl")}`,
		'ui-form-base': `appearance-none wfull placeholder-[color:${getColorFormat('--ui-input-place-holder', colorFormat)}] invalid:[outline-color:${getColorFormat('--ui-input-invalid-outline', colorFormat)}] 
						[line-height:1.5rem] 
						`,
		'ui-form-select': ` [background-position:right_0.5rem_center]
          				[background-repeat:no-repeat] [background-size:1.5em_1.5em]
          				[padding-right:2.5rem] [print-color-adjust:exact]
						preset-internal-select-icon`,
		'ui-form-multiselect': `[background-image:unset] [background-position:unset] [background-repeat:unset] [background-size:unset] [padding-right:0.75rem] [print-color-adjust:unset]`,
		'ui-checkbox-radio-base': `appearance-none p-0  [print-color-adjust:exact]
          				[display:inline-block] [vertical-align:middle]
          				[background-origin:border-box] [user-select:none]  [flex-shrink:0]
          				[--un-shadow:0_0_#0000] focus-outline-2 
						focus-outline-offset-2 
						focus-[outline-color:var(--check-radio-offset-color,currentColor)] 
						focus-ring-0 focus-ring-transparent
						cheked-focus-[background-color:currentColor]
						checked-hover-[border-color:transparent]
						[border-color:transparent]
          				[background-color:currentColor]
          				[background-size:100%_100%]
          				[background-position:center]
          				[background-repeat:no-repeat]`
	};

	return [inputs];
};

export { getFormInputShortcuts, type Input };
