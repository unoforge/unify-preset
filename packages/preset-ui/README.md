<p align="center">
  <img src="./favicon-dark.png" style="width:100px;" />
  <h1 align="center">Preset UI</h1>
  <p align="center">UnoCSS Theming Toolkit.</p>
</p>

## Preset-UI

Preset UI stands at the forefront of UI customization, offering a comprehensive theming library designed to empower developers and designers alike. At its core, preset-ui leverages the power and flexibility of UnoCSS and provides a variety of themes that can be easily customized to match your brand and style.

> **Not** : This project is a WIP, you can test it and report bug... Your contribution is much valualed for us, help us to make it better.

## Concepts 🧠

- **🖌️ Component-Level Theming:** Customize each component independently, allowing for detailed personalization while maintaining overall harmony.

- **🎯 Atomic Library:** Following UNOCSS design principles, Unify Preset adopts an atomic approach . It generates CSS only for the utilities you use, optimizing both speed and efficiency.

## Features

- **Atomic Library by Nature:** Configure what you need, and use when you need it.
- **🛠️ Customizable:** Tailor each component to fit your vision, ensuring a unique and cohesive look across your application.
- **📈 Efficient Scaling:** Our preset ensures your project remains lightweight and fast, no matter its size.
- **🎨 Consistent Yet Flexible:** Achieve a consistent look and feel without sacrificing the creativity and uniqueness of individual components.

## Usage

### Installation

```bash
npm i -D @unifydev/preset-ui
# or
yarn add @unifydev/preset-ui -D
# or
pnpm add @unifydev/preset-ui -D
```

### Config

in your uno.config.(ts|js)

```js
import { defineConfig, presetAttributify, presetWind3 } from "unocss";

import { colors } from "@unocss/preset-mini/colors";
// import the preset
import { presetUI } from "@unifydev/preset-ui";

export default defineConfig({
  presets: [presetWind3({ dark: "class" }), presetAttributify(), presetUI({})],
});
```

### Use it

```html
<div class="space-y-6">
  <h1 class="text-xl font-semibold ui-title">Badges</h1>
  <div class="p6 flex flex-wrap gap4 rd-lg bdr-gray">
    <span class="badge-md ui-solid ui-solid-gray rd-sm"> badge </span>
    <span un-badge="md" ui-solid="~ gray" rd-sm> badge </span>
  </div>
</div>
```

## Contributing

If you're interested in contributing to Unify-UI, please read our [contributing docs](CONTRIBUTING.MD) before submitting a pull request.

### Join Our Community 🌍

Contribute, collaborate, and become a part of our mission 🚀

- [Discord Community](https://discord.gg/6VN6zTPZAy)
