const writeFileFromStream = require('./writeFileFromStream');

// gets a file and saves it to a local directory/file
function ftpGetAndSave(client, path, filename) {
  return new Promise((resolve, reject) => {
    // get file from ftp server
    client.get(filename, (err, stream) => {
      if (err) return reject(err)

      writeFileFromStream(stream, path, filename)
      .then(() => resolve())
      .catch((err) => reject(err))
    })
  })
}

module.exports = ftpGetAndSave
