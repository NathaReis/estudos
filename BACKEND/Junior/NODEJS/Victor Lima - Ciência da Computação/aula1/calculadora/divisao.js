const div = (...val) => {
    return val.reduce((acu,valor) => acu / valor)
}

module.exports = div