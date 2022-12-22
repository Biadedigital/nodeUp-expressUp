const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/about') {
    res.end('About Page')
  }
  if (req.url === '/contact') {
    res.end('Contact Page')
  }
  res.end(
    `<p>Error Page</p>
    <span>Go back to: </span>
    <a href="/">HomePage</a>
    <a href="/about">AboutPage</a>
    <a href="/contact">ContactPage</a>
    `
  )
})

server.listen(5000)
