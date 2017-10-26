const fs = require('fs');

function pathExists(path) {
  return new Promise(function(resolve, reject) {
    fs.exists(path, (exists) => {
      return resolve(exists)
    })
  })
}

module.exports = pathExists
