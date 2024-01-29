const div = require("./calculadora/divisao")
const mul = require("./calculadora/multiplicar")
const som = require("./calculadora/soma")
const sub = require("./calculadora/subtrair")

console.log(div(mul(sub(10,2,som(1,2)),2), 2))