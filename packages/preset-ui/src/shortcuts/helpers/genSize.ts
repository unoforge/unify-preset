import { CardSizeBase, ElSizeBase, InputSizeBase, SizeVariantBase } from "@/types";
import { getConfigValue } from "@/utils";



const textSizes: Record<string, string> = {
    '2xs': "0.75rem",
    xs: "0.75rem",
    sm: "1rem",
    md: "1rem",
    base:"1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    '2xl': "1.5rem"
}

const convertSize = (size: number | string) => typeof size === 'number' ? `${size * 0.25}rem` : size

export const genUiSizes = (size: ElSizeBase, val: SizeVariantBase) => `[padding:var(--ui-s-py-${val},${convertSize(size.py)})_var(--ui-s-px-${val},${convertSize(size.px)})] [font-size:var(--ui-s-text-${val},_${textSizes[size.textSize]})]`

export const genInputSizes = (size: InputSizeBase, val: SizeVariantBase) => `
        [padding-left:var(--ui-input-px-${val},${convertSize(size.px)})]
        [padding-right:var(--ui-input-px-${val},${convertSize(size.px)})]
        [height:var(--ui-input-height-${val},${convertSize(size.height)})]
        [font-size:var(--ui-input-text-${val},_${textSizes[size.textSize]})]`


export const getUiCardSize = (sizeVariant: CardSizeBase) => `p-${getConfigValue(sizeVariant.padding)} text-${sizeVariant.textSize}`;
