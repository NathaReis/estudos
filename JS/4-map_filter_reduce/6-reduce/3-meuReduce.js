Array.prototype.meuReduce = function(fn, inicial) 
{
    let acc = inicial 

    for(let i = 0; i<this.length; i++)
    {
        if(!acc && i === 0)
        {
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this)
    }
    return acc 
}


const carrinho = 
[
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lápis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]

const getTotal = item => item.qtde * item.preco
const somar = ((acc, el) => acc + el)

const pontoPartida = 0

const totalGeral = carrinho
    .map(getTotal)
    .meuReduce(somar, pontoPartida)

console.log(totalGeral)
