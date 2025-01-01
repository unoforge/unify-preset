export const genBtnVariantSolidBase = () => {
    return `
     bg-[--btn-solid-bg] shadow-[0_-1px_0_0px_var(--btn-solid-shadow-a)_inset,0_0_0_1px_var(--btn-solid-shadow-b)_inset,0_0.5px_0_1.5px_var(--btn-solid-shadow-c)_inset] 
     hover:bg-[--btn-solid-bg-hover] active:bg-[--btn-solid-bg-active] 
     active:[--btn-solid-shadow-a:--btn-solid-shadow-active-a]
     active:[--btn-solid-shadow-b:--btn-solid-shadow-active-b]
     active:[--btn-solid-shadow-c:--btn-solid-shadow-active-c] [--btn-focus-outline-color:--btn-solid-bg-hover]
    `;
};

export const genBtnOutlineBase = () => {
    return `
       hover-bg-[--btn-outline-color-hover]/10 
       border-[--btn-outline-color] 
       hover-border-[--btn-outline-color-hover] 
       text-[--btn-outline-text-color] 
       hover-text-[--btn-outline-text-color-hover] focus-visible-outline-[--btn-outline-color-hover] 
    `
}

export const genBtnSoftBase = ({ isGhost }: { isGhost: boolean }) => {
    return `
    ${isGhost ? 'bg-transparent' : 
        'bg-[--btn-soft-bg-color]'
    }
    hover-bg-[--btn-soft-bg-color-hover]
    active-bg-[--btn-soft-bg-color-press]
    text-[--btn-soft-text-color] 
    focus-visible-outline-[--btn-soft-bg-color-hover]`
}

