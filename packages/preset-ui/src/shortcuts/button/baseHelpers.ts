import { Appearance } from "@/types";

export const genBtnVariantFlat = () => `bg-[--btn-flat-bg] hover-bg-[--btn-flat-hover-bg] focus-visible-outline-[--btn-flat-hover-bg] active-bg-[--btn-flat-press] [--btn-focus-outline-color:--btn-flat-hover-bg]`

export const genBtnVariantSolidBase = () => {
    return `bg-[--btn-solid-color] hover:bg-[--btn-solid-color-hover] 
            active-bg-[--btn-solid-color-press] 
            focus-visible-outline-[--btn-solid-color-hover]
            [background-image:radial-gradient(farthest-corner_at_50%_-50%,_rgba(255,_255,_255,_.1)_0%,_transparent_100%)]
            [box-shadow:inset_0px_2px_0_var(--btn-solid-top-shadow),_inset_0px_-2px_0_var(--btn-solid-bottom-shadow)]
            [--btn-focus-outline-color:--btn-solid-color-hover]`
}


export const genBtnVariantFlexiBase = () => {
    return `bg-[--btn-flexi-bg] shadow-[0_-1px_0_0px_var(--btn-flexi-shadow-a)_inset,0_0_0_1px_var(--btn-flexi-shadow-b)_inset,0_0.5px_0_1.5px_var(--btn-flexi-shadow-c)_inset] 
     hover:bg-[--btn-flexi-bg-hover] 
     active:bg-[--btn-flexi-bg-active] 
     focus:bg-[--btn-flexi-bg-active]
     active:[--btn-flexi-shadow-a:var(--btn-flexi-shadow-active-a)]
     active:[--btn-flexi-shadow-b:var(--btn-flexi-shadow-active-b)]
     active:[--btn-flexi-shadow-c:var(--btn-flexi-shadow-active-c)] 
     focus:[--btn-flexi-shadow-a:var(--btn-flexi-shadow-active-a)]
     focus:[--btn-flexi-shadow-b:var(--btn-flexi-shadow-active-b)]
     focus:[--btn-flexi-shadow-c:var(--btn-flexi-shadow-active-c)] 
     [--btn-focus-outline-color:var(--btn-flexi-bg-hover)]`;
};

export const genBtnOutlineBase = (appearance: Appearance) => {
    return `[background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--outline-radial-opacity))_0%,transparent_100%)] [box-shadow:rgba(255,255,255,var(--inner-border-color))_0px_1px_0px_0px_inset,var(--btn-outline-color)_0px_0px_0px_1px,0px_1px_2px_rgba(0,0,0,0.1)] hover:brightness-[0.98]  active:brightness-100  bg-[--btn-outline-bg] 
    hover:bg-[--btn-outline-bg-hover] active:bg-[--btn-outline-bg]
    text-[--btn-outline-text-color] focus-visible-outline-[--btn-outline-color-hover] 
    ${appearance === "light" || appearance === "both" ? `[--outline-radial-opacity:0.6] [--inner-border-color:1]` : ''}
    ${appearance === "dark" ? `[background-image:none] [--outline-radial-opacity:0.2] [--inner-border-color:0]` : appearance === "both" ? 'dark-[background-image:none] dark-[--inner-border-color:0] dark-[--outline-radial-opacity:0.2]' : ''}`
}

export const genBtnSoftBase = ({ isGhost }: { isGhost: boolean }) => {
    const key = isGhost ? 'ghost' : 'soft'
    return `
    ${isGhost ? 'bg-transparent' :
            `bg-[--btn-soft-bg-color]`
        }
    hover-bg-[--btn-${key}-bg-color-hover]
    active-bg-[--btn-${key}-bg-color-press]
    text-[--btn-${key}-text-color] 
    hover-text-[var(--btn-${key}-text-color-hover,--btn-${key}-text-color)]
    active-text-[var(--btn-${key}-text-color-hover,--btn-${key}-text-color)]
    [--btn-focus-outline-color:--btn-${key}-text-color]`
}

