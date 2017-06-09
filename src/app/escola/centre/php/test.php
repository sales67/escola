<?php 
	
		/*$servername = "localhost:3306/"; //jdbc:mysql://localhost:3306/db_escola
		$username = "springuser";
		$password = "springuser";

		// Create connection
		$conn = new mysqli($servername, $username, $password);

		// Check connection
		if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
			echo "NO connect";
		*/
			
			$token = "abcd-4";
			echo(tokenAnalizer($token));

			function tokenAnalizer($token){

				$token =explode('-',$token);

				$tokken = $token[0];

				$tokken = str_split($tokken);

				if (sizeof($tokken)==$token[1]) {
					return "correcte";
				}
				else{
					return "no";
				}
			}
			
			//$tokenDivide = explode('',$tokken);

			//print_r($tokenDivide);
		
?>