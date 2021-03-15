const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder:{
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      },
      body: {
         describe: 'Notes body',
         demandOption: true,
         type: 'string'
      },
   },
   handler: function(argv){
      console.log('Adding a new note', argv.title)
      console.log('Body', argv.body)
   }
})
yargs.command({
   command: 'remove',
   describe: 'Remove a new note',
   handler: function(){
      console.log('Removing a new note')
   }
})
yargs.command({
   command: 'read',
   describe: 'Read a new note',
   handler: function(){
      console.log('Reading a note')
   }
})
yargs.command({
   command: 'list',
   describe: 'List a new note',
   handler: function(){
      console.log('Listing all notes')
   }
})

// Goes through the arguemnts
yargs.parse()