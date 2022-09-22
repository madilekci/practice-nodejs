const http = require('http');
const portNumber = 3000;

const server = http.createServer((req,res)=>{
    
    console.log("Server is started");

    const url = req.url;
    const statusCode = req.statusCode;

    console.log("Url : ", url);
    console.log("Status Code : ", statusCode);

    switch (url) {
        case "/":
            res.write("This is the root page"); // we can return plain text
            break;
        case "/second-page":
            res.writeHead(200,{'Content-type':'text/html'});    // we can modify headers
            res.write("<h3>This is the second page</h3>")       // if we set content type as html, html elements will work
            res.write("<button>I get it</button>")
            break;
    
        default:
            res.writeHead(404,{'Content-type':'text/html'});
            res.write("Page not found !");
            break;
    }
    res.end();

})

server.listen(portNumber,()=>{
    console.log(`Server is started at ${portNumber}`);
});