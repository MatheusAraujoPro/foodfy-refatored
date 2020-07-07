/*           IMPORTS                */

const express  =   require('express')

//criando o roteador
const routes   =     express.Router()

//Rotas
routes.get('/', (req, res)=>{
  res.render('index')
})

routes.get('/receitas', (req, res)=>{
  res.render('receitas')
})

routes.get('/sobre', (req, res)=>{
  res.render('sobre')
})


//Exportando o módulo
module.exports = routes