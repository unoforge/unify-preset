<p align="center">
  <img src="./favicon-dark.png" style="width:100px;" />
  <h1 align="center">Flexilla Preset</h1>
  <p align="center">Variants for Flexilla, UnoVue,...</p>
</p>


## UnifyUI-Variant

This is a preset package that provides variants for Components Libraries based on data-state attribute value, and help to create custom variant selector.

### Data State Variants

Generate variants selector based on data-state attribute, however you can use it with other data-* attributes like (data-name="john" then `fx-john:p4`)

- [X] Radix
- [X] Flexilla
- [X] Radix Vue

`fx-open:bg-red` : will be applied if element has data-state='open'

### browserVariant

Easily create custom variants for browser selector like ::moz-* ::webki...



## Usage

### Installation 

```bash
npm i -D @unifydev/flexilla
```
or
```bash
yarn add @unifydev/flexilla -D
```
Or
```bash
bun add @unifydev/flexilla -d
```

### Config

In you `uno.config.(js|ts)` :
```js
// import the packages
import { flexillaPreset } from '@unifydev/unify-variant'

export default defineConfig({
  presets:[
    flexillaPreset({/* change prefix if needed, default is fx **/ })
  ]
});

```


### Use it

Now you can use : 

- `fx-visible:opacity-100 fx-visible:visible` : this will apply opacity:1 and visiblity:visible to the element when the data-state attribute is open.


## Contributing

If you're interested in contributing to Unify-UI, please read our [contributing docs](CONTRIBUTING.MD) before submitting a pull request.

### Join Our Community 🌍

Contribute, collaborate, and become a part of our mission 🚀
- [Discord Community](https://discord.gg/6VN6zTPZAy)