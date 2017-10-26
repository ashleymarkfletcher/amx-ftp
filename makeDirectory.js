const fs = require('fs')

function makeDirectory(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => err ? reject(err) : resolve())
  })
}

module.exports = makeDirectory;
