<?php
try {
    $conn = new PDO("sqlsrv:server = tcp:startupedia.database.windows.net,1433; Database = signup", "supreme", "1234567890zxcvbnm,");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $passwordHash = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash password

    $sql = "INSERT INTO users (FirstName, LastName, Email, PasswordHash) VALUES (:firstName, :lastName, :email, :passwordHash)";
    $stmt = $conn->prepare($sql);

    try {
        $stmt->execute([
            ':firstName' => $firstName,
            ':lastName' => $lastName,
            ':email' => $email,
            ':passwordHash' => $passwordHash,
        ]);
        header("Location: ../dashboard.html"); // Redirect on success
        exit();
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) { // Duplicate email
            echo "Error: Email already exists.";
        } else {
            echo "Error: " . $e->getMessage();
        }
    }
}
?>
