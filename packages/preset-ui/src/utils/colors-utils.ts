import { uiColorFormat } from "@/types";


export const getColorFormat = (color: string, format_?: uiColorFormat, defaultVar_?: string) => {
	const defaultVar = defaultVar_ && defaultVar_ !== '' ? `,${defaultVar_}` : '';
	const format = format_ || "hsl";
	return format === "rgb" ? `rgb(var(${color}${defaultVar}))` : format === "hex" ? `var(${color}${defaultVar})` : format === "oklch" ? `oklch(var(${color}${defaultVar}))` : format === "hsl" ? `hsl(var(${color}))` : `var(${color})`;
}