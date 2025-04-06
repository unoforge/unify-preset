<p align="center">
  <img src="./favicon-dark.png" style="width:100px;" />
  <h1 align="center">Unify-Variant</h1>
  <p align="center">Variant for differents Components UI Libraries.</p>
</p>


## UnoUI-Variant

This is a preset package that provides variants for Components Libraries based on data-state attribute value, and help to create custom variant selector.

### Data State Variants

Generate variants selector based on data-state attribute, however you can use it with other data-* attributes like (data-state="john" then `fx-john:p4`)

- [X] Radix
- [X] Flexilla
- [X] Radix Vue

`fx-open:bg-red` : will be applied if element has data-state='open'

### browserVariant

Easily create custom variants for browser selector like ::moz-* ::webki...


## Usage

### Installation 

```bash
npm i -D @unifydev/unify-preset
```
or
```bash
yarn add @unifydev/unify-preset -D
```
Or
```bash
bun add @unifydev/unify-preset -d
```

### Config

In you `uno.config.(js|ts)` :
```js
...
// import the packages
import {dataStateVariants, browserVariants} from '@unifydev/unify-variant'

export default defineConfig({
  // ...config
  variant:[
    dataStateVariants({
      prefix: 'fx', // prefix, you can use whatever you want as prefix
      variants: "visible|hidden|active|inactive|open|close|resize|minimize|maximaze", // indicate all values, those values will help to generate variant
      selector: "data-state" //Indicate the data-attribute to be used
    }),
    browserVariants({
      variants: {
          "meter-inner-el": "::-webkit-meter-inner-element",
          "meter-optimum-val": "::-webkit-meter-optimum-value",
          "metter-bar": "::-webkit-meter-bar",
          "moz-meter-bar": "::-moz-meter-bar"
      }
    }),
  ]
});

```


### Use it

Now you can use : 

- `metter-bar:bg-red`


## Contributing

If you're interested in contributing to Unify-UI, please read our [contributing docs](CONTRIBUTING.MD) before submitting a pull request.

### Join Our Community 🌍

Contribute, collaborate, and become a part of our mission 🚀
- [Discord Community](https://discord.gg/6VN6zTPZAy)

## Support Us

If you like this project and want to support us, feel free to get in touch with one of maintainers : 

- [Johnkat MJ](mailto:johnkatembue4@gmail.com)