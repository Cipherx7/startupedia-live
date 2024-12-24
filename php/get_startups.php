// get_startups.php
<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "startupedia";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, name, description, image FROM startups";
$result = $conn->query($sql);

$startups = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $startups[] = $row;
    }
}

echo json_encode($startups);
$conn->close();
?>
