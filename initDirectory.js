const fs = require('fs')
const pathExists = require('./pathExists')
const makeDirectory = require('./makeDirectory');

// create directory if it doesn't exist
async function initDirectory (path) {


    const exists = await pathExists(path)

    if (exists) return Promise.resolve()

    return makeDirectory(path)

}


module.exports = initDirectory
