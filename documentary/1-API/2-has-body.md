```## hasBody => boolean
[
  ["request", "http.IncomingMessage"]
]
```

Returns a _Boolean_ if the given `request` has a body, regardless of the _Content-Type_ header.

Having a body has no relation to how large the body is (it may be 0 bytes). This is similar to how file existence works. If a body does exist, then this indicates that there is data to read from the Node.js request stream.

<!-- %TYPEDEF types/index.xml% -->

<table>
<!-- block-start -->
<tr><th><a href="example/has-body.js">Source</a></th><th>Output</th></tr>
<tr><td>

%EXAMPLE: example/has-body, ../src => @goa/type-is%
</td>
<td>

%FORK-js example/has-body%
</td></tr>
</table>

%~%