const getFileList = require('../getFileList');

const mockClient = {
  list: function(cb) {
    cb(null, [])
  }
}

test('getFileList resolves and returns an array', () => {
  expect.assertions(1);
  return expect(getFileList(mockClient)).resolves.toEqual([]);
});
