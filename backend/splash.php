<?php
	// Mohammad Moheb @ July-23-2016
	/// Database Connection String return $connetion
	require_once 'db.php';
	
	// SQL Query to Select all Branches 
	$sql = 'SELECT * FROM branches ORDER BY branchname ASC';
	
	// Execute SQL Query from the Database
	$execSQL = mysqli_query($connection,$sql);
	
	//Fetch all rows in SQL Object
	$branches = array();
	 while($data = mysqli_fetch_object($execSQL)){
		 array_push($branches,$data);
	 }
	 //Print all Results in JSON Array
	echo json_encode($branches);
	
?>