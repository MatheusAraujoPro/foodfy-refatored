/*           IMPORTS                */

const express  =   require('express')

//criando o roteador
const routes   =     express.Router()

//Rotas
routes.get('/', (req, res)=>{
  res.send('hello world')
})

//Exportando o módulo
module.exports = routes