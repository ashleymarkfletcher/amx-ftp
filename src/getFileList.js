// takes an ftp client and returns a promise with the file list

function getFileList (client) {
  return new Promise((resolve, reject) => {
    return client.list((err, list) => {
      if (err) return reject(err)
      else return resolve(list)
    })
  })
}

module.exports = getFileList
