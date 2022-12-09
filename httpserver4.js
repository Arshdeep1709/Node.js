const http = require('http');
const fs = require('fs');
const port = 2020;

const server = http.createServer(function(req,res){
    
    res.statusCode=200;
    res.setHeader('content-type', "text/html");
    console.log(req.url);
    if(req.url === "/home") {
    res.statusCode=200;
    const data = fs.readFileSync('server.html');
    res.end(data.toString())
    } 
    else{
        res.statusCode=404;
        res.end("Error: Page not found")
    }

});

server.listen(port,function(error){
    if(error){
        console.log("Something went wrong...",error);
    }
    else {
        console.log("Server successfully running on port "+ port)
    }

});