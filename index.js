require('dotenv').config()

const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/git', (req, res) => res.send('<h1>gitHub</h1>'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))