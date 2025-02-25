import { toEscapedSelector as e } from "unocss";
import type { Rule, RuleContext } from "unocss";
import type { Theme } from "@unocss/preset-uno";
import type {  variantSize } from "./types";
import {
	getSizeProgress_Meter,
	getRadius,
	getRangeSize,
} from "./utils";
import { uiColorFormat } from "@/types";
import { getColorFormat } from "@/utils/colors-utils";

export const getAllRules = (colorFormat:uiColorFormat) => {
	const rules = [
		[
			"u-fx-popper",
			{
				position: "fixed",
				left: "var(--fx-popper-placement-x)",
				top: "var(--fx-popper-placement-y)",
			},
		],
		[
			"moz-meter",
			{
				height: "var(--metter-bar-height)",
				"border-radius": "var(--metter-bar-radius)",
				"border-style": "none",
				"background-color": "currentColor",
				"background-image": "none",
				transition: "all cubic-bezier(0.4, 0, 0.2, 1) 150ms",
			},
		],
		[
			/^ui-meter-h-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({ "--metter-bar-height": `${getSizeProgress_Meter(d)}` }),
			{ autocomplete: "meter-h-(xs|sm|md|lg|xl|2xl)" },
		],
		[
			/^ui-meter-rounded-(sm|md|lg|xl|full)$/,
			([, d]) => ({ "--metter-bar-radius": `${getRadius(d)}` }),
			{ autocomplete: "meter-rounded-(sm|md|lg|xl|full)" },
		],
		[
			/^ui-range-thumb-size-(xs|sm|md|lg|xl)$/,
			([, d], { variantHandlers }) => {
				if (variantHandlers.length) return;
				return {
					"--ui-range-thumb-size": `${getRangeSize(d as variantSize).size}`,
					"--ui-range-track-height": `${getRangeSize(d as variantSize).track}`,
					"--ui-range-mt": `${getRangeSize(d as variantSize).mt}`,
				};
			},
			{ autocomplete: "range-thumb-size-(xs|sm|md|lg|xl)" },
		],
		[
			/^ui-range-thumb-bg-(.*)$/,
			([, body]: string[], { }: RuleContext<Theme>) => {
				return {
					"--ui-range-thumb-bg": `${getColorFormat(`--range-thumb-bg-${body}`,colorFormat)}`,
				};
			},
			{ autocomplete: "range-thumb-bg-$colors" },
		],
		[
			/^switch-checked-knob-(.*)$/,
			([, body]: string[], { }: RuleContext<Theme>) => {
				return {
					"--knob-bg-checked": `${getColorFormat(`--switch-checked-knob-${body}`,colorFormat)}`,
				};
			},
			{ autocomplete: "switch-checked-knob-$colors" },
		],
		[
			/^switch-knob-(.*)$/,
			([, body]: string[], { }: RuleContext<Theme>) => {
				return {
					"--knob-bg": `${getColorFormat(`--switch-knob-${body}`, colorFormat)}`,
				};
			},
			{ autocomplete: "switch-knob-bg-$colors" },
		],
		[
			/^ui-range-track-bg-(light|gray|high|higher)$/,
			([, name], { rawSelector, variantHandlers }) => {
				if (!["light", "gray", "high", "higher"].includes(name)) return;
				if (variantHandlers.length) return;
				const selector = e(rawSelector);
				return `
					${selector}{
					    --ui-range-track-bg: ${getColorFormat(`--range-track-bg-${name}`,colorFormat)}
					}`
			},
			{ autocomplete: "ui-range-track-bg-(light|gray|high|higher)" },
		],
		[
			/^ui-progress-bar-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({
				"--progressbar-height": `${getSizeProgress_Meter(d)}`,
			}),
			{ autocomplete: "progress-bar-(xs|sm|md|lg|xl|2xl)" },
		],
		[
			/^ui-progress-bar-rounded-(sm|md|lg|xl|full)$/,
			([, d]) => ({ "--progress-bar-radius": `${getRadius(d)}` }),
			{ autocomplete: "progress-bar-rounded-(sm|md|lg|xl|full)" },
		],
		[
			/^ui-progress-bar-bg-(light|gray|high|higher)$/,
			([, name], { rawSelector, variantHandlers }) => {
				if (!["light", "gray", "high", "higher"].includes(name)) return;
				if (variantHandlers.length) return;
				const selector = e(rawSelector);
				return `
					${selector}{
					    --progress-bar-bg: ${getColorFormat(`--progress-bar-bg-${name}`, colorFormat)}
					}`;
			},
			{ autocomplete: "progress-bar-bg-(light|gray|high|higher)" },
		],
		[
			/^moz-progress-(.+)$/,
			([, name], { rawSelector }) => {
				if (!name.includes("bar")) return;
				const selector = e(rawSelector);
				return `
					${selector}::-moz-progress-bar{
						transition: all 150ms linear;
						border-radius: var(--progress-bar-radius);
						background-color: currentColor;
						width: 100%;
					}
					@supports(selector(&::-moz-progress-bar)) {
						${selector} {
							background-color: var(--progress-bar-bg);
							border-radius: var(--progress-bar-radius);
						}
					}`;
			},
		]

	] as Rule<Theme>[];

	return rules;
};
