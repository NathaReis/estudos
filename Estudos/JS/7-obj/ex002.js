class Produto {
    constructor(nome, preco, desc = 0.15)
    {
        this._nome = nome
        this._preco = preco 
        this._desc = desc 
    }

    //Impedir q o atributo preco receba menores que 0
    get preco()
    {
        return this._preco
    }

    set preco(novoPreco)
    {
        if(novoPreco >= 0)
        {
            this._preco = novoPreco
        }
    }

    /*Padrão
    precoFinal()
    {
        return this.preco * (1 - this.desc)
    }
    */

    get precoFinal() //CHAMAR como se n fosse uma função
    {
        return this._preco * (1 - this._desc)
    }
}

const p1 = new Produto('Caneta', 10, 0.2)
console.log(p1.nome)
//Padrão  ---  console.log(p1.precoFinal())

const p2 = new Produto('Camiseta', 20.39)
p2.preco = -20
console.log(p2.preco)
console.log(p2.precoFinal)