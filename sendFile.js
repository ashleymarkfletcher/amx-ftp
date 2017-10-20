const Client = require('ftp')
// const fs = require('fs')

function sendFile(instanceOptions) {
  return new Promise((resolve, reject) => {

    const defaultOptions = {
      host: '127.0.0.1',
      port: 21,
      user: 'administrator',
      password: 'password'
    }

    // combine defaults and instance options
    // const options = { ...defaultOptions, ...instanceOptions }
    const options = Object.assign({}, defaultOptions, instanceOptions)

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
      c.put(options.fileName, options.remotePath || options.fileName, (err) => {
        if (err) return reject(err)
        // console.dir(list)
        c.end()
        resolve()
      })
    })
  })
}

module.exports = sendFile
