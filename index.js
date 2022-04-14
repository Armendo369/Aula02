const express = require('express') 
const server = express()

server.listen (3000, () => {
    console.log("Servidor está funcionando...")
})

server.get('/', (req,res) => {
    return res.json({mensagem: "Nossa API está funcionando..."})
})