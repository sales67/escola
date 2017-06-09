<?php

    $servername = "localhost";
    $username = "jmg";
    $password = "jmg";

    $name = $pass = "";

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
      // $name = test_input($_GET['name']);
        $name = $_GET['name'];
      //$pass = test_input($_GET['pass']);
        $pass = $_GET['pass'];
    }
    
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

    
    $conn = new mysqli($servername, $username, $password, "db_escola");

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
        echo "NO connect";
    }

    $sql = "SELECT *
            FROM db_escola.usuaris
            WHERE nick = '$name' AND password = '$pass'";// . $name;// . $name . "AND password=" . $pass;

    $result = $conn -> query($sql);

    if ($result->num_rows > 0) {
        //header('Location: http://localhost/school/src/app/escola/app.component.html');
        // header('Location: http://localhost/school/php/hola.html');
        
        $sum = 0;
        $token = 300;
        $array = array();
        $array = str_split($name);
        
        foreach($array as $i) {
            $sum += ord($i);
        }
        
        //echo "l'usuari es:   " . $sum;
        
        $sum = $sum + $token;
        
        $array2 = array();
        $array2['status'] = 'OK';
        $array2['token'] = $sum;
        
        echo json_encode($array2);
        
        exit;
        
    } else {
        $array2 = array();
        $array2['status'] = 'FAIL';
        $array2['token'] = 0;
        
        echo json_encode($array2);
        // 
        // echo "Usuari incorrecte";
    }
?>