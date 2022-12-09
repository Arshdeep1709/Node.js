const express = require('express');
const app = express();
const port = 3500;

// app.get('', (req,res) =>{
// });

app.use(express.static(__dirname + 'index.html'));        

app.listen(port, () =>{
         console.log("Running....")
});