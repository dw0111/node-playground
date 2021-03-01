const fs = require('fs')
const { exit } = require('process')
const chalk = require('chalk')

const file = 'tools.json'
const tool = process.argv[2]
const rating = process.argv[3]

fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
  err && exit(1)
  const tools = JSON.parse(data)
  tools.push({ name: tool, rating: rating })

  fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
    err && console.log(err)
  })

  fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      exit(1)
    } else {
      console.table(data)
    }
  })
})
