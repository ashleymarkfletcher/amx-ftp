// takes a file array and returns an array of promises

function fileListToPromiseArray (fileList, client, path, prom) {
  return fileList.map((file) => prom(client, path, file.name))
}

module.exports = fileListToPromiseArray
