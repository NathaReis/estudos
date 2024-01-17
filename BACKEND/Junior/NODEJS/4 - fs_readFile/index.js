const http = require('http')
const fs = require('fs')
const port = 7777

const server = http.createServer((req,res) =>
{
    fs.readFile('index.html', (err,file) => {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(file)
        return res.end()
    }) //Ler arquivo
})

server.listen(port, () => console.log('Server fs'))