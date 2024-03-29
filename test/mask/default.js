import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import typeIs from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await typeIs({
      text: this.input,
    })
    return res
  },
  context: Context,
})