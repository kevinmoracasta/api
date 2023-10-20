const axios = require('axios')

const url='https://zelda.fanapis.com/api/games'

axios.get(url)
 .then((respuesta)=>{
        console.log(respuesta)

 })
 .catch(function(error){
        console.log(error)
 })