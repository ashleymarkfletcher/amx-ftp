# amx-ftp
Send and retrieve files over FTP from an AMX Netlinx processor

[![NPM](https://nodei.co/npm/amx-ftp.png?downloads=true)](https://nodei.co/npm/amx-ftp/)

[![Build status](https://ci.appveyor.com/api/projects/status/56df4tesf9ojrt6r?svg=true)](https://ci.appveyor.com/project/ashleymarkfletcher/amx-ftp)
[![codecov](https://codecov.io/gh/ashleymarkfletcher/amx-ftp/branch/master/graph/badge.svg)](https://codecov.io/gh/ashleymarkfletcher/amx-ftp)
## Installation

```bash
$ npm install amx-ftp --save
```

## Requirements

  As of version 2.0, it is recommended to use node version 8 or higher due to the use of async/await.

## Features

  * Get all txt files from an AMX processor
  * Send files to an AMX processor

## Example Usage Node.js

Get all the files from the processor
```js
const amxFtp = require('amx-ftp')

amxFtp.getFiles({ host: '192.168.20.20' })
.then(() => {
  console.log('files retrieved!')
})
.catch((err) => {
  console.log('oh no! ', err)
})
```

Send a file to a processor
```js
const amxFtp = require('amx-ftp')

amxFtp.sendFile({ host: '192.168.20.20', fileName: 'test.txt'})
.then(() => {
  console.log('file sent!')
})
.catch((err) => {
  console.log('oh no! ', err)
})
```

## Defaults

Both getFiles and sendFile have default parameters than can be overridden
```js
{
  host: '127.0.0.1',
  port: 21,
  user: 'administrator',
  password: 'password',
  path: 'ftpFiles'
}
```

## ToDo

  * Add methods for just retrieving a list of files.
  * Add method to pull individual file
  * Add CLI support

## Devices Tested

So far this has only been test with NX processors but should work with any Netlinx Processor
