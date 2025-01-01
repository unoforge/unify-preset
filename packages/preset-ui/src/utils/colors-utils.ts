import type { Theme } from "unocss/preset-mini";

export const isValidColor = (color: string, theme: Theme) => {
	const colors = theme.colors;
	return !colors ? false : Object.keys(colors).includes(color);
};

