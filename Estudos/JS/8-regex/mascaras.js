//CPF
const cpfs = ['834.372.384-84','837.332.774-44','837332774-44']
cpfs.forEach(cpf => {
    //3 dígitos de 0-9 . 3d de 0-9 . 3d de 0-9 - 2d 0-9
    if(cpf.match(/[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/))
    {
        console.log(cpf)
    }
    else 
    {
        console.log(cpf + ' ' + null)
    }
})
