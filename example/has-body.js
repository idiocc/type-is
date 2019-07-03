const ns = [6, 3, 3]

/* start example */

import { hasBody } from '../src'

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

/* end example */
function log(value) {
  const n = ns.shift()
  if (n) process.stdout.write('\n\u200B'.repeat(n))
  console.log(value)
}