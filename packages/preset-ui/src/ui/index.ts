
import { Appearance, uiColorFormat } from "@/types";
import type { Preset, StaticShortcutMap } from "unocss";
import { ThingsToExclude, UiButton, UiCommon } from "./type";
import { getUiBtnShortcuts } from "./buttons";
import { getCommonUiShortcuts } from "./ui-variants";

export const getAllUIShortcut = ({
	components,
	colorFormat,
	appearance,
	prefix,
	exclude
}: {
	components?: {
		button?: UiButton,
		common?: UiCommon
	};
	colorFormat: uiColorFormat;
	appearance: Appearance,
	prefix?: string,
	exclude?: ThingsToExclude
}) => {
	const btn = getUiBtnShortcuts({ button: components?.button, colorFormat, appearance, prefix, exclude: exclude });

	const commonUi = getCommonUiShortcuts({ uiCommon: components?.common, colorFormat, appearance, prefix })
	const shortcuts = [
		...btn,
		...commonUi
	] as Exclude<Preset["shortcuts"], undefined | StaticShortcutMap>;
	return shortcuts;
};

