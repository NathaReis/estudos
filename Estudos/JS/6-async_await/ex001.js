function esperarPor(tempo = 2000)
{
    return new Promise((resolve) =>
    {
        setTimeout(function()
        {
            console.log('Executando...')
            resolve()
        }, tempo)
    })
}

function dez()
{
    return new Promise(resolve =>
        {
            setTimeout(() =>
            {
                const fator = 30 - 1 + 1
                const v = parseInt((Math.random() * fator) * 1)
                resolve(v)
            },1000)            
        })

}

/*
    Preciso criar uma função asincrona para usar o await
    o await espera a resposta para continuar
    diferente do promise que segue o código normalmente
*/
/*PROMISE
esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
    .then(() => esperarPor())
    .then(() => esperarPor())
*/

async function executar()
{
    let valor = await dez()
    console.log(valor)

    await esperarPor(1500)
    console.log(`Async/Await ${valor++}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor++}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor++}...`)

    return valor
}

executar()
    .then(v => console.log(`Valor retornado: ${v}`))

//OU

async function exec()
{
    const valor = await executar()
    console.log(valor)
}
exec()