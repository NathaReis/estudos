const numbers = [1,2,3,4,5,6]

const numbersImp = numbers.filter(el => el%2 != 0)
console.log(numbers, numbersImp)

//----------------------------------------------------

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const getScore = el => el.score
const greatStudent = el => getScore(el) > 9

const result = students
.filter(greatStudent)

console.log(students, result)