<p align="center">
  <img src="./favicon-dark.png" style="width:100px;" />
  <h1 align="center">UnoUI Preset</h1>
  <p align="center">UnoCSS Toolkit.</p>
</p>


## UnoUI (UnifyUI-Preset)

UnoUI Preset is a collection of UnoCSS Presets.

> **Not** : This project is a WIP, you can test it and report bug... Your contribution is much valualed for us, help us to make it better.

### Preset UI

Preset UI stands at the forefront of UI customization, offering a comprehensive theming library designed to empower developers and designers alike. At its core, preset-ui leverages the power and flexibility of UnoCSS and provides a variety of themes that can be easily customized to match your brand and style.

[Read more here](./packages/preset-ui/README.md)

#### Install Preset UI

```bash
npm i -D @unifydev/preset-ui
# or
yarn add @unifydev/preset-ui -D
# or
pnpm add @unifydev/preset-ui -D
```

### UnifyVariant

This is a preset package that provides variants for Components Libraries based on data-state attribute value, and help to create custom variant selector.

[Know more here](./packages/unify-variant/README.md)


### Config

in your uno.config.(ts|js)

```js

import {
  defineConfig, presetAttributify, presetWind3,
} from "unocss";

import { colors } from "@unocss/preset-mini/colors";

// import the preset
import {presetUI} from "@unifydev/preset-ui"


export default defineConfig({
  presets: [
    presetWind3({dark: "class"}),
    presetAttributify(), // optional
    presetUI({}),
  ],
});

```

### Use PresetUI

```html
<div class="space-y-6">
  <h1 class="text-xl font-semibold ui-title">
      Badges
  </h1>
  <div class="p6 flex flex-wrap gap4 rd-lg bdr-gray">
      <span class="badge-md ui-solid ui-solid-gray rd-sm">
          badge
      </span>
      <span un-badge="md" ui-solid="~ gray" rd-sm>
          badge
      </span>
  </div>
</div>
```

## Contributing

If you're interested in contributing to Uno-UI, please read our [contributing docs](CONTRIBUTING.MD) before submitting a pull request.

### Join Our Community 🌍

Contribute, collaborate, and become a part of our mission 🚀
- [Discord Community](https://discord.gg/6VN6zTPZAy)


## Acknowledgments 🌟

- [Antfu](https://github.com/antfu) 
- [UnoCSS](https://github.com/unocss/unocss)
- [Phojie Rengel](https://github.com/phojie) - [Una UI](https://github.com/una-ui/una-ui)


## Support Us

If you like this project and want to support us, feel free to get in touch with one of maintainers : 

- [Johnkat MJ](mailto:johnkatembue4@gmail.com)