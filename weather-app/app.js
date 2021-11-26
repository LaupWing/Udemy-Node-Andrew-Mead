const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=4615109163fe77c2b45556b80acf8957&query=37.8267,-122.4233'

// request
//    .get(url)
//    .onRequestError((error)=>{
//       console.log(error)
//    })
//    .onRequestResponse((response)=>{
//       console.log(response)
//    })

request({url}, (err, res)=>{
   console.log(JSON.parse(res.body))
})