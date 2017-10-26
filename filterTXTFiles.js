// returns a file list that only contains files that end in txt

function filterTXTFiles (fileList) {
  return fileList.filter((file) => file.name.substr(file.name.length-3) == 'txt')
}

module.exports = filterTXTFiles
