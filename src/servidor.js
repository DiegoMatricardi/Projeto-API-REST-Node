const porta = 3003//processo
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./BancoDeDados');

app.use(bodyParser.urlencoded({extended: true}))

//Tras todos os produtos cadastrados
app.get('/produtos', (req, res, next)=>{//pega o objeto e pode ser visualizado no postman
    res.send(bancoDeDados.getProdutos())//Converter para JSON
})
//Tras o produto de um id especifico
app.get('/produtos/:id', (req, res, next)=> {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)//JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`)
})