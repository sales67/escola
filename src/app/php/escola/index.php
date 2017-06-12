<?php
//include_once('http.php');



$login_link = "http://localhost:8080/login?user=";


$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";

<<<<<<< HEAD
=======

>>>>>>> 10da7584de74d11ba2dd98487437fbcea4922939
$t = $username*50*100*2/20;


$db = new mysqli($servername, $username, $password,$db);

<<<<<<< HEAD

=======
<<<<<<< HEAD
ob_end_clean();
//$db = mysqli_connect($servername, $username, $password,$db);

if ($db->connect_error) {
    $fail = [
    'status' => 'fail',
    'token' => $t,
];
   echo json_encode($fail);
}
else{
    $correcte = [
=======
<<<<<<< HEAD
>>>>>>> 252dd1ba4af9ab455d0eaf9f2c602c8e1a305c07


/*
// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection

if ($conn->connect_error) {
    echo("error");
}

$conn= mysql_connect($servername,$username,$password);
//$t = $username*3;
//ThePassword

else{$correcte = [
>>>>>>> 10da7584de74d11ba2dd98487437fbcea4922939
    'status' => 'ok',
    'token' => $t,
];
    echo json_encode($correcte);
<<<<<<< HEAD
}
=======
    $conn= mysql_connect($servername,$username,$password);
    }

*/
>>>>>>> 10da7584de74d11ba2dd98487437fbcea4922939
?>

