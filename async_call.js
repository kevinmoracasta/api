//dependencia common.js

const request = require('request')

const url='https://zelda.fanapis.com/api/games'

let r = request(url ,
                {json: true}, 
                (error, respuesta, body) => {
                        let games = body
                        games.forEach((game) => {
                            console.log(game.name)
                            console.log('---------')
                        })
                            
                        
                }  )