/* alanode example/ */
import typeIs from '../src'

(async () => {
  const res = await typeIs({
    text: 'example',
  })
  console.log(res)
})()