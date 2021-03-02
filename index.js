const addStudent = require('./addStudent')

const name = process.argv[2]
const role = process.argv[3]

addStudent({ name, role })
