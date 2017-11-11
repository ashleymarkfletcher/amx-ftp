const Client = require('ftp')
const fs = require('fs')
const initDirectory = require('./initDirectory')
const getAllAndSave = require('./getAllAndSave')

function getFiles(instanceOptions) {
  return new Promise(async (resolve, reject) => {

    const defaultOptions = {
      host: '127.0.0.1',
      port: 21,
      user: 'administrator',
      password: 'password',
      path: 'ftpFiles'
    }

    // combine defaults and instance options
    // const options = { ...defaultOptions, ...instanceOptions }
    const options = Object.assign({}, defaultOptions, instanceOptions)

    // create directory to save files if it doesn't exist
    await initDirectory(options.path).catch((err) => reject(err))

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
    c.on('ready', async () => {
      getAllAndSave(c, options.path)
      .then(() => resolve())
      .catch((err) => reject(err))
    })
  })
}


module.exports = getFiles
