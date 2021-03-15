const yargs = require('yargs')

yargs.version('1.1.0')

console.log(yargs.argv)
yargs.command({
   command: 'add',
   describe: 'Add a new note',
   handler: function(){
      console.log('Adding a new note')
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
   command: 'add',
   describe: 'Add a new note',
   handler: function(){
      console.log('Adding a new note')
   }
})