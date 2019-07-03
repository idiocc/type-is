const ns = [10, 0, 0, 0, 2, 1]

/* start example */
import typeis from '../src'

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

/* end example */
function log(value) {
  const n = ns.shift()
  if (n) process.stdout.write('\n\u200B'.repeat(n))
  console.log(value)
}