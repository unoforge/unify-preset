
import { switchSizeVariants } from "./const";



const getSwitch = (size: "xs" | "sm" | "md" | "lg") => {
	const switchSize = switchSizeVariants[size]
	return `[--toggle-width:var(--ui-switch-${size}-w,${switchSize.width})]
	[--toggle-height:var(--ui-switch-${size}-h,${switchSize.height})]
	[--knob-size:var(--ui-switch-${size}-knob-size,${switchSize.knob.size})]
	[--knob-left:var(--ui-switch-${size}-knob-left,${switchSize.knob.left})]
	[--knob-top:var(--ui-switch-${size}-knob-top,${switchSize.knob.top})]
	[--knob-checked-left:var(--ui-switch-${size}-knob-checked-left,${switchSize.knob.checkedLeft})]
	`
}

const getSwitchOutline = (size: "xs" | "sm" | "md" | "lg") => {
	const switchSize = switchSizeVariants[size]
	return `[--toggle-width:var(--ui-switch-${size}-w,${switchSize.width})]
	[--toggle-height:var(--ui-switch-${size}-h,${switchSize.height})]
	[--knob-size:var(--ui-switch-${size}-knob-size,${switchSize.knob.size})]
	[--knob-left:calc(var(--ui-switch-${size}-knob-left,${switchSize.knob.left})_-_var(--switch-border-width))]
	[--knob-top:calc(var(--ui-switch-${size}-knob-top,${switchSize.knob.top})_-_var(--switch-border-width))]
	[--knob-checked-left:calc(var(--ui-switch-${size}-knob-checked-left,${switchSize.knob.checkedLeft})_-_var(--switch-border-width))]
	`
}
const getSwitchShortcuts = () => {
	const switchs = {
		switch: `appearance-none cursor-pointer w-[--toggle-width] h-[--toggle-height] rounded-[var(--toggle-radius,9999px)]
		relative before:absolute before:w-[var(--knob-width,var(--knob-size))] before:h-[var(--knob-height,var(--knob-size))] before:content-empty 
		before:bg-[--knob-bg] before:rounded-[var(--knob-radius,9999px)] ease-linear transition-all duration-300
		before:left-[--knob-left] before:top-[--knob-top] checked:before:left-[--knob-checked-left] before:ease-linear 
		before:transition-all before:duration-300 disabled:opacity-70 disabled:cursor-not-allowed 
		checked:bg-current checked:before:bg-[var(--knob-bg-checked,var(--knob-bg))]`,

		'switch-outline': `appearance-none
		[--switch-border-width:var(--ui-switch-border-width,1px)] [border-style:solid] [border-width:var(--switch-border-width)]
		cursor-pointer w-[--toggle-width] h-[--toggle-height] rounded-[var(--toggle-radius,9999px)]
		relative before:absolute before:w-[var(--knob-width,var(--knob-size))] before:h-[var(--knob-height,var(--knob-size))] before:content-empty 
		before:bg-[--knob-bg] before:rounded-[var(--knob-radius,9999px)] ease-linear transition-all duration-300
		before:left-[--knob-left] before:top-[--knob-top] checked:before:left-[--knob-checked-left] before:ease-linear 
		before:transition-all before:duration-300 disabled:opacity-70 disabled:cursor-not-allowed 
		checked:bg-current checked:before:bg-[var(--knob-bg-checked,var(--knob-bg))]`,

		"switch-xs": `${getSwitch("xs")}`,
		"switch-sm": `${getSwitch("sm")}`,
		"switch-md": `${getSwitch("md")}`,
		"switch-lg": `${getSwitch("lg")}`,

		"switch-outline-xs": `${getSwitchOutline("xs")}`,
		"switch-outline-sm": `${getSwitchOutline("sm")}`,
		"switch-outline-md": `${getSwitchOutline("md")}`,
		"switch-outline-lg": `${getSwitchOutline("lg")}`
	};

	return [switchs];
};
export { getSwitchShortcuts };
