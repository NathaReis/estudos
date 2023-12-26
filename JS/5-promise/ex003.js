function gerarNumerosEntre(min,max, tempo)
{
    if(min > max) [max, min] = [min, max]  // troca a ordem dos elementos

    return new Promise(resolve =>
        {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
}

gerarNumerosEntre(1,60)
    .then(res => `O número gerado foi: ${res}`)
    .then(console.log)