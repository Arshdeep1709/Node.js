const express = require('express');
const app = express();

const port = 4900;

app.get('/home',(req,res) =>{
    res.statusCode = 200;
    res.end("Home")
})
app.get('/about',(req,res) =>{
    res.statusCode = 200;
    res.end('About');
})

app.listen(port, () =>{
    console.log("Server listening on port "+ port);
})
