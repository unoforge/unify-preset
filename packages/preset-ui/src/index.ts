import type { Preset } from "unocss";
import type { Appearance, presetUiConfig, uiColorFormat } from "./types";
import { getAllShortcut } from "./shortcuts/";
import { getAllRules } from "./rules";
import { getAllVariants } from "./variants";
import { theme } from "./ui-theme";
import { presetBg } from "@unifydev/preset-bg";
import { UiButton } from "./ui/type";
import { getAllUIShortcut } from "./ui";


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
	prefix?: string,
	colorFormat?: uiColorFormat,
	components?: {
		button?: UiButton
	},
	appearance?: Appearance
}): Preset {
	const colorFormat = config?.colorFormat || "hsl"
	const shortcuts = getAllUIShortcut({
		prefix: config?.prefix,
		colorFormat,
		components: config?.components,
		appearance: config?.appearance || "both"
	});



	return {
		name: "preset-ui-helper",
		shortcuts,
	};
}

export { presetUI, presetUIHelper, type presetUiConfig };
