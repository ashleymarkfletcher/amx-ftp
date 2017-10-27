const fileListToPromiseArray = require('../fileListToPromiseArray');

const fileList = [
  { name: 'test1' },
  { name: 'test2' },
  { name: 'test3' }
]
const client = {}
const path = ''
const prom = () => new Promise(function(resolve, reject) {})
const testPromise = new Promise((resolve,reject) => {})
const expectedPromiseArray = [testPromise, testPromise, testPromise]

test('returns an array of promises for the number of files', () => {
  expect(fileListToPromiseArray(fileList, client, path, prom)).toEqual(expect.arrayContaining(expectedPromiseArray))
})
