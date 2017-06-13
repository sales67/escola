/*var express     = require('express');  
var app         = express();  



let http = require('http');

let server = http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/javascript'});
    
});
server.listen(8000);
console.log('Server running on port 8000');


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '50',
  password : 'Sales123',
  database : 'escola'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected \n");  
} else {
    console.log("Error connecting database \n");  
}
});

var queryString = 'SELECT * FROM  alumne';


 
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    
       console.log(rows);
   

    

app.get('/', function(req, res) {

   // Get /musician/Mat
   console.log(req.params.name)
   // => Matt

   res.send(rows);
});
     
    
});


app.listen(1000);
*/