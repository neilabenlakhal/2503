const http = require('http') // http built in module
    //use parameters req and res for our server as we need access to these
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page")
    }
    //res is response being sent back
    if (res.url === '/about') {
        res.end('Here is our short history')
    }

    res.end("<h1> oops! </h1><p> cannot find what you are looking for </p><a href = '/'> back home </a>")
})

server.listen(5800)