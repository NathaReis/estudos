const nums = [3,29,1,4,29,3,47,21,3,-3,2,4]
const pares = nums.filter(el => el % 2 ===0)
const impares = nums.filter(el => el % 2 !==0)

console.log(`\nNúmeros: ${nums}\nPares: ${pares}\nImpares:${impares}\n`)