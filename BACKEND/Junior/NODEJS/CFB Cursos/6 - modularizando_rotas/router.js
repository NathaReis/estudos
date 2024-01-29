//npm i router --save
const express = require('express')
const rotas = express.Router()

let cursoInfo = [
    {'curso':'node','info':'Curso de node'},
    {'curso':'react','info':'Curso de react'},
    {'curso':'java','info':'Curso de java'},
    {'curso':'arduino','info':'Curso de arduino'},
    {'curso':'js','info':'Curso de js'},
    {'curso':'rasberyp','info':'Curso de rasberyp'},
    {'curso':'ingles','info':'Curso de ingles'},
]

rotas.get('/', (req,res) => 
{
    res.json({ola:'Seja bem vindo(a)!'})
})

rotas.get('/:cursoid',(req,res) => 
{
    const curso = req.params.cursoid 
    const cursoI = cursoInfo.find(i => i.curso == curso)
    if(!cursoI)
    {
        res.status(404).json({
            erro:'Curso não encontrado!',
            cursoPesquisado:curso
        })
    }
    else 
    {
        res.status(200).json({
            success:'Curso encontrado!',
            cursoPesquisado:cursoI
        })
    }
})

module.exports = rotas