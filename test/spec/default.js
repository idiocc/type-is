import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import typeIs from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof typeIs, 'function')
  },
  async 'calls package without error'() {
    await typeIs()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await typeIs({
      text,
    })
    ok(res, text)
  },
}

export default T