function gerarNumerosEntre(min,max, numsProibidos)
{
    if(min > max) [max, min] = [min, max]  // troca a ordem dos elementos

    return new Promise((resolve, reject) =>
        {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            if(numsProibidos.includes(aleatorio))
            {
                reject('Número repetido!')
            }
            else 
            {
                resolve(aleatorio)
            }
            resolve(aleatorio)
        })
}

async function gerarMegaSena(qntNum)
{
    try
    {
        const nums = []
        for(let _ of Array(qntNum).fill())//Array(num).fill gera uma array com length == a num
        {
            nums.push(await gerarNumerosEntre(1,60, nums))
        }
        return nums        
    }
    catch(e) 
    {
        throw "Que chato!!!"
    }

}

gerarMegaSena(2)
    .then(num => console.log(num))
    .catch(erro => console.log(erro))