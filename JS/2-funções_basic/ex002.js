//1
function exe(fn)
{
    typeof fn == 'function' ? fn() : exe(() => {console.log('Erro')})
}

exe(() =>
{
    console.log('Executado!')
})

//2 
function potencia(base)
{
    return function(exp)
    {
        return Math.pow(base, exp)//base²
    }
}
const potencia2 = potencia(2)
console.log(potencia2(12))

//3
const somar = (n1) =>
{
    return (n2) =>
    {
        return (n3) =>
        {
            return n1 + n2 + n3
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(3))