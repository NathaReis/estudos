const mul = (...val) => {
    return val.reduce((acu,valor) => acu * valor)
}

module.exports = mul