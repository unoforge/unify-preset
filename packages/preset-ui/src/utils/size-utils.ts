import type { Theme } from "unocss/preset-mini";

export const isValidSize = (size: string, theme: Theme) => {
	const sizes_ = theme.spacing;
	return !sizes_ ? false : Object.keys(sizes_).includes(size);
};