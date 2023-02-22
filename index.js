const express = require('express')
const bodyParser = require('body-parser')
const  pessoasRoute  = require( './api/routes/pessoasRoute.js')
const  niveisRoute  = require( './api/routes/niveisRoute.js')
const turmasRoute  = require( './api/routes/turmasRoute.js')

const app = express()
const port = 3000


app.use(bodyParser.json())

app.use(pessoasRoute,niveisRoute,turmasRoute); //permitindo o express js usar o arquivo pessoasRoute.js


app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))


