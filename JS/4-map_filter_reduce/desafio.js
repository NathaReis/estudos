const carrinho = 
[
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true}
]

//1. fragil == true
//2. qnt + preço
//3. gerar a média dos totais

const getFragil = el => el.fragil
const totalEl = el => el.qtde * el.preco

const med = carrinho
    .filter(getFragil)
    .map(totalEl)
    .reduce((acc, el) =>
    {
        novaQnt = acc.quantidade + 1
        novoTotal = acc.total + el

        return {
            quantidade: novaQnt,
            total: novoTotal,
            media: novoTotal / novaQnt
        }
        
    }, {quantidade: 0, total: 0, media: 0})
    .media

console.log(med)