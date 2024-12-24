<?php
try {
    $conn = new PDO("sqlsrv:server = tcp:startupedia.database.windows.net,1433; Database = signup", "supreme", "1234567890zxcvbnm,");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE Email = :email";
    $stmt = $conn->prepare($sql);
    $stmt->execute([':email' => $email]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['PasswordHash'])) {
        header("Location: ../dashboard.html"); // Redirect on success
        exit();
    } else {
        echo "Invalid email or password.";
    }
}
?>
