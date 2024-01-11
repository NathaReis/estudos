const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//CALLBACK
console.log("Inicio callback")
const exibirConteudo = (err, conteudo) =>
{
    console.log(conteudo.toString() + ' 9')
}
fs.readFile(caminho, exibirConteudo)
console.log("Fim callback")

//SYNC
console.log("Inicio sync")
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString() + ' 16')
console.log("Fim sync 17")
