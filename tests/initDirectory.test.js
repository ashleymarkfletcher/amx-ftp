const initDirectory = require('../src/initDirectory')
const dirName = 'ftpFiles'

test('creates new folder and resolves', () => {
  expect.assertions(1);
  return expect(initDirectory(dirName)).resolves.toEqual();
})
