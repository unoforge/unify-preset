import type { Preset } from "unocss";
import type { Appearance, presetUiConfig, uiColorFormat } from "./types";
import { getAllShortcut } from "./shortcuts/";
import { getAllRules } from "./rules";
import { getAllVariants } from "./variants";
import { theme } from "./ui-theme";
import { presetBg } from "@unifydev/preset-bg";
import { ThingsToExclude, UiButton } from "./ui/type";
import { getAllUIShortcut } from "./ui";
import { getUiTheme } from "./ui-theme/ui";

function presetUI(config?: presetUiConfig): Preset {
	const colorFormat = config?.colorFormat || "hsl"
	const shortcuts = getAllShortcut({
		colorFormat,
		components: config?.components,
		baseVariants: config?.baseVariants,
	});

	const rules = getAllRules(colorFormat);
	const variants = getAllVariants(config?.prefixDataStateVariant || "fx");

	const presets = [
		presetBg(),
	]

	return {
		name: "unify-preset",
		variants,
		shortcuts,
		rules,
		theme,
		presets
	};
}




function presetUIHelper(config?: {
	variablePrefix?: string,
	colorFormat?: uiColorFormat,
	components?: {
		button?: UiButton
	},
	exclude?: ThingsToExclude,
	appearance?: Appearance
}): Preset {
	const colorFormat = config?.colorFormat || "hsl"
	const appearance = config?.appearance || "both"
	const varPrefix = config?.variablePrefix || "c"
	const excluded: ThingsToExclude | undefined = config?.exclude
	const shortcuts = getAllUIShortcut({
		prefix: varPrefix,
		colorFormat,
		components: config?.components,
		appearance: appearance,
		exclude: excluded
	});




	return {
		name: "preset-ui-helper",
		shortcuts,
		theme: getUiTheme(colorFormat, varPrefix)
	};
}

export { presetUI, presetUIHelper, type presetUiConfig };
