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
        neutral?: T
    };
    custom?: Record<string, T>;
    global?: T;
};


export type formOutlineBase = {
    borderShade: ColorShade;
    borderOpacity?: number;
    textShade: ColorShade;
    bg: ColorShade,
    bgOpacity?: number,
    bgHover?: ColorShade,
    bgHoverOpacity?: number
};

export type UiBtnOutline = formOutlineBase & {
    borderSize?: number | string;
    dark?: formOutlineBase;
};