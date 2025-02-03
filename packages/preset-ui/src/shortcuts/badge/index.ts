import type { ElSizeBase } from "@/types";
import { uiSizeVariants, genUiSizes, } from "../helpers";

import type { Badge } from "./types";

const getBadgeShortcuts = (
	badge?: Badge,
) => {
	const { xs, sm, md, xl, lg } = Object.assign({}, uiSizeVariants, badge?.sizes);

	const badges = {
		"badge-xs": `${genUiSizes(xs as ElSizeBase, "xs")}`,
		"badge-sm": `${genUiSizes(sm as ElSizeBase, "sm")}`,
		"badge-md": `${genUiSizes(md as ElSizeBase, "md")}`,
		"badge-lg": `${genUiSizes(lg as ElSizeBase, "lg")}`,
		"badge-xl": `${genUiSizes(xl as ElSizeBase, "xl")}`,
	};
	return [badges];
};

export { getBadgeShortcuts, type Badge };
