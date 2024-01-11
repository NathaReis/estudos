const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = caminho =>
    {
        if(!caminho)
        {
            return 'Caminho inválido!'
        }

        return new Promise(resolve =>
        {
            fs.readFile(caminho, function(_,  conteudo)
            {
                resolve(conteudo.toString())
            })
        })
    }

lerArquivo(caminho)
    .then(console.log)