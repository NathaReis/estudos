const nums = [1,2,3]
const numsV4 = nums.map(num => num * 4)
console.log(numsV4.map(num => num * 2))

//Nomes
const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primLetra = texto => texto[0]
console.log(names, names.map(primLetra))