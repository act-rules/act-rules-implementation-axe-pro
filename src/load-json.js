var request = require('request')

module.exports = async function loadJson (url) {
  return new Promise((resolve, reject) => {
    request.get({ url, json: true }, (err, _, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    });
  })
}
