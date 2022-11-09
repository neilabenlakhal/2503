const http = require('http') 
const server = http.createServer((req,res)=>{
const url = req.url;
    //home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'}) //return status code 
        res.write('<h1>homepage</h1>')
        res.end()
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})  //return status code
        res.write('<h1>about page</h1>')
        res.end()
    }
    //404 resource not found
    else{
        res.writeHead(404,{'content-type':'text/html'})  //return status code
        res.write('<h1>page not found</h1>')
        res.end()
    }  
})  
server.listen(5000) 
