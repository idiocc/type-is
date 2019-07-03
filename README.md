# @goa/type-is

[![npm version](https://badge.fury.io/js/%40goa%2Ftype-is.svg)](https://npmjs.org/package/@goa/type-is)

`@goa/type-is` is a fork of [Infer the content-type of a request](https://github.com/jshttp/type-is) Written In ES6 And Optimised With [JavaScript Compiler](https://compiler.page).

```sh
yarn add @goa/type-is
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`typeis(request: http.IncomingMessage, types: string|Array<string>, ...types: string): ?string|boolean`](#typeisrequest-httpincomingmessagetypes-stringarraystringtypes-string-stringboolean)
- [`hasBody(request: http.IncomingMessage): boolean`](#hasbodyrequest-httpincomingmessage-boolean)
- [`is(mediaType: string, types: string|Array<string>, ...types: string): ?string|boolean`](#ismediatype-stringtypes-stringarraystringtypes-string-stringboolean)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default and named functions:

```js
import typeis, { hasBody } from '@goa/type-is'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `typeis(`<br/>&nbsp;&nbsp;`request: http.IncomingMessage,`<br/>&nbsp;&nbsp;`types: string|Array<string>,`<br/>&nbsp;&nbsp;`...types: string,`<br/>`): ?string|boolean`

Checks if the `request` is one of the types. If the request has no body, even if there is a _Content-Type_ header, then `null` is returned. If the _Content-Type_ header is invalid or does not matches any of the `types`, then `false` is returned. Otherwise, a string of the type that matched is returned.

The `request` argument is expected to be a Node.js HTTP request. The `types` argument is an array of type strings.

Each `type` in the types array can be one of the following:

- A file extension name such as `json`. This name will be returned if matched.
- A mime type such as `application/json`.
- A mime type with a wildcard such as `*/*` or `*/json` or `application/*`. The full mime type will be returned if matched.
- A suffix such as `+json`. This can be combined with a wildcard such as `*/vnd+json` or `application/*+json`. The full mime type will be returned if matched.

<table>
<tr><th><a href="example/index.js">Source</a></th><th>Output</th></tr>
<tr><td>

```js
import typeis from '@goa/type-is'

const req = {
  headers: {
    'content-length': 10,
    'content-type': 'application/json',
  },
}

log(typeis(req, ['json']))
log(typeis(req, ['html', 'json']))
log(typeis(req, ['application/*']))
log(typeis(req, ['application/json']))

// pass types as variable arguments
log(typeis(req, 'text/html', 'application/json'))

log(typeis(req, ['html']))
```
</td>
<td>

```js
​
​
​
​
​
​
​
​
​
​json
json
application/json
application/json

​
​application/json

​false
```
</td></tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `hasBody(`<br/>&nbsp;&nbsp;`request: http.IncomingMessage,`<br/>`): boolean`

Returns a _Boolean_ if the given `request` has a body, regardless of the _Content-Type_ header.

Having a body has no relation to how large the body is (it may be 0 bytes). This is similar to how file existence works. If a body does exist, then this indicates that there is data to read from the Node.js request stream.

<table>
<tr><th><a href="example/has-body.js">Source</a></th><th>Output</th></tr>
<tr><td>

```js
import { hasBody } from '@goa/type-is'

log(hasBody({ headers: {
  'content-length': 10,
  'content-type': 'application/json' },
}))

log(hasBody({ headers: {
  'transfer-encoding': 'utf-8' },
}))

log(hasBody({ headers: {
  'content-type': 'application/json' },
}))
```
</td>
<td>

```js
​
​
​
​
​
​true

​
​
​true

​
​
​false
```
</td></tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/3.svg?sanitize=true"></a></p>

## `is(`<br/>&nbsp;&nbsp;`mediaType: string,`<br/>&nbsp;&nbsp;`types: string|Array<string>,`<br/>&nbsp;&nbsp;`...types: string,`<br/>`): ?string|boolean`

Checks if the `mediaType` is one of the types. If the `mediaType` is invalid or does not matches any of the types, then false is returned. Otherwise, a string of the type that matched is returned.

The mediaType argument is expected to be a [media type](https://tools.ietf.org/html/rfc6838) string. The types argument is an array of type strings.

Each `type` in the types array follows the same rules as described in the `typeis` section.

<table>
<tr><th><a href="example/is.js">Source</a></th><th>Output</th></tr>
<tr><td>

```js
import { is } from '@goa/type-is'

const mediaType = 'application/json'

log(is(mediaType, ['json']))
log(is(mediaType, ['html', 'json']))
log(is(mediaType, ['application/*']))
log(is(mediaType, ['application/json']))

// pass types as variable arguments
log(is(mediaType, 'text/html', 'application/json'))

log(is(mediaType, ['html']))
```
</td>
<td>

```js
​
​
​
​
​json
json
application/json
application/json

​
​application/json

​false
```
</td></tr>
</table>


<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/4.svg?sanitize=true"></a></p>

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