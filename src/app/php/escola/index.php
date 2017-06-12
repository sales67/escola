<?php
//include_once('http.php');


$login_link = "http://localhost:8080/login?user=";

$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";

$t = $username*50*100*2/20;


    $conn = new mysqli($servername, $username, $password,$db);




if ($conn->connect_error) {
    echo("error");
}
else{$correcte = [
    'status' => 'ok',
    'token' => $t,
];
    echo json_encode($correcte);
    $conn= mysql_connect($servername,$username,$password);
    }

?>
