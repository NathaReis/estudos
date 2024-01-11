const { rejects } = require("assert");

function funcionarOuNao(valor, chanceErro)
{
    return new Promise((resolve, reject) =>
    {
        if(Math.random() < chanceErro)
        {
            reject('Ocorreu um erro!')
        }
        else 
        {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(r => `Valor: ${r}`)
    .then(
            r => consol.lo(r),
            err => console.log('Erro: ' + err)
        )
    .then(() => console.log("Fim"))
    .catch(err => console.log(`Erro geral: ${err}`))