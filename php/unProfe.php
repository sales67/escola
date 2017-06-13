<?php
    $servername = "localhost"; //jdbc:mysql://localhost:3306/db_escola
    $username = "jmg";
    $password = "jmg";

    // Create connection
    $conn = new mysqli($servername, $username, $password, "db_escola");


    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
        echo "NO connect";
    } 
    
    //echo "Connected successfully";

    $id = $_GET['id'];

    // demana el nom d'un professor a partir de l'ID
    $sql = "SELECT p.nom as 'profe.nom', p.cognoms as 'profe.cognoms', p.dni as 'profe.dni', c.nom as 'profe.curs.nom', c.credits as 'profe.curs.credits'
            FROM db_escola.professor as p, db_escola.curs as c, db_escola.esport as e, db_escola.practica as pr
            WHERE
                p.id='$id' AND
                p.curs = c.id AND
                p.id = pr.idprofe AND
                pr.idesport = e.id";

  /*  $sql = "SELECT *
            FROM db_escola.professor
            WHERE id=" . $id;
*/

    $result = $conn -> query($sql);

    if ($result->num_rows > 0) {
        $dades = array();
        $dades = $result->fetch_assoc();//fetch_all(MYSQLI_ASSOC);
        
        // array_unshift($dades2, json_encode($dades);
        echo json_encode($dades);
        
    } else {
        echo "0 results";
    }
    
    $conn->close();
?>