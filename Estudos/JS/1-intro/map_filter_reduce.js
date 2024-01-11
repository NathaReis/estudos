const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const getScore = el => el.score
const greatStudent = el => getScore(el) >= 9

//MÉDIA
const avg = (acumulador, el, indice, array) => {
    if(indice === array.length -1)
    {
        return (acumulador + el) / array.length
    }
    else 
    {
        return acumulador + el
    }
}

console.log(
    students
    .filter(greatStudent)
    .map(getScore)
    .reduce(avg)
)