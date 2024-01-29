//npm i express --save
const express = require('express')
const rotas = require('./router') //Exportando as rotas criadas
const port = 7777
const app = express()

app.use('/',rotas) //Usando as rotas

app.get('*', (req,res) => 
{
    res.send('CFB Cursos')
})

app.listen(port, () => console.log('Server router'))