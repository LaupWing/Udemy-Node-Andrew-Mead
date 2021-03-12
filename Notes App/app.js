const fs = require('fs')

fs.writeFileSync('notes.txt', 'test')
fs.appendFileSync('notes.txt', 'test')

