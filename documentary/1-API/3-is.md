```## is => ?string|boolean
[
  ["mediaType", "string"],
  ["types", "string|Array<string>"],
  ["...types", "string"]
]
```

Checks if the `mediaType` is one of the types. If the `mediaType` is invalid or does not matches any of the types, then false is returned. Otherwise, a string of the type that matched is returned.

The mediaType argument is expected to be a [media type](https://tools.ietf.org/html/rfc6838) string. The types argument is an array of type strings.

Each `type` in the types array follows the same rules as described in the `typeis` section.

<table>
<!-- block-start -->
<tr><th><a href="example/is.js">Source</a></th><th>Output</th></tr>
<tr><td>

%EXAMPLE: example/is, ../src => @goa/type-is%
</td>
<td>

%FORK-js example/is%
</td></tr>
</table>


%~%