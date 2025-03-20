<?php
require 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    
    if ($stmt->execute([$name, $email, $message])) {
        echo "<script>alert('Thank you for your feedback!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('There was an error submitting your feedback. Please try again.'); window.history.back();</script>";
    }
}
?>