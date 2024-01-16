const http = require('http')
const fs = require('fs')
const port = 7777

const server = http.createServer((req,res) =>
{
    fs.appendFile('texto.txt','Curso de NodeJS', (err) => {
        if(err) throw err 
        return res.end()
    }) //Ler arquivo
})

server.listen(port, () => console.log('Server fs'))