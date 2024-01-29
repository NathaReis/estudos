//npm i mysql2 --save
const conn = async () => 
{
    if(global.conexao && global.conexao.state != 'disconected')
    {
        return global.conexao
    }
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:admin@localhost:3306/estudos")
    console.log('Conectou ao banco')
    global.conexao=con
    return con
}

module.exports = {}