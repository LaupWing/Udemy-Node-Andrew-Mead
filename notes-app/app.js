const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
   command: 'add',
   describe: 'Add a new note',
   handler: function(){
      console.log('Adding a new note')
   }
})

yargs.command({
   command: 'Remove',
   describe: 'Remove a note',
   handler: function(){
      console.log('Removing the note')
   }
})

// const command = process.argv[2]

