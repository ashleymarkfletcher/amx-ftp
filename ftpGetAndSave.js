const fs = require('fs')

// gets a file and saves it to a local directory/file
function ftpGetAndSave(client, path, filename) {
  return new Promise((resolve, reject) => {
    // get file from ftp server
    client.get(filename, (err, stream) => {
      if (err) return reject(err)

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

      stream.on('error', (err) =>  reject(err) )
    })
  })
}

module.exports = ftpGetAndSave
