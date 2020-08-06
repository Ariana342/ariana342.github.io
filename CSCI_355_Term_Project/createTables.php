<?php
	$servername = "localhost";
	$username = "username";
	$password = "password";
	$dbname = "myDB";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	// SQL to create User Table
	$sql = "CREATE TABLE User (
		userID INT(9) NOT NULL, 
		username VARCHAR(255) DEFAULT NULL,
		password VARCHAR(255) NOT NULL,
		PRIMARY KEY (userID),
	)";

	if ($conn->query($sql) === TRUE) {
	    echo "Table Game created successfully";
	} else {
	    echo "Error creating table: " . $conn->error;
	}

	// SQL to create Game Table
	$sql = "CREATE TABLE Game (
		gameID INT(9) NOT NULL, 
		userID INT NOT NULL,
		moves JSON NOT NULL,
		PRIMARY KEY (gameID),
		FOREIGN KEY (userID) REFERENCES User(userID)
	)";

	if ($conn->query($sql) === TRUE) {
	    echo "Table Game created successfully";
	} else {
	    echo "Error creating table: " . $conn->error;
	}

	$conn->close();
?>
