/*         IMPORTS           */
const express   =    require('express')
const nunjucks  =    require('nunjucks')


const server    =     express()

server.listen(8080, ()=>{
    console.log('Server is running')
})

//usando o objeto router
server.use('/', require('./src/routes'))

//configurando a engine
server.set('view engine', 'html')