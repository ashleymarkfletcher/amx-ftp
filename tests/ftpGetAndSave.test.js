const ftpGetAndSave = require('../ftpGetAndSave');

jest.mock('../writeFileFromStream', () => {
  return jest.fn(() => Promise.resolve())
})

const path = 'mockPatch'
const filename = 'testFile.txt'

const mockClient = {
  get: (filename, cb) => cb(null, 'stream')
}


test('ftpGetAndSave resolves', () => {

  expect.assertions(1);
  return expect(ftpGetAndSave(mockClient, path, filename)).resolves.toEqual()
})
