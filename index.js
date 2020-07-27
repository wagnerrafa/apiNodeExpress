/*npm install express --sav  iniciar projeto do node
npm init
node index.js*/

const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))

userRoute(app)

app.get('/', (req, res) => res.send('Hello world express'))   //req= dados da requisição, res=resolver a requisiçao

app.listen(port, () => console.log('Api rodando port 3000'))