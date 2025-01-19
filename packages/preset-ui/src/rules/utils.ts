import {
	progress_MeterHeightSize,
	radius,
	rangeSizes,
} from "./const";
import type { variantSize } from "./types";

export const getRangeSize = (val: variantSize) => {
	return rangeSizes[val];
};
export const getSizeProgress_Meter = (val: string) => {
	return progress_MeterHeightSize[val];
};

export const getRadius = (val: string) => {
	return radius[val];
};

