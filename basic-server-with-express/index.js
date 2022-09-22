const express = require('express');
const app = express();
const portNumber = 3000;

app.get('/',(req,res)=>{
    res.status(200).send("This is Index Page");
});

app.get('/second-page',(req,res)=>{
    
    let header = "<h1>This is Second Page</h1>";
    let p = "<p>(This paragraph and above header sent from server as html content)</p>"
    res.status(200).send(header + p);
});

app.get('*',(req,res)=>{
    res.status(404).send("Error 404 ! Page not found");
});

app.listen(portNumber, ()=>{
    console.log(`Server is started at port: ${portNumber}`);
})

