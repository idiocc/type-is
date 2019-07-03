const { _typeis, _hasBody } = require('./depack')

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
function typeis(value, types, ...args) {
  return _typeis(value, types, ...args)
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

module.exports = typeis
module.exports.is = typeis
module.exports.hasBody = hasBody

/**
 * @typedef {import('http').IncomingMessage} http.IncomingMessage
 */