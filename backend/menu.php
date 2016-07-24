<?php
	// Maged Aziz @ July-24-2016
	/// Database Connection String return $connetion
	require_once 'db.php';
	
	// SQL Query to Select all Branches 
	$sql = 'SELECT * FROM category INNER JOIN items ON category.categoryid=items.categoryid;';
	
	// Execute SQL Query from the Database
	$execSQL = mysqli_query($connection,$sql);
	
	//Fetch all rows in SQL Object
	$menu = array();
	 while($data = mysqli_fetch_object($execSQL)){
		 array_push($menu,$data);
	 }
	 //Print all Results in JSON Array
	echo json_encode($menu);
	
?>