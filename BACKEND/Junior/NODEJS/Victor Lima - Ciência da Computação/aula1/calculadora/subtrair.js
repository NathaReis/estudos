const sub = (...val) => {
    return val.reduce((acu,valor) => acu - valor)
}

module.exports = sub