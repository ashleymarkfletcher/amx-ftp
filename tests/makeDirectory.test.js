const makeDirectory = require('../makeDirectory');
const dirName = 'testFolder'

test('checks folder exists, makes new folder and resolves', () => {
  expect.assertions(1);
  return expect(makeDirectory(dirName)).resolves.toEqual();
})
