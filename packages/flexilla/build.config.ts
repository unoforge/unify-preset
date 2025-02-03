import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: ['src/index'],
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true,
    },
    externals: ['unocss','@unifydev/unify-variant', '@unocss/preset-uno'],
    failOnWarn:false,
})