var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "jmg",
  password: "jmg",
  database: "db_escola"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT p.nom, p.cognoms, p.dni, p.curs, e.nom FROM professor as p, practica as pr, esport as e WHERE p.id = pr.idprofe AND pr.idesport = e.id", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});