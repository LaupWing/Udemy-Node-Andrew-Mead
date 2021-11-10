const fs = require('fs')

const addNote = function(title, body){
   const notes = loadNotes()

   const noteAlreadyExists = notes.find(note=>note.title === title)
   if(noteAlreadyExists){
      return false
   }

   notes.push({
      title,
      body
   })
   saveNotes(notes)
}

const getNote = function(){
   const notes = loadNotes()
   return notes
}

const saveNotes = function(notes){
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
   try{
      const dataBuffer = fs.readFileSync('notes.json')
      const data = JSON.parse(dataBuffer.toString())
      return data
   }catch(e){
      return []
   }
}

module.exports =  {
   addNote,
   getNote,
}