const $letras = document.querySelector(".letras")

const letra ="Vai chover quanto for preciso pra crescer-Me podar quanto for preciso pra mudar-Que é pra ter em mim um pouquinho de você-Me esvaziar no fim pra me encher do teu querer-O tempo não para à espera de mim-Se não for tua graça, o que sobra no fim?-O tempo não para pra perder sem razão-Eu me lanço aos teus pés e me encontro em tuas mãos Vai chover o que for preciso pra crescer"

const formatLetra = letra =>
{
    letra = letra.split('-')
    return letra
}

let cont = 0
setTimeout(() =>
{
    letra = formatLetra(letra)
    $letras.innerHTML = letra[cont]
    cont++
},4000)