import { browserVariants } from "@unifydev/unify-variant";
import type { Variant } from "unocss";
import type { Theme } from "@unocss/preset-uno";

export const getAllVariants = () => {
	const variants = [
		browserVariants({
			variants: {
				"meter-inner-el": "::-webkit-meter-inner-element",
				"meter-optimum-val": "::-webkit-meter-optimum-value",
				"metter-bar": "::-webkit-meter-bar",
				"moz-meter-bar": "::-moz-meter-bar",

				"range-slider-thumb": "::-webkit-slider-thumb",
				"moz-range-thumb": "::-moz-range-thumb",
				"slider-runnable-track": "::-webkit-slider-runnable-track",
				"moz-range-track": "::-moz-range-track",

				"w-progress-bar": "::-webkit-progress-bar",
				"w-progress-value": "::-webkit-progress-value",
				"m-progress-bar": "::-moz-progress-bar",
				"w-indeterminate-p-value": ":indeterminate::-webkit-progress-value",

				'v-webkit-datetime-edit': '::-webkit-datetime-edit',
				'v-webkit-datetime-edit-year-field': '::-webkit-datetime-edit-year-field',
				'v-webkit-datetime-edit-month-field': '::-webkit-datetime-edit-month-field',
				'v-webkit-datetime-edit-day-field': '::-webkit-datetime-edit-day-field',
				'v-webkit-datetime-edit-hour-field': '::-webkit-datetime-edit-hour-field',
				'v-webkit-datetime-edit-minute-field': '::-webkit-datetime-edit-minute-field',
				'v-webkit-datetime-edit-second-field': '::-webkit-datetime-edit-second-field',
				'v-webkit-datetime-edit-millisecond-field': '::-webkit-datetime-edit-millisecond-field',
				'v-webkit-datetime-edit-meridiem-field': '::-webkit-datetime-edit-meridiem-field',
				'v-webkit-datetime-edit-fields-wrapper': '::-webkit-datetime-edit-fields-wrapper',
				'v-webkit-date-and-time-value': '::-webkit-date-and-time-value'
			},
		}),
	] as Variant<Theme>[];

	return variants;
};
