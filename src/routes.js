/*           IMPORTS                */

const express  =   require('express')
const data     =   require('../data')

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

routes.get('/receita', (req, res)=>{
  
  return res.render('receita', {data})
})


//Exportando o módulo
module.exports = routes