const amxFtp = require('./index.js')
// should be:
// const amxFtp = require('amx-ftp')

amxFtp.getFiles({ host: '192.168.20.20' })
.then(() => {
  console.log('files retrieved!')
})
.catch((err) => {
  console.log('oh no! ', err)
})

// amxFtp.sendFile({ host: '192.168.20.20', fileName: 'test.txt'})
// .then(() => {
//   console.log('file sent!')
// })
// .catch((err) => {
//   console.log('oh no! ', err)
// })
