<?php
//include_once('http.php');

<<<<<<< HEAD
=======

$login_link = "http://localhost:8080/login?user=";

>>>>>>> eeac08bc319a9677bf7617c4405f6d7ec5704b79
$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";

<<<<<<< HEAD
$t = $username*50*100*2/20;


    $conn = new mysqli($servername, $username, $password,$db);



=======
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
<<<<<<< HEAD
// Check connection
=======
>>>>>>> 615f6cde09681d8b433f61ead04b5ccdb59e91de

>>>>>>> eeac08bc319a9677bf7617c4405f6d7ec5704b79
if ($conn->connect_error) {
    echo("error");
}
<<<<<<< HEAD

$conn= mysql_connect($servername,$username,$password);
//$t = $username*3;
//ThePassword
=======
else{$correcte = [
    'status' => 'ok',
    'token' => $t,
];
    echo json_encode($correcte);
    $conn= mysql_connect($servername,$username,$password);
    }

>>>>>>> eeac08bc319a9677bf7617c4405f6d7ec5704b79
?>

