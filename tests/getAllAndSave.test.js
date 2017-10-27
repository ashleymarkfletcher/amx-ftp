const getAllAndSave = require('../getAllAndSave')

const mockClient = {
  list: function(cb) {
    cb(null, [])
  },
  end: function() {}
}

const path = 'mockPatch'

test('getAllAndSave resolves', () => {
  expect.assertions(1);
  return expect(getAllAndSave(mockClient, path)).resolves.toEqual();
});
