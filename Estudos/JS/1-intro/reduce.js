//Reduce 2 params - Acumulador e Elemento
//tt = total (inicia com 0), após somar com 1 tt = 1, dps soma com 2 e tt = 3...

const numbers = [1,2,3,4,5,6]

//TOTAL
const total = numbers.reduce((tt, el) => tt + el)
console.log('TOTAL: ' + total)

//MÉDIA
const avg = numbers.reduce((acumulador, el, indice, array) => {
    if(indice === array.length -1)
    {
        return (acumulador + el) / array.length
    }
    else 
    {
        return acumulador + el
    }
})
console.log('MÉDIA: ' + avg)