const path = require('path')
const request = require('request')

module.exports = async function loadJson (pathName) {
  if (!/^https?:\/\//.test(pathName)) {
    return require(path.join(process.cwd(), pathName))
  }

  return new Promise((resolve, reject) => {
    request.get({ url: pathName, json: true }, (err, _, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    });
  })
}
