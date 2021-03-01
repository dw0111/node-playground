#!/usr/bin/env node

const fs = require('fs')
const chalk = require('chalk')

const path = process.argv[2]
countwords(path)

function countwords(path) {
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log(`File contains ${data.split(/\s /).length} words`)
    }
  })
}
