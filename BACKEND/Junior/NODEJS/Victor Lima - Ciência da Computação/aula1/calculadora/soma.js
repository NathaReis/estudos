const soma = (...val) => {
    return val.reduce((acumulador, valor) => acumulador + valor )
}

module.exports = soma