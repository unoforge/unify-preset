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
		'form-input': `wfull placeholder-[color:${getColorFormat('--ui-input-place-holder',colorFormat)}] invalid:[outline-color:${getColorFormat('--ui-input-invalid-outline',colorFormat)}] ${borderFocus} disabled:hover:cursor-not-allowed disabled:opacity-80`,
		"form-input-2xs": `${genInputSizes(_2xs as ElSizeBase, "2xs")}`,
		"form-input-xs": `${genInputSizes(xs as ElSizeBase, "xs")}`,
		"form-input-sm": `${genInputSizes(sm as ElSizeBase, "sm")}`,
		"form-input-md": `${genInputSizes(md as ElSizeBase, "md")}`,
		"form-input-lg": `${genInputSizes(lg as ElSizeBase, "lg")}`,
		"form-input-xl": `${genInputSizes(xl as ElSizeBase, "xl")}`,
	};

	return [inputs];
};

export { getFormInputShortcuts, type Input };
