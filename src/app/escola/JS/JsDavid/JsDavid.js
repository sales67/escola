

/*
app.get('/', function (req, res) {
 res.send('Hello World!')
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})*/

//var express = require("express");
//var app = express();

/*
const express = require('express');
const app = express();
var bodyParser = require ("body-parser");

//app.use(express.static("cliente"))

app.listen(8000, function(){
    console.log("app listen");
})
app.get("/",function(req,res){
    res.sendfile("JsDavid.component.html");
    var user = req.body.user;
    var contra = req.body.password;
    if(user == "333" && contra == "ThePassword"){
        res.redirect("/principal");}
    else{
        res.redirect("/error");
    }
    
    //console.log(usuario);
});



app.get("/principal",function(req,res){
    res.send("wassap");})
        
        
app.get("/error",function(req,res){
    res.sendfile("JsDavid.component.html");})
        */
var express     = require('express');  
var app         = express();
var http = require('follow-redirects').http
//var mongoose     = require('mongoose');

//mongoose.connect('localhost:3306/root');

//let http = require('http');
let server = http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
});

server.listen(8000);
console.log('Server running on port 8000');


var mysql      = require('mysql');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : '333',
 password : 'ThePassword',
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

var queryString = 'SELECT * FROM  curs';

connection.query(queryString, function(err, rows, fields) {
   if (err) throw err; 
    
    console.log(rows);
    app.get("/", function(req, res){
        res.send(rows);
    });
  
});
app.listen(3000);