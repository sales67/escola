<?php
//include_once('http.php');





$servername = "127.0.0.1";
$username =  htmlspecialchars($_GET["user"]);
$password =  htmlspecialchars($_GET["psswd"]);
$db = "escola";


$t = $username*50*100*2/20;


$db = new mysqli($servername, $username, $password,$db);


ob_end_clean();


if ($db->connect_error) {
    $fail = [
    'status' => 'fail',
    'token' => $t,
];
   echo json_encode($fail);
}
else{$correcte = [

    'status' => 'ok',
    'token' => $t,
];
    echo json_encode($correcte);

}


/*
// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection

=======

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

