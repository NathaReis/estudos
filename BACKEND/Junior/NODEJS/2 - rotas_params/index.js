const http = require('http');
const url = require('url');
const porta = 7777;
const host = '127.0.0.1';
const servidor = http.createServer((req,res) =>{
    res.writeHead(
        200, {
            'Content':'text/html'
        }
    );
    const p = url.parse(req.url, true).query
    //Na url localhost:7777/?nome=Nathan&curso=NodeJS
    res.write(`<p>${p.nome}</p>`)
    res.write(`<p>${p.curso}</p>`)
    res.end();
})

servidor.listen(porta, host, () => console.log('Servidor'));