const Client = require('ftp')
const fs = require('fs')
const initDirectory = require('./initDirectory')

function getFiles(instanceOptions) {
  return new Promise((resolve, reject) => {

    const defaultOptions = {
      host: '127.0.0.1',
      port: 21,
      user: 'administrator',
      password: 'password',
      path: 'ftpFiles'
    }

    // combine defaults and instance options
    const options = { ...defaultOptions, ...instanceOptions }

    return initDirectory(options.path).then(() => {
      // create new ftp client
      const c = new Client()

      // connnect with config for client
      c.connect({
        host: options.host,
        port: options.port,
        user: options.user,
        password: options.password
      })

      // once connection is open
      c.on('ready', () => {

        // get list of files
        c.list((err, list) => {
          if (err) return reject(err)
          // console.dir(list)

          // remove all files that aren't txt and then map all promises to get a file
          const files = list.filter((file) => file.name.substr(file.name.length-3) == 'txt')
          .map((file) => ftpGetAndSave(c, options.path, file.name))

          // trigger all files to get and wait until done
          Promise.all(files).then(() => {
            c.end()
            resolve()
          }).catch((err) => {
            c.end()
            reject(err)
          })
        })
      })
    }).catch((err) => reject(err))
  })
}

// gets a file and saves it to a local directory/file
function ftpGetAndSave(client, path, filename) {
  return new Promise((resolve, reject) => {
    // get file from ftp server
    client.get(filename, (err, stream) => {
      if (err) return reject(err)

      // HACK: used to not resolve a promise that has close due to error
      let hasError = false

      // write file to path/name
      stream.pipe(fs.createWriteStream(path + '/' + filename).on('error', (err) => {
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

module.exports = getFiles
