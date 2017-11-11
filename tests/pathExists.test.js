const pathExists = require('../src/pathExists')
const path = 'doesntexist'

test('return boolean of if a folder exists', () => {
  expect.assertions(1);
  return expect(pathExists(path)).resolves.toBeFalsy();
});
