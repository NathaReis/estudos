//https://replit.com/
//Esse código está no site do replit
const express = require('express')
const port = process.env.PORT || 7777
const app = express()

app.get('/',(req,res) => {
  res.json({msg: 'Bem vindo!'})
  return res.end()
})

app.listen(port, () => console.log("Server: " + port))