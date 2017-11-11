const fs = require('fs')

function writeFileFromStream(stream, path, filename) {
  return new Promise(function(resolve, reject) {

    // HACK: used to not resolve a promise that has close due to error
    let hasError = false

    // write file to path/name
    stream.pipe(fs.createWriteStream(path + '/' + filename)
    .on('error', (err) => {
      hasError = true
      return reject(err)
    }))

    // data has been written/no data left
    stream.once('close', () => {
      // if error has happened do nothing - part of hack above
      if (!hasError) {
        console.log('file downloaded: ', filename)
        resolve()
      }
    })

    stream.on('error', (err) =>  reject(err))
  })
}

module.exports = writeFileFromStream
