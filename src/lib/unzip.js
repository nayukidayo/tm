import { unzip } from 'fflate'

/**
 * @param {File} file
 */
export default async file => {
  const ab = await file.arrayBuffer()
  return new Promise((res, rej) => {
    unzip(new Uint8Array(ab), (err, data) => {
      if (err) return rej(err)
      const obj = {}
      for (const [key, value] of Object.entries(data)) {
        obj[key] = new File([value], key)
      }
      res(obj)
    })
  })
}
