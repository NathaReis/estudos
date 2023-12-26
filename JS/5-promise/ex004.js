function gerarNumerosEntre(min,max, tempo)
{
    if(min > max) [max, min] = [min, max]  // troca a ordem dos elementos

    return new Promise(resolve =>
        {
            setTimeout(() =>
            {
                const fator = max - min + 1
                const aleatorio = parseInt(Math.random() * fator) + min
                resolve(aleatorio)                
            },tempo)
        })
}

//Quando todos forem resolvidos / Promise.all()
const gerarVariosNumeros = () =>
{
    return Promise.all([
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,3000),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,1500),
    ])
}

console.time('Promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {console.timeEnd('Promise')})