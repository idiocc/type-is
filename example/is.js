const ns = [5, 0, 0, 0, 2, 1]

/* start example */
import { is } from '../src'

const mediaType = 'application/json'

log(is(mediaType, ['json']))
log(is(mediaType, ['html', 'json']))
log(is(mediaType, ['application/*']))
log(is(mediaType, ['application/json']))

// pass types as variable arguments
log(is(mediaType, 'text/html', 'application/json'))

log(is(mediaType, ['html']))

/* end example */
function log(value) {
  const n = ns.shift()
  if (n) process.stdout.write('\n\u200B'.repeat(n))
  console.log(value)
}