import { hasBody } from '../src'

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