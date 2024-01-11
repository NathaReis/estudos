
const exec = (fn,a,b) =>
{
    //QUANDO CHEGAR A RESPOSTA EXECUTA fn
    return fn(a,b)
}

const somarNoTerminal = (x,y) => console.log(x + y)
const subtrairNoTerminal = (x,y) => console.log(x - y)

//CHAMOU
exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

//INTERVAL
const fn = () => console.log('Exec...')
setInterval(fn, 100)