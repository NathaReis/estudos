const http = require('http') //Método
http.createServer((req,res) => 
{
    res.writeHead(200, {
        'Content-Type':'text/plain' //Status 200 OK e mensagem do tipo text
    })
    res.write('CFB Cursos\n') //Retorno visto pelo usuário
    res.end()
}).listen(7777) //Porta de acesso, onde está sendo ouvido
