export type ColorShade =
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "950"
    | "white"
    | "black"
    | "dark"
    | "light";

export type BaseVariant<T extends object> = {
    base?: {
        primary?: T;
        secondary?: T;
        accent?: T;
        success?: T;
        warning?: T;
        info?: T;
        danger?: T;
        gray?: T;
        white?: T;
        neutral?:T
    };
    custom?: Record<string, T>;
    global?: T;
};


export type formOutlineBase = {
	borderShade: ColorShade;
	hoverBorderShade: ColorShade;
	activeBorderShade: ColorShade;
	textShade: ColorShade;
	hoverTextShade: ColorShade;
};

export type UiFormOutline = formOutlineBase & {
	borderSize?: number | string;
	dark?: formOutlineBase;
};