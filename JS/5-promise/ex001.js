//Definindo
let p = new Promise(resolve =>
{
    resolve(['Ana', 'Bia'])
}) //Function and p is obj

const primEl = array => array[0]
const minuscula = string => string.toLowerCase()

//Chamando
p
    .then(primEl)
    .then(minuscula)
    .then(console.log)