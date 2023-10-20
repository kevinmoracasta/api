const axios = require('axios')

const url='https://zelda.fanapis.com/api/games'


async function obtenergames(){
    try{
        const respuesta = await axios.get(url);
        console.log(respuesta.data)
        
    }catch(error) {

    }
    }

obtenergames()