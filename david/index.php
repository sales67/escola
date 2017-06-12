<?php

$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";
$t = $username*3;
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else{
    $token=[
        'status'=>'ok',
        'token'=>$t,
    ];  
    
    echo json_encode($token);
    $conn= mysql_connect($servername,$username,$password);
};

//ThePassword
?>

