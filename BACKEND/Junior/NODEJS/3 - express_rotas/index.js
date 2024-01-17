const express = require('express')
//Instalar no cmd npm install express --save
const port = 7777 //|| process.env.PORT
const app = express()

app.get('/',(req,res) => 
{
    res.send('<h1 style="font-family:Arial;">Seja bem vindo(a)!</h1>\n<a href="canal">Canal</a>') //O que irá mandar
})

app.get('/canal', (req,res) =>
{
    res.json({canal: 'CFB Cursos'})
})

app.listen(port, () => console.log('Server'))