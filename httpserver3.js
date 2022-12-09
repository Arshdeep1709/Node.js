const http = require('http');
const port = 2000;


const server = http.createServer(function(req,res){

    res.statusCode=200;
    res.setHeader('content-type', "text/html");
    console.log(req.url);
    if(req.url === "/"){
        
        res.end('Hello node');
    }
    else if(req.url === "/home") {

        res.statusCode=200;
        res.end("Home")
    }
    else if(req.url === "/about") {
        res.statusCode=200;
        res.end("About")
    }
    else {
         res.statusCode=404;
         res.end("Error: Page not found")
    }

});

server.listen(port, function(error){

    if(error){
        console.log("Something went wrong", error);
    }
    else {
        console.log("Server is running at port "+ port);
    }

});