var http = require('http');
var dt = require('./firstModule.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently " + dt.myDateTime() + "<br><br>");
    res.end('Hello World!!!');
}).listen(4201);