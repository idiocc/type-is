const { _typeis, _is, _hasBody } = require('./depack')

/**
 * Compare a `value` content-type with `types`.
 * Each `type` can be an extension like `html`,
 * a special shortcut like `multipart` or `urlencoded`,
 * or a mime type.
 *
 * @param {string} value The target type.
 * @param {!Array<string>|string} [types] Acceptable types as an array.
 * @param {...string} args Acceptable types as arguments.
 * @return {string|boolean} If no types match, `false` is returned. Otherwise, the first `type` that matches is returned.
 */
function is(value, ...args) {
  return _is(value, ...args)
}

/**
 * Check if a request has a request body.
 * A request with a body __must__ either have `transfer-encoding`
 * or `content-length` headers set.
 * http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.3
 *
 * @param {http.IncomingMessage} req The incoming message (http request).
 * @return {boolean} Whether the request has a body.
 */
function hasBody(req) {
  return _hasBody(req)
}

/**
 * Check if the incoming request contains the "Content-Type"
 * header field, and it contains any of the give mime `type`s.
 * If there is no request body, `null` is returned.
 * If there is no content type, `false` is returned.
 * Otherwise, it returns the first `type` that matches.
 *
 * Examples:
 *
 *     // With Content-Type: text/html; charset=utf-8
 *     this.is('html'); // => 'html'
 *     this.is('text/html'); // => 'text/html'
 *     this.is('text/*', 'application/json'); // => 'text/html'
 *
 *     // When Content-Type is application/json
 *     this.is('json', 'urlencoded'); // => 'json'
 *     this.is('application/json'); // => 'application/json'
 *     this.is('html', 'application/*'); // => 'application/json'
 *
 *     this.is('html'); // => false
 *
 * @param {http.IncomingMessage} req The server request.
 * @param {string|!Array<string>} [types] Acceptable types as an array.
 * @param {...string} args Acceptable types as arguments.
 * @returns {?string|false}
 */
function typeis(req, types, ...args) {
  return _typeis(req, types, ...args)
}

module.exports = typeis
module.exports.is = is
module.exports.hasBody = hasBody

/**
 * @typedef {import('http').IncomingMessage} http.IncomingMessage
 */