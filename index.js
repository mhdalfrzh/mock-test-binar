const express = require('express')
const app = express()
const authRoutes = require('./routes/authRoute.js')
const todoRoutes = require('./routes/todoRoute.js')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT

app.use(bodyParser.json())

app.use('/', authRoutes);
app.use('/', todoRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})