const filterTXTFiles = require('../filterTXTFiles');

const mockFiles = [
  {
    name: 'test1.txt'
  },
  {
    name: 'test2.txt'
  },
  {
    name: 'test3.txt'
  },
  {
    name: 'test4.txt'
  },
  {
    name: 'test5'
  },
  {
    name: 'test6'
  },
  {
    name: 'test7'
  }
]

const filtered = [
  {
    name: 'test1.txt'
  },
  {
    name: 'test2.txt'
  },
  {
    name: 'test3.txt'
  },
  {
    name: 'test4.txt'
  }
]

test('filters an array of file objects by ending in txt', () => {
  expect(filterTXTFiles(mockFiles)).toEqual(expect.arrayContaining(filtered))
});
