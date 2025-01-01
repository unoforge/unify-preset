import type { Preset, StaticShortcutMap } from "unocss";
import type { Components } from "./types";
import { getBtnShortcuts } from "./button";
import { getBadgeShortcuts } from "./badge";
import type {  SharedFormConfig, uiColorFormat, } from "../types";
import { getAspectRatioShortcuts } from "./aspect-ratio";
import { getAvatarShortcuts } from "./avatar";
import { getGeneralShortcuts } from "./utilities";
import { getDividerShortcuts } from "./divider";
import { getFormInputShortcuts } from "./input";
import { getKdbShortcuts } from "./kbd";
import { getAccordionShortcuts } from "./accordion";
import { getFormCheckboxShortcuts } from "./checkbox";
import { getFormRadioShortcuts } from "./radio";
import { getMeterShortcuts } from "./meter";
import { getRangeSlideShortcuts } from "./range";
import { getProgressBarShortcuts } from "./progress";
import { getSwitchShortcuts } from "./switch";
import { getUiShortcuts } from "./ui";
import type { BaseVariants } from "./ui/types";

export const getAllShortcut = ({
	components,
	form,
	baseVariants,
	colorFormat
}: {
	components?: Components;
	baseVariants?: BaseVariants,
	form?: SharedFormConfig;
	colorFormat: uiColorFormat;
}) => {
	const generalShortcuts = getGeneralShortcuts(colorFormat);

	const button = getBtnShortcuts({
		button: components?.button,
		formConfig: form,
		colorFormat
	});
	const badge = getBadgeShortcuts(components?.badge);

	const accordion = getAccordionShortcuts(colorFormat);
	const aspectRatio = getAspectRatioShortcuts();
	const avatar = getAvatarShortcuts(components?.avatar);
	const checkbox = getFormCheckboxShortcuts(colorFormat);
	const divider = getDividerShortcuts(colorFormat);

	const inputForm = getFormInputShortcuts({
		input: components?.input,
		colorFormat
	});
	const kbd = getKdbShortcuts({ kdb: components?.kbd, colorFormat});

	const meter = getMeterShortcuts();
	const progress = getProgressBarShortcuts(colorFormat);
	const radio = getFormRadioShortcuts(colorFormat);
	const range = getRangeSlideShortcuts(colorFormat);
	const switchShortcuts = getSwitchShortcuts(colorFormat);

	const uiShortcuts = getUiShortcuts( colorFormat,baseVariants)
	const shortcuts = [
		...generalShortcuts,
		...accordion,
		...aspectRatio,
		...avatar,
		...badge,
		...button,
		...checkbox,
		...divider,
		...inputForm,
		...kbd,
		...meter,
		...progress,
		...radio,
		...range,
		...switchShortcuts,
		...uiShortcuts
	] as Exclude<Preset["shortcuts"], undefined | StaticShortcutMap>;
	return shortcuts;
};
