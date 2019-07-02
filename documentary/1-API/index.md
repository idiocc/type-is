## API

The package is available by importing its default function:

```js
import typeis, { hasBody, match } from '@goa/type-is'
```

%~%

```## typeis
[
  ["request", "http.IncomingMessage"],
  ["types", "string|Array<string>"],
  ["...types", "string"]
]
```

Checks if the `request` is one of the types. If the request has no body, even if there is a _Content-Type_ header, then `null` is returned. If the _Content-Type_ header is invalid or does not matches any of the `types`, then `false` is returned. Otherwise, a string of the type that matched is returned.

The `request` argument is expected to be a Node.js HTTP request. The `types` argument is an array of type strings.

Each `type` in the types array can be one of the following:

- A file extension name such as `json`. This name will be returned if matched.
- A mime type such as `application/json`.
- A mime type with a wildcard such as `*/*` or `*/json` or `application/*`. The full mime type will be returned if matched.
- A suffix such as `+json`. This can be combined with a wildcard such as `*/vnd+json` or `application/*+json`. The full mime type will be returned if matched.


<!-- %TYPEDEF types/index.xml% -->

%EXAMPLE: example, ../src => @goa/type-is%
%FORK example%

%~%