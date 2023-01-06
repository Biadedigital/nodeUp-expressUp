const express = require('express')
const path = require('path')
const { products } = require('./data.js')

const app = express()

// setup static and middleware
// app.use(express.static(path.resolve(__dirname, '../navbar-app')))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
// })

app.get('/', (req, res)=>{
  
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})