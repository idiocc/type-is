import { equal } from '@zoroaster/assert'
import Context from '../context'
import typeis, { hasBody } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof typeis, 'function')
  },
  'ignores params'({ createRequest }) {
    const req = createRequest('text/html; charset=utf-8')
    equal(typeis(req, ['text/*']), 'text/html')
  },
  'ignores params LWS'({ createRequest }) {
    const req = createRequest('text/html ; charset=utf-8')
    equal(typeis(req, ['text/*']), 'text/html')
  },
  'ignores casing'({ createRequest }) {
    const req = createRequest('text/HTML')
    equal(typeis(req, ['text/*']), 'text/html')
  },
  'fails invalid type'({ createRequest }) {
    const req = createRequest('text/html**')
    equal(typeis(req, ['text/*']), false)
  },
  'nots match invalid type'({ createRequest }) {
    const req = createRequest('text/html')
    equal(typeis(req, ['text/html/']), false)
    equal(typeis(req, [undefined, null, true, function () {}]), false)
  },
  'returns null when no body is given'() {
    const req = { headers: {} }

    equal(typeis(req), null)
    equal(typeis(req, ['image/*']), null)
    equal(typeis(req, 'image/*', 'text/*'), null)
  },
  'returns false when no content type is given'({ createRequest }) {
    const req = createRequest()
    equal(typeis(req), false)
    equal(typeis(req, ['image/*']), false)
    equal(typeis(req, ['text/*', 'image/*']), false)
  },
  'returns the mime type when no types given'({ createRequest }) {
    const req = createRequest('image/png')
    equal(typeis(req), 'image/png')
  },
  'returns the type or false when one type is given'({ createRequest }) {
    const req = createRequest('image/png')

    equal(typeis(req, ['png']), 'png')
    equal(typeis(req, ['.png']), '.png')
    equal(typeis(req, ['image/png']), 'image/png')
    equal(typeis(req, ['image/*']), 'image/png')
    equal(typeis(req, ['*/png']), 'image/png')

    equal(typeis(req, ['jpeg']), false)
    equal(typeis(req, ['.jpeg']), false)
    equal(typeis(req, ['image/jpeg']), false)
    equal(typeis(req, ['text/*']), false)
    equal(typeis(req, ['*/jpeg']), false)

    equal(typeis(req, ['bogus']), false)
    equal(typeis(req, ['something/bogus*']), false)
  },
  'returns the first match or false'({ createRequest }) {
    const req = createRequest('image/png')

    equal(typeis(req, ['png']), 'png')
    equal(typeis(req, '.png'), '.png')
    equal(typeis(req, ['text/*', 'image/*']), 'image/png')
    equal(typeis(req, ['image/*', 'text/*']), 'image/png')
    equal(typeis(req, ['image/*', 'image/png']), 'image/png')
    equal(typeis(req, 'image/png', 'image/*'), 'image/png')

    equal(typeis(req, ['jpeg']), false)
    equal(typeis(req, ['.jpeg']), false)
    equal(typeis(req, ['text/*', 'application/*']), false)
    equal(typeis(req, ['text/html', 'text/plain', 'application/json']), false)
  },
  'matches suffix types when given +suffix'({ createRequest }) {
    const req = createRequest('application/vnd+json')

    equal(typeis(req, '+json'), 'application/vnd+json')
    equal(typeis(req, 'application/vnd+json'), 'application/vnd+json')
    equal(typeis(req, 'application/*+json'), 'application/vnd+json')
    equal(typeis(req, '*/vnd+json'), 'application/vnd+json')
    equal(typeis(req, 'application/json'), false)
    equal(typeis(req, 'text/*+json'), false)
  },
  'given "*/*"': {
    'matches any content-type'({ createRequest }) {
      equal(typeis(createRequest('text/html'), '*/*'), 'text/html')
      equal(typeis(createRequest('text/xml'), '*/*'), 'text/xml')
      equal(typeis(createRequest('application/json'), '*/*'), 'application/json')
      equal(typeis(createRequest('application/vnd+json'), '*/*'), 'application/vnd+json')
    },
    'nots match invalid content-type'({ createRequest }) {
      equal(typeis(createRequest('bogus'), '*/*'), false)
    },
    'nots match body-less request'() {
      const req = { headers: { 'content-type': 'text/html' } }
      equal(typeis(req, '*/*'), null)
    },
  },
  'when Content-Type: application/x-www-form-urlencoded': {
    'matches "urlencoded"'({ createRequest }) {
      const req = createRequest('application/x-www-form-urlencoded')

      equal(typeis(req, ['urlencoded']), 'urlencoded')
      equal(typeis(req, ['json', 'urlencoded']), 'urlencoded')
      equal(typeis(req, ['urlencoded', 'json']), 'urlencoded')
    },
  },
  'when Content-Type: multipart/form-data': {
    'matches "multipart/*"'({ createRequest }) {
      const req = createRequest('multipart/form-data')

      equal(typeis(req, ['multipart/*']), 'multipart/form-data')
    },
    'matches "multipart"'({ createRequest }) {
      const req = createRequest('multipart/form-data')

      equal(typeis(req, ['multipart']), 'multipart')
    },
  },
}

export const HasBody = {
  'content-length': {
    'indicates body'() {
      const req = { headers: { 'content-length': '1' } }
      equal(hasBody(req), true)
    },
    'bes true when 0'() {
      const req = { headers: { 'content-length': '0' } }
      equal(hasBody(req), true)
    },
    'bes false when bogus'() {
      const req = { headers: { 'content-length': 'bogus' } }
      equal(hasBody(req), false)
    },
  },
  'transfer-encoding': {
    'indicates body'() {
      const req = { headers: { 'transfer-encoding': 'chunked' } }
      equal(hasBody(req), true)
    },
  },
}

export default T