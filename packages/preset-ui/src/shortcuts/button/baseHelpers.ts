export const genBtnVariantSolidBase = () => {
    return `
     bg-[--btn-solid-bg] shadow-[0_-1px_0_0px_var(--btn-solid-shadow-a)_inset,0_0_0_1px_var(--btn-solid-shadow-b)_inset,0_0.5px_0_1.5px_var(--btn-solid-shadow-c)_inset] 
     hover:bg-[--btn-solid-bg-hover] 
     active:bg-[--btn-solid-bg-active] 
     focus:bg-[--btn-solid-bg-active]
     active:[--btn-solid-shadow-a:--btn-solid-shadow-active-a]
     active:[--btn-solid-shadow-b:--btn-solid-shadow-active-b]
     active:[--btn-solid-shadow-c:--btn-solid-shadow-active-c] 
     focus:[--btn-solid-shadow-a:--btn-solid-shadow-active-a]
     focus:[--btn-solid-shadow-b:--btn-solid-shadow-active-b]
     focus:[--btn-solid-shadow-c:--btn-solid-shadow-active-c] 
     [--btn-focus-outline-color:--btn-solid-bg-hover]
    `;
};

export const genBtnOutlineBase = () => {
    return `
       border border-[--btn-outline-color] 
       hover-border-[--btn-outline-color-hover] 
       text-[--btn-outline-text-color] 
       hover-text-[--btn-outline-text-color-hover] focus-visible-outline-[--btn-outline-color-hover] 
    `
}

export const genBtnSoftBase = ({ isGhost }: { isGhost: boolean }) => {
    const key = isGhost ? 'ghost' : 'soft'
    return `
    ${isGhost ? 'bg-transparent' :
            `bg-[--btn-soft-bg-color]`
        }
    hover-bg-[--btn-${key}-bg-color-hover]
    active-bg-[--btn-${key}-bg-color-press]
    focus-bg-[--btn-${key}-bg-color-press]
    text-[--btn-${key}-text-color] 
    [--btn-focus-outline-color:--btn-${key}-text-color]`
}

