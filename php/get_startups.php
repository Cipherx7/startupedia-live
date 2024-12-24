<?php
header('Content-Type: application/json');

// Define your SQL credentials
$servername = "startupedia.database.windows.net"; // Change this if your database is hosted elsewhere
$username = "supreme"; // Replace with your actual database username
$password = "1234567890zxcvbnm,"; // Replace with your actual database password
$dbname = "signup"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch startup data
$sql = "SELECT id, name, description, image, website, industries, founder, help_needed, collaboration FROM startups";
$result = $conn->query($sql);

// Initialize an array to hold the startup data
$startups = array();
if ($result->num_rows > 0) {
    // Fetch each row and add it to the startups array
    while($row = $result->fetch_assoc()) {
        $startups[] = $row;
    }
}

// Return the startup data as JSON
echo json_encode($startups);

// Close the database connection
$conn->close();
?>
