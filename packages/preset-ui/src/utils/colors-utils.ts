

export const getColorFormat = (color: string, format_?: "rgb" | "hex" | "hsl") => {
	const format = format_ || "rgb";
	return format === "rgb" ? `rgb(var(${color}))` : format === "hex" ? `var(${color})` : `hsl(var(${color}))`;
}

export const getSubtleSoftUi = (color: string, type: "soft" | "subtle", format_?: "rgb" | "hsl"|"hex") => {
	const format = format_ || "rgb";
	const val = `var(--ui-${type}-bg-${color})/var(--${type}-opacity, .6)`
	return format === "rgb" ? `rgb(${val})` :
		`hsl(${val})`;
}

export const getGhostSpftBtnUi = (color: string, type: "soft" | "ghost", format_?: "rgb" | "hsl"|"hex") => {
	const format = format_ || "rgb";
	const val = `var(--ui-btn-${type}-bg-${color})/var(--btn-${type}-opacity, .6)`
	return format === "rgb" ? `rgb(${val})` :
		`hsl(${val})`;
}