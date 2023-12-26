const carrinho = 
[
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lápis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]

const getNome = car => car.nome
const nomes = carrinho.map(getNome)

const getTotal = car => car.qtde * car.preco
const total = carrinho.map(getTotal)

console.log(`Nomes: ${nomes}\nPreços: ${total}`)