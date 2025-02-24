import { getRealOpacityValue } from "@/shortcuts/shortcut_helper";
import { uiColorFormat } from "@/types";
import { ColorShade } from "@/types/ui-t";


export const getColorFormat = (color: string, format_?: uiColorFormat, defaultVar_?: string) => {
	const defaultVar = defaultVar_ && defaultVar_ !== '' ? `,${defaultVar_}` : '';
	const format = format_ || "hsl";
	return format === "rgb" ? `rgb(var(${color}${defaultVar}))` : format === "hex" ? `var(${color}${defaultVar})` : format === "oklch" ? `oklch(var(${color}${defaultVar}))` : format === "hsl" ? `hsl(var(${color}))` : `var(${color})`;
}

export const getColorFormatWithOpacity = (color: string, opacity: number, format_?: uiColorFormat, defaultVar_?: string) => {
	const defaultVar = defaultVar_ && defaultVar_ !== '' ? `,${defaultVar_}` : '';
	const format = format_ || "hsl";
	return format === "rgb" ? `rgb(var(${color}${defaultVar})/${getRealOpacityValue(opacity)})`
		: format === "hex" ? `var(${color}${defaultVar})`
			: format === "oklch" ? `oklch(var(${color}${defaultVar})/${getRealOpacityValue(opacity)})`
				: format === "hsl" ? `hsl(var(${color})/${getRealOpacityValue(opacity)})`
					: `var(${color}/${opacity})`;
}
export const getVarName = (color: string, shade?: ColorShade, prefix: string = 'c') => {
	const colorName = color === 'white' || color === 'neutral' ? 'gray' : color;
	const prefixStr = prefix === 'none' || prefix === '' ? '' : `${prefix}-`;
	
	if (shade === 'white') {
		return `--${prefixStr}white`;
	}
	if (shade === 'black') {
		return `--${prefixStr}${colorName}`;
	}
	return `--${prefixStr}${colorName}-${shade}`;
};
