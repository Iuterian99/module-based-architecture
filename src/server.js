const express = require('express')
const app = express()

app.use(express.json())
app.use(require('./modules'))

app.listen(9000, console.log(9000))