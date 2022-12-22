const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
   res.end('Home Page')
  }
  if(req.url === '/about'){
   res.end('About Page')
  }
  if(req.url === '/contact'){
   res.end('Contact Page')
  }
  res.end(
    `<p>Error Page</p>
    <a href="/">Go back to HomePage</a>
    `
  )
})

server.listen(5000)
