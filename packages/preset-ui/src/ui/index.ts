
import { Appearance, uiColorFormat } from "@/types";
import type { Preset, StaticShortcutMap } from "unocss";
import { UiButton, UiCommon } from "./type";
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
	exclude?: {
		button?: boolean,
		uiVariant?: boolean
	}
}) => {
	const btn = getUiBtnShortcuts({ button: components?.button, colorFormat, appearance, prefix, isExcuded: exclude?.button });

	const commonUi = getCommonUiShortcuts({ uiCommon: components?.common, colorFormat, appearance, prefix })
	const shortcuts = [
		...btn,
		...commonUi
	] as Exclude<Preset["shortcuts"], undefined | StaticShortcutMap>;
	return shortcuts;
};

