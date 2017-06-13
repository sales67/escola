<?php
//include_once('http.php');





$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";


$t = $username*50*100*2/20;


$db = new mysqli($servername, $username, $password,$db);

<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 5307ff10fc2305408fe9e9463436a0664b7c2275
>>>>>>> d2daeb0672e0f3d3ceb141e4544886b745f31639
ob_end_clean();


if ($db->connect_error) {
    $fail = [
    'status' => 'fail',
    'token' => $t,
];
   echo json_encode($fail);
}
<<<<<<< HEAD
else{$correcte = [

    'status' => 'ok',
    'token' => $t,
];
    echo json_encode($correcte);

}
=======
else{
    $correcte = [
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 252dd1ba4af9ab455d0eaf9f2c602c8e1a305c07
>>>>>>> 5307ff10fc2305408fe9e9463436a0664b7c2275
>>>>>>> d2daeb0672e0f3d3ceb141e4544886b745f31639


/*
// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection

<<<<<<< HEAD
=======

=======
>>>>>>> 5307ff10fc2305408fe9e9463436a0664b7c2275
if ($conn->connect_error) {
    echo("error");
}

$conn= mysql_connect($servername,$username,$password);
//$t = $username*3;
//ThePassword

else{$correcte = [

    'status' => 'ok',
    'token' => $t,
];
    echo json_encode($correcte);

}

    $conn= mysql_connect($servername,$username,$password);
    }

*/

?>

