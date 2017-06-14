var express     = require('express');  
var app         = express();  
//var mongoose     = require('mongoose');

//mongoose.connect('localhost:3306/root');

let http = require('http');
let server = http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello, World!\n');
});
server.listen(8000);
console.log('Server running on port 8000');


var mysql      = require('mysql');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'springuser',
 password : 'springuser',
 database : 'centre'
});
var app = express();

connection.connect(function(err){
if(!err) {
   console.log("Database is connected \n"); 

} else {
   console.log("Error connecting database \n");  
}
});

/*var queryString = 'SELECT * FROM  centre';

connection.query(queryString, function(err, rows, fields) {
   if (err) throw err;

   
       console.log(rows);
   
});*/
var adr = '1';
var sql = 'SELECT * FROM centre WHERE id = ?';
connection.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});


app.listen(3000);
