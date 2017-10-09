const fs = require('fs');

// create directory if it doesn't exist
function initDirectory(path) {
  return new Promise(function(resolve, reject) {
    fs.exists(path, (exists) => {
      if (!exists) {
        fs.mkdir(path, (err) => {
          if (err) {
            console.log('error creating initial directory', err);
            reject(err)
          } else {
            console.log('new directory created: ', path);
            resolve()
          }
        })
      } else {
        console.log('found ftp folder');
        resolve()
      }
    })
  })
}

module.exports = initDirectory
