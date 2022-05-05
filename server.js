const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/foo/', (req, res) => {
  res.send('Hello World, FOO v2.0!')
})

app.get('/bar/', (req, res) => {
  res.send('Hello World, BAR!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})