# amx-ftp
Send and retrieve files over FTP from an AMX Netlinx processor

## Installation

```bash
$ npm install amx-ftp --save
```

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

sendFile({ host: '192.168.20.20', fileName: 'test.txt'})
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
