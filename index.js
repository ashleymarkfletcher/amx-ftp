const getFiles = require('./getFiles')
const sendFile = require('./sendFile')

getFiles({ host: '192.168.20.20' })
.then(() => {
  console.log('files retrieved!')
})
.catch((err) => {
  console.log('oh no! ', err)
})

// sendFile({ host: '192.168.20.20', fileName: 'test.txt'})
// .then(() => {
//   console.log('file sent!')
// })
// .catch((err) => {
//   console.log('oh no! ', err)
// })

module.exports = {
  getFiles: getFiles,
  sendFile: sendFile
}
