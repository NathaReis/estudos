const http = require('http')
const porta = 7777
const host = '127.0.0.1'
const servidor = http.createServer((req,res) =>
{
    res.writeHead(
        200, {
            'Content':'text/html'
        }
    )

    switch(req.url)
    {
        case '/':
            res.write('<h1>Seja bem vindo(a)!</h1>\n<a href="canal">Canal</a>\n<a href="cursos">Cursos</a>')
            break 
        case '/canal':
            res.write('<h1>CFB Cursos</h1>\n<a href="/">Voltar</a>')
            break
        case '/cursos':
            res.write('<h1>Curso</h1>\n<a href="/">Voltar</a>\n<a href="cursos/node">Node</a>')
            break
        case '/cursos/node':
            res.write('<h1>Curso de NodeJS</h1>\n<a href="/cursos">Voltar</a>')
            break
        default:
            res.write(`<h1>Error 404, page not found</h1><a href="/">Home page</a>`)
    }

    res.end()
})

servidor.listen(porta, host, () => console.log('Servidor'))