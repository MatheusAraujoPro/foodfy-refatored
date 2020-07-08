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
  const urlId = req.query.id

  const item = data.find((item)=> {
      if(item.id == urlId)
        return true
  })

    if(!item) {
      return res.send('Receita is not found') 
   }

  
  return res.render('receita', {receita: item})
  


})


//Exportando o módulo
module.exports = routes