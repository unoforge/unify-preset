import { PredefinedValues, ThingsToExclude } from "@/ui/type";
import type { Theme } from "unocss/preset-mini";


export const getConfigValue = (value: number | string | undefined) =>
	typeof value === "number"
		? value
		: typeof value === "string"
			? `[${value}]`
			: "";

/**
 * This function check to value 1: light and 2 : dark, if the 2 values are same then return an empty string to avoid CSS duplication in output
 * @param
 * @returns
 */
export const getShortcutsIfNotSame = ({
	val1,
	val2,
	shortcuts,
}: { val1: string; val2: string; shortcuts: string }) =>
	val1 === val2 ? "" : shortcuts;


export const isValidColor = (color: string, theme: Theme) => {
	const colors = theme.colors;
	return !colors ? false : Object.keys(colors).includes(color);
};



export const isVariantExcluded = (config: ThingsToExclude | undefined, type: keyof ThingsToExclude, variant: string, value: PredefinedValues) => {
	if (!config) return false

	const typeConfig = config[type];
	if (typeConfig === "all") return true;
	if (typeConfig === "none") return false;

	if (typeof typeConfig === 'object') {
		const variantConfig = typeConfig[variant as keyof typeof typeConfig];
		if (variantConfig === "all") return true;
		if (variantConfig === "none") return false;
		if (Array.isArray(variantConfig)) return variantConfig.includes(value);
	}
	return false;
}