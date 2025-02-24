
const getRangeSlideShortcuts = () => {
    const ranges = {
        "moz-range-slide-thumb":
            `relative z-4 appearance-none rounded-full ring-2 ring-current size-[--ui-range-thumb-size] 
            mt-[calc(var(--ui-range-mt)*-1)] border-0 bg-[--ui-range-thumb-bg]`,
        "moz-range-slide-track":
            `group-disabled:bg-opacity-50 bg-[--ui-range-track-bg] h-[--ui-range-track-height] rounded-lg z-5`,
        'ui-input-range': `w-full absolute appearance-none bg-transparent
                     disabled:cursor-not-allowed disabled:opacity-50
                     range-slider-thumb:relative range-slider-thumb:ring-2 
                     range-slider-thumb:ring-current 
                     range-slider-thumb:bg-[--ui-range-thumb-bg] 
                     range-slider-thumb:size-[--ui-range-thumb-size] 
                     range-slider-thumb:mt-[calc(var(--ui-range-mt)*-1)]  
                     range-slider-thumb:appearance-none range-slider-thumb:rounded-full
                     range-slider-thumb:relative
                     range-slider-thumb:z-4
                     slider-runnable-track:text-current
                     slider-runnable-track:group-disabled:bg-opacity-60
                     slider-runnable-track:rounded-lg  
                     slider-runnable-track:bg-[--ui-range-track-bg]  
                     slider-runnable-track:h-[--ui-range-track-height]
                     slider-runnable-track:z-5
                     moz-range-thumb:moz-range-slide-thumb 
                     moz-range-track:moz-range-slide-track outline-0 outline-transparent focus-visible-outline focus-visible:outline-2 focus-visible:outline-current outline-transparent 
                     focus-visible:outline-offset-2`,
    };
    return [ranges];
};
export { getRangeSlideShortcuts };
