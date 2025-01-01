import { toEscapedSelector as e } from "unocss";
import type { Rule, RuleContext } from "unocss";
import type { Theme } from "@unocss/preset-uno";
import type {  variantSize } from "./types";
import {
	getSizeProgress_Meter,
	getRadius,
	getRangeSize,
} from "./utils";

export const getAllRules = () => {
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
			/^meter-h-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({ "--metter-bar-height": `${getSizeProgress_Meter(d)}` }),
			{ autocomplete: "meter-h-(xs|sm|md|lg|xl|2xl)" },
		],
		[
			/^meter-rounded-(sm|md|lg|xl|full)$/,
			([, d]) => ({ "--metter-bar-radius": `${getRadius(d)}` }),
			{ autocomplete: "meter-rounded-(sm|md|lg|xl|full)" },
		],
		[
			/^range-thumb-size-(xs|sm|md|lg|xl)$/,
			([, d], { variantHandlers }) => {
				if (variantHandlers.length) return;
				return {
					"--range-slide-thumb-size": `${getRangeSize(d as variantSize).size}`,
					"--range-track-height": `${getRangeSize(d as variantSize).track}`,
					"--range-mt": `${getRangeSize(d as variantSize).mt}`,
				};
			},
			{ autocomplete: "range-thumb-size-(xs|sm|md|lg|xl)" },
		],
		[
			/^range-thumb-bg-(.*)$/,
			([, body]: string[], { }: RuleContext<Theme>) => {
				return {
					"--range-thumb-bg": `var(--range-thumb-bg-${body})`,
				};
			},
			{ autocomplete: "range-thumb-bg-$colors" },
		],
		[
			/^switch-checked-thumb-(.*)$/,
			([, body]: string[], { }: RuleContext<Theme>) => {
				return {
					"--switch-checked-thumb": `var(--switch-checked-thumb-${body})`,
				};
			},
			{ autocomplete: "switch-checked-thumb-$colors" },
		],
		[
			/^switch-thumb-(.*)$/,
			([, body]: string[], { }: RuleContext<Theme>) => {
				return {
					"--switch-thumb": `var(--switch-thumb-${body})`,
				};
			},
			{ autocomplete: "switch-thumb-$colors" },
		],
		[
			/^range-track-bg-(light|gray|high|higher)$/,
			([, name], { rawSelector, variantHandlers }) => {
				if (!["light", "gray", "high", "higher"].includes(name)) return;
				if (variantHandlers.length) return;
				const selector = e(rawSelector);
				return `
					${selector}{
					    --range-track-bg: var(--range-track-bg-${name})
					}`
			},
			{ autocomplete: "range-track-bg-(light|gray|high|higher)" },
		],
		[
			/^progress-bar-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({
				"--progressbar-height": `${getSizeProgress_Meter(d)}`,
			}),
			{ autocomplete: "progress-bar-(xs|sm|md|lg|xl|2xl)" },
		],
		[
			/^progress-bar-rounded-(sm|md|lg|xl|full)$/,
			([, d]) => ({ "--progress-bar-radius": `${getRadius(d)}` }),
			{ autocomplete: "progress-bar-rounded-(sm|md|lg|xl|full)" },
		],
		[
			/^progress-bar-bg-(light|gray|high|higher)$/,
			([, name], { rawSelector, variantHandlers }) => {
				if (!["light", "gray", "high", "higher"].includes(name)) return;
				if (variantHandlers.length) return;
				const selector = e(rawSelector);
				return `
					${selector}{
					    --progress-bar-bg: var(--progress-bar-bg-${name})
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
