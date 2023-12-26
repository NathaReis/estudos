//Função construtora
function Produto(nome, preco, desc = 0.15)
{
    this.nome = nome 
    this.preco = preco 
    this._desc = desc 

    this.precoFinal = function(){
        return this.preco * (1 - this._desc)
    }
}

Produto.prototype.log = function()
{
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function ()
    {
        return this._desc
    },

    set: function(novoDesc)
    {
        if(novoDesc >= 0 && novoDesc <= 1)
        {
            this._desc = novoDesc
        }
    }
})
Object.defineProperty(Produto.prototype, 'descStr', {
    get: function ()
    {
        return `${this._desc * 100}%`
    }
})

const p1 = new Produto('Caneta', 10, 0.2)
console.log(p1.nome)
console.log(p1.precoFinal())
p1.desc = 0.1
p1.desc = 2
console.log(p1.desc)
console.log(p1.descStr)

console.log('\n')

const p2 = new Produto('Camiseta', 20.39)
console.log(p2.preco)
p2.log()
