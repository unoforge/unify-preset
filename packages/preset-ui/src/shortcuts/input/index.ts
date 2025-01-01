import type { ElSizeBase, uiColorFormat } from "@/types";
import { InputSizes } from "./const";
import type { Input } from "./types";
import { genUiSizes } from "../helpers";
import { getColorFormat } from "@/utils/colors-utils";


const getFormInputShortcuts = ({
	input,
	colorFormat
}: { input?: Input, colorFormat:uiColorFormat }) => {

	const size = input?.size || InputSizes
	const _2xs = size["2xs"]
	const xs = size.xs;
	const sm = size.sm;
	const md = size.md;
	const lg = size.lg;
	const xl = size.xl;

	const borderFocus = `outline-offset-0 focus-outline focus-outline-offset-0 focus-outline-2 focus-outline-[${getColorFormat('--ui-input-focus-outline', colorFormat)}]`;

	const inputs = {
		'form-input': `wfull ${borderFocus}`,
		
		"form-input-2xs": `${genUiSizes(_2xs as ElSizeBase)}`,
		"form-input-xs": `${genUiSizes(xs as ElSizeBase)}`,
		"form-input-sm": `${genUiSizes(sm as ElSizeBase)}`,
		"form-input-md": `${genUiSizes(md as ElSizeBase)}`,
		"form-input-lg": `${genUiSizes(lg as ElSizeBase)}`,
		"form-input-xl": `${genUiSizes(xl as ElSizeBase)}`,
	};

	return [inputs];
};

export { getFormInputShortcuts, type Input };
