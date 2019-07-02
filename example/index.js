import typeis from '../src'

const req = {
  headers: {
    'content-length': 10,
    'content-type': 'application/json',
  },
}

console.log(typeis(req, ['json'])) // => 'json'
console.log(typeis(req, ['html', 'json'])) // => 'json'
console.log(typeis(req, ['application/*'])) // => 'application/json'
console.log(typeis(req, ['application/json'])) // => 'application/json'

// pass types as variable arguments
console.log(typeis(req, 'text/html', 'application/json')) // => 'application/json'

console.log(typeis(req, ['html'])) // => false