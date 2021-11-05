const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder:{
      title:{
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      }
   },
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

yargs.parse()

// const command = process.argv[2]

