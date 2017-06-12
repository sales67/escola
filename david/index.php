<?php

$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";
$t = $username*3;
// Create connection
$conn = new mysqli($servername, $username, $password, $db);

   ob_end_clean();
// Check connection
if ($conn->connect_error) {

   $tokenF=[
        'status'=>'fail',
        'token'=>$t,
    ];  
   echo json_encode($tokenF);
    
} else{
    $token=[
        'status'=>'ok',
        'token'=>$t,
    ];  
    
    echo json_encode($token);
    
}



/*
$login_link = "http://localhost:8080/login?user=";


$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";


$t = $username*3;


    $conn = new mysqli($servername, $username, $password,$db);
*/
//ThePassword
?>

