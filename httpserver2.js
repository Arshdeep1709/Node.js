const http = require('http');
const fs = require('fs');
const port = 2020;

const server = http.createServer(function(req,res){
    res.writeHead(200, {"content-type": 'text/html'})
    fs.readFile('index.html', function(error,data){
        if(error){
            res.writeHead(404)
            res.write("Error: File not found")
        }
        else{
            res.write(data)
        }
        res.end()
    })

});
server.listen(port,function(error){
    if(error){
        console.log("Something went wrong", error);
    }
    else {
        console.log("Server is running on port "+ port);
    }

});