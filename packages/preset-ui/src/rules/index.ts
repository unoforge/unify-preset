import { toEscapedSelector as e } from "unocss";
import type { Rule, RuleContext } from "unocss";
import type { Theme } from "@unocss/preset-uno";
import type { variantSize } from "./types";
import {
	getSizeProgress_Meter,
	getRadius,
	getRangeSize,
} from "./utils";
import { uiColorFormat } from "@/types";
import { getColorFormat } from "@/utils/colors-utils";

export const getAllRules = (colorFormat: uiColorFormat) => {
	const encodeSvg = (svg: any) =>
		`data:image/svg+xml,${svg
			.replace(
				'<svg',
				~svg.indexOf('xmlns')
					? '<svg'
					: '<svg xmlns="http://www.w3.org/2000/svg"',
			)
			.replace(/"/g, '\'')
			.replace(/%/g, '%25')
			.replace(/#/g, '%23')
			.replace(/{/g, '%7B')
			.replace(/}/g, '%7D')
			.replace(/</g, '%3C')
			.replace(/>/g, '%3E')}`

	const rules = [
		[/^cp-?(\d*\.?\d+)$/, match => ({ '--card-padding': `${Number(match[1]) / 4}rem` })],	
		// Handle pixel values for padding
		[/^cp-?(\d+)px$/, match => ({ '--card-padding': `${match[1]}px` })],
		// Handle rem values for padding
		[/^cp-?(\d+)rem$/, match => ({ '--card-padding': `${match[1]}rem` })],
		// Handle numeric values (converted to rem)
		[/^c-rd-(\d*\.?\d+)$/, match => ({ '--card-radius': `${Number(match[1]) / 4}rem` })],
		// Handle pixel values
		[/^c-rd-(\d+)px$/, match => ({ '--card-radius': `${match[1]}px` })],
		[/^c-rd-(\d+)rem$/, match => ({ '--card-radius': `${match[1]}rem` })],
		// Handle named sizes matching UnoCSS rounded utilities
		[/^c-rd-(none|sm|md|lg|xl|2xl|3xl|full)$/, ([, d]) => ({ '--card-radius': getRadius(d) })],
		[
			"u-fx-popper",
			{
				position: "fixed",
				left: "var(--fx-popper-placement-x)",
				top: "var(--fx-popper-placement-y)",
			},
		],
		[
			"preset-internal-select-icon", {
				'background-image': `url("${encodeSvg(
					`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="#94a3b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`,
				)}")`
			}
		],
		[
			"preset-internal-checkbox-icon", {
				'background-image': `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`
			}
		],
		[
			"preset-internal-checkbox-indeterminate-icon", {
				'background-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")`
			}
		],
		[
			"preset-internal-radio-icon", {
				'background-image': `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`
			}
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
					"--ui-range-thumb-bg": `${getColorFormat(`--range-thumb-bg-${body}`, colorFormat)}`,
				};
			},
			{ autocomplete: "range-thumb-bg-$colors" },
		],
		[
			/^switch-checked-knob-(.*)$/,
			([, body]: string[], { }: RuleContext<Theme>) => {
				return {
					"--knob-bg-checked": `${getColorFormat(`--switch-checked-knob-${body}`, colorFormat)}`,
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
					    --ui-range-track-bg: ${getColorFormat(`--range-track-bg-${name}`, colorFormat)}
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
		],


	] as Rule<Theme>[];

	return rules;
};
