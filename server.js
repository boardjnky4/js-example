const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/foo/', (req, res) => {
  res.send('Hello World, FOO!')
})

app.get('/bar/', (req, res) => {
  res.send('Hello World, BAR!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})