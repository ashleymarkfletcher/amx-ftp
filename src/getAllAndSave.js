const ftpGetAndSave = require('./ftpGetAndSave');
const getFileList = require('./getFileList');
const filterTXTFiles = require('./filterTXTFiles');
const fileListToPromiseArray = require('./fileListToPromiseArray');

// download all the files and save to path
async function getAllAndSave(client, path) {

  const fileList = await getFileList(client)
  .catch((err) => { throw new Error(err) })

  // remove all files that aren't txt and then map all promises to get a file
  const txtFiles = filterTXTFiles(fileList)

  // map the file list to promises that download the file and save it
  const files = fileListToPromiseArray(txtFiles, client, path, ftpGetAndSave)

  // trigger all files to get, save and then wait until done
  await Promise.all(files)
  .then(() => Promise.resolve())
  .catch((err) => { throw new Error(err) })

  // close the ftp client
  client.end()
}

module.exports = getAllAndSave
