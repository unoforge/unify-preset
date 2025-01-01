import type { Preset } from "unocss";
import type { presetUiConfig } from "./types";
import { getAllShortcut } from "./shortcuts/";
import { getAllRules } from "./rules";
import { getAllVariants } from "./variants";
import { theme } from "./ui-theme";
import { presetBg } from "@unifydev/preset-bg";

/**
 * presetUI
 * @param config
 * @returns
 */
function presetUI(config?: presetUiConfig): Preset {
	const shortcuts = getAllShortcut({
		components: config?.components,
		baseVariants:config?.baseVariants,
	});

	const rules = getAllRules();
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

export { presetUI, type presetUiConfig };
