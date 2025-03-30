import type { RingBase } from "@/types";
import type {
	BtnIconSizes,
	BtnSizes,
	Button,
} from "./types";




// xs: "text-sm h-7 px-3",
//             sm: "text-sm h-8 px-3.5",
//             md: "text-base h-9 px-4",
//             lg: "text-base h-10 px-5",
//             xl: "text-lg h-12 px-6",

const btnSizes: BtnSizes = {
	xs: {
		height: 7,
		px: 3,
		textSize: "sm",
	},
	sm: {
		height: 8,
		px: 3.5,
		textSize: "sm",
	},
	md: {
		height: 9,
		px: 4,
		textSize: "base",
	},
	lg: {
		height: 10,
		px: 5,
		textSize: "base",
	},
	xl: {
		height: 12,
		px: 6,
		textSize: "lg",
	},
};

const btnIconSizes: BtnIconSizes = {
	xs: {
		size: 6,
		textSize: "sm",
	},
	sm: {
		size: 8,
		textSize: "sm",
	},
	md: {
		size: 9.5,
		textSize: "base",
	},
	lg: {
		size: 10.5,
		textSize: "base",
	},
	xl: {
		size: 12,
		textSize: "base",
	},
};

const ringBase: RingBase = {
	size: 2,
	offset: 2,
};



export const btnCongig: Button = {
	sizes: btnSizes,
	iconSizes: btnIconSizes,
	ringBase,
};
