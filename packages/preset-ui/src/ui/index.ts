
import { Appearance, uiColorFormat } from "@/types";
import type { Preset, StaticShortcutMap } from "unocss";
import { UiButton } from "./type";
import { getUiBtnShortcuts } from "./buttons";

export const getAllUIShortcut = ({
	components,
	colorFormat,
    appearance,
    prefix
}: {
	components?: {
        button?:UiButton
    };
	colorFormat: uiColorFormat;
    appearance:Appearance,
    prefix?:string
}) => {
	const btn = getUiBtnShortcuts({button:components?.button, colorFormat, appearance, prefix});

	const shortcuts = [
        ...btn
	] as Exclude<Preset["shortcuts"], undefined | StaticShortcutMap>;
	return shortcuts;
};
