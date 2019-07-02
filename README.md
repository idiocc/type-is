# @goa/type-is

[![npm version](https://badge.fury.io/js/@goa/type-is.svg)](https://npmjs.org/package/@goa/type-is)

`@goa/type-is` is [fork] Infer the content-type of a request Written In ES6 And Optimised With JavaScript Compiler.

```sh
yarn add @goa/type-is
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`typeIs(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@goa/type-is.Config`](#type-_@goa/type-isconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import typeIs from '@goa/type-is'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `typeIs(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@goa/type-isconfig">`_@goa/type-is.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import typeIs from '@goa/type-is'

(async () => {
  const res = await typeIs({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2019

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>