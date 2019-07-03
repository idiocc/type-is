# @goa/type-is

[![npm version](https://badge.fury.io/js/%40goa%2Ftype-is.svg)](https://npmjs.org/package/@goa/type-is)

`@goa/type-is` is a fork of [Infer the content-type of a request](https://github.com/jshttp/type-is) Written In ES6 And Optimised With [JavaScript Compiler](https://compiler.page).

```sh
yarn add @goa/type-is
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`typeis(request: http.IncomingMessage, types: string|Array<string>, ...types: string)`](#typeisrequest-httpincomingmessagetypes-stringarraystringtypes-string-void)
- [`hasBody(request: http.IncomingMessage, types: string|Array<string>, ...types: string)`](#hasbodyrequest-httpincomingmessagetypes-stringarraystringtypes-string-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import typeis, { hasBody, match } from '@goa/type-is'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `typeis(`<br/>&nbsp;&nbsp;`request: http.IncomingMessage,`<br/>&nbsp;&nbsp;`types: string|Array<string>,`<br/>&nbsp;&nbsp;`...types: string,`<br/>`): void`

Checks if the `request` is one of the types. If the request has no body, even if there is a _Content-Type_ header, then `null` is returned. If the _Content-Type_ header is invalid or does not matches any of the `types`, then `false` is returned. Otherwise, a string of the type that matched is returned.

The `request` argument is expected to be a Node.js HTTP request. The `types` argument is an array of type strings.

Each `type` in the types array can be one of the following:

- A file extension name such as `json`. This name will be returned if matched.
- A mime type such as `application/json`.
- A mime type with a wildcard such as `*/*` or `*/json` or `application/*`. The full mime type will be returned if matched.
- A suffix such as `+json`. This can be combined with a wildcard such as `*/vnd+json` or `application/*+json`. The full mime type will be returned if matched.

> Alias: `is`
    ```js
    import typeis, { is } from '../src'
    is === typeis // true
    ```

```js
import typeis from '@goa/type-is'

const req = {
  headers: {
    'content-length': 10,
    'content-type': 'application/json',
  },
}

console.log(typeis(req, ['json'])) // => 'json'
console.log(typeis(req, ['html', 'json'])) // => 'json'
console.log(typeis(req, ['application/*'])) // => 'application/json'
console.log(typeis(req, ['application/json'])) // => 'application/json'

// pass types as variable arguments
console.log(typeis(req, 'text/html', 'application/json')) // => 'application/json'

console.log(typeis(req, ['html'])) // => false
```
```
json
json
application/json
application/json
application/json
false
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `hasBody(`<br/>&nbsp;&nbsp;`request: http.IncomingMessage,`<br/>&nbsp;&nbsp;`types: string|Array<string>,`<br/>&nbsp;&nbsp;`...types: string,`<br/>`): void`

Returns a _Boolean_ if the given `request` has a body, regardless of the _Content-Type_ header.

Having a body has no relation to how large the body is (it may be 0 bytes). This is similar to how file existence works. If a body does exist, then this indicates that there is data to read from the Node.js request stream.

```js
import { hasBody } from '@goa/type-is'

console.log(hasBody({ headers: {
  'content-length': 10,
  'content-type': 'application/json' },
}))

console.log(hasBody({ headers: {
  'transfer-encoding': 'utf-8' },
}))

console.log(hasBody({ headers: {
  'content-type': 'application/json' },
}))
```
```
true
true
false
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Copyright

Original Work by [Jonathan Ong, Douglas Christopher Wilson and contributors](https://github.com/jshttp/type-is).

---

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio">
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>