//Creating http const for building our server
const http = require('http');
const calc = require('./sub');
const mult = require('./mult');
const sum2 = require('./sum2');


//using http to crate server with 2 arguments - req and res
http.createServer
((req,res) => 
{
    //Writing the content type to be displayed
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(" sub: " + calc.sub());
    res.write(" mult: " + mult.mult());
    res.write(" Suma: " + sum2.sum2());
    //res.write();
    //content to be displayed on your backend server
    res.end(' Hello, World! first server');

}
).listen(8080); //Listening on port 8080

//Runing and testint the server
console.log('Server running at http://localhost:8080/');