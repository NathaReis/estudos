/*
setTimeout(function()
{
    console.log('Executando callback...')

    setTimeout(() =>
    {
        console.log('Executando callback...')
        setTimeout(() =>
        {
            console.log('Executando callback...')
            setTimeout(() =>
            {
                console.log('Executando callback...')
            },2000)
        },2000)
    },2000)
},2000)
*/

//PROMISE 
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
esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
    .then(() => esperarPor())