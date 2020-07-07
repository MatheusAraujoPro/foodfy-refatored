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
server.set('view engine', 'njk')

//configurar o nunjucks
nunjucks.configure('./src/views', {
    express:server,
    noCache:true
})

//setar o endereço dos arquivos estáticos
server.use(express.static('./src/public'))

