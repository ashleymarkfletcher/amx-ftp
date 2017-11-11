const writeFileFromStream = require('../src/writeFileFromStream');

var fs = require('fs');
var Stream = require('stream');

var ws = new Stream
ws.writable = true
ws.bytes = 0

ws.write = function(buf) {
   ws.bytes += buf.length
}

ws.end = function(buf) {
   if(arguments.length) ws.write(buf);
   ws.writable = false;
}

test('takes stream and saves it to a file', () => {
  expect.assertions(1);
  return expect(writeFileFromStream(fs.createReadStream('./tests/testData.txt'), './', 'testExport.txt')).resolves.toBe()
})
