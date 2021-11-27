const request = require('postman-request')

const weather_url = 'http://api.weatherstack.com/current?access_key=4615109163fe77c2b45556b80acf8957&query=37.8267,-122.4233'
const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Heiloo.json?access_token=pk.eyJ1IjoibGF1cHdpbmciLCJhIjoiY2sxY2F3NXkyMDJhNTNjbjl6aGhzOGdicyJ9.2YhNrtIiq0F6biulYD9N2g&limit=1'

// request
//    .get(weather_url)
//    .onRequestError((error)=>{
//       console.log(error)
//    })
//    .onRequestResponse((response)=>{
//       console.log(response)
//    })

request({url:weather_url}, (err, res)=>{
   const data = JSON.parse(res.body)
   // console.log(data.current)
})
request({url: location_url}, (err, res)=>{
   const data = JSON.parse(res.body) 
   const [long, lat] = data.features[0].center
   console.log(long, lat)
   // const data = JSON.parse(res.body)
   // console.log(data)
})