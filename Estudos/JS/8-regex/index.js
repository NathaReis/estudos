//Aula 105 de CFB Cursos
let nome = new String("Nathana David Reis")
let email = "nd7380075@nathan.com.braaaaaaa"

/* Aula 1 Base */
console.log("Aula 1")
console.log(nome)
console.log(nome.search(/david/i)) //i = não usar case sensitivo
console.log(nome.match(/a/g)) //g = global, pega todos os caracteres "a"
console.log(nome.match(/a/ig)) //g = global, pega todos os caracteres "a" e ignora a sensitividade
console.log(nome.replace(/a/ig,"Nome")) //Substitui todas as letras "a" grandes e pequenas, por "Nome"
console.log("\n")

/* Aula 2 Padrões */
//Metacaracteres
console.log("Aula 2")
console.log(email.match(/[a-d|0-9|]/ig)) //Retorna tudo de "a" até "m" no email e de 0 até 9
console.log(email.match(/[a-d|k-z|0-9|]/ig)) //Com mais faixas 
console.log(email.match(/\d/ig)) //Com metada retorna números
console.log(nome.match(/\s/ig)) //Com metada retorna espaços
console.log(nome.match(/\bP/ig)) //Com metada retorna AlphaNumerics

//Quantificadores
console.log(email.match(/a+/ig)) //Retorna "a" que está junto
console.log(email.match(/na*/ig))
console.log(email.match(/na?/ig))

