<?php
//include_once('http.php');



$login_link = "http://localhost:8080/login?user=";


$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";


$t = $username*50*100*2/20;


$db = new mysqli($servername, $username, $password,$db);


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


/*
// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection

=======
>>>>>>> b0e495b6ff26412b4d35a9247e275501ad939d9e
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

