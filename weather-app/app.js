const request = require('postman-request')

const url = ''

request
   .get(url)
   .onRequestError((error)=>{
      console.log(error)
   })
   .onRequestResponse((response)=>{
      console.log(response)
   })