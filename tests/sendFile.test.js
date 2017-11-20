const ftpd = require('ftpd');
const sendFile = require('../src/sendFile')
const options = {
  host: process.env.IP || '127.0.0.1',
  port: process.env.PORT || 21,
  tls: null,
}

let server

server = new ftpd.FtpServer(options.host, {
  getInitialCwd: function() {
    return 'tests/testDir'
  },
  getRoot: function() {
    return process.cwd() + '/'
  },
  allowUnauthorizedTls: true,
  useWriteFile: true,
  useReadFile: true,
  uploadMaxSlurpSize: 7000, // N/A unless 'useWriteFile' is true.
})

server.on('error', function(error) {
  console.log('FTP Server error:', error)
})

server.on('client:connected', function(connection) {
  var username = null;
  console.log('client connected: ' + connection.remoteAddress);
  connection.on('command:user', function(user, success, failure) {
    if (user) {
      username = user
      success()
    } else {
      failure()
    }
  })

  connection.on('command:pass', function(pass, success, failure) {
    if (pass) {
      success(username)
    } else {
      failure()
    }
  })
})

// server.debugging = 4
server.listen(options.port)

test('getFiles gets a list of files and saves to local directory then resolves', () => {
  expect.assertions(1)
  return expect(sendFile({fileName:'tests/testData.txt', remotePath:'testSend.txt'}).then(() => {server.close()})).resolves.toEqual();
})
