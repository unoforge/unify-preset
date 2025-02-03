import { Preset } from 'unocss'
import { getAllVariants } from './flexillaVariants'

type MyPresetOptions = {
    prefix?: string
}

function flexillaPreset(options: MyPresetOptions = { prefix: "fx" }): Preset {
    return {
        name: '@unifydev/flexilla',
        variants: getAllVariants(options.prefix),
        shortcuts: {
            'ui-tabs-indicator': 'absolute transform-origin-[0_0] w-[var(--un-tab-indicator-width)] h-[var(--un-tab-indicator-height)] top-[var(--un-tab-indicator-top)] left-[var(--un-tab-indicator-left)]',
            'ui-animated-modal-content': 'animate-[var(--un-modal-animation)] animate-fill-both',
            'ui-animated-tab-panel': 'animate-[var(--un-tab-show-animation)] animate-fill-both',
            'ui-overlay': 'fixed inset-0'
        },
        rules: [
            [
                'ui-popper', {
                    position: "fixed",
                    left: "var(--fx-popper-placement-x)",
                    top: "var(--fx-popper-placement-y)"
                }
            ]
        ]
    }
}

export { flexillaPreset }