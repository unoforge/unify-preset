import type { ElSizeBase } from "@/types";
import { InputSizes } from "./const";
import type { Input } from "./types";
import { genUiSizes } from "../helpers";


const getFormInputShortcuts = ({
	input,
}: { input?: Input }) => {

	const size = input?.size || InputSizes
	const _2xs = size["2xs"]
	const xs = size.xs;
	const sm = size.sm;
	const md = size.md;
	const lg = size.lg;
	const xl = size.xl;

	const borderFocus = `outline-offset-0 focus-outline focus-outline-offset-0 focus-outline-2 focus-outline-[--ui-input-focus-outline]`;

	const inputs = {
		'form-input': `wfull ${borderFocus}`,
		"form-input-gray": "bg-[--ui-input-bg-gray] text-[--ui-fg-input-gray] placeholder-text-[--ui-fg-placeholder]",
		"form-input-high-gray": "bg-[--ui-input-bg-high-gray] text-[--ui-fg-input-high-gray] placeholder-text-[--ui-fg-placeholder-high]",
		"form-input-higher-gray": "bg-[--ui-input-bg-higher-gray] text-[--ui-fg-input-higher-gray] placeholder-text-[--ui-fg-placeholder-higher]",
		"form-input-light-gray": "bg-[--ui-input-bg-light-gray] text-[--ui-fg-input-light-gray] placeholder-text-[--ui-fg-placeholder-light]",

		"form-input-2xs": `${genUiSizes(_2xs as ElSizeBase)}`,
		"form-input-xs": `${genUiSizes(xs as ElSizeBase)}`,
		"form-input-sm": `${genUiSizes(sm as ElSizeBase)}`,
		"form-input-md": `${genUiSizes(md as ElSizeBase)}`,
		"form-input-lg": `${genUiSizes(lg as ElSizeBase)}`,
		"form-input-xl": `${genUiSizes(xl as ElSizeBase)}`,
		"form-input-bordered": "border-[--ui-input-border]",
		"form-input-bordered-light": "border-[--ui-input-border-light]",
		"form-input-bordered-high": "border-[--ui-input-border-high]",
		"form-input-bordered-higher": "border-[--ui-input-border-higher]",
	};

	return [inputs];
};

export { getFormInputShortcuts, type Input };
