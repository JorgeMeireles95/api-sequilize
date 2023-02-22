const express = require('express')
const bodyParser = require('body-parser')
const  pessoasRoute  = require( '../Nova pasta/api/routes/pessoasRoute.js')


const app = express()
const port = 3000


app.use(bodyParser.json())

app.use(pessoasRoute); //permitindo o express js usar o arquivo pessoasRoute.js




app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))


