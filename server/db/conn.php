<?php
$host = 'localhost';
$dbname = 'kivo';
$user = 'root';
$pass = ''

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo json_encode([
    "status" => "error",
    "message" => "Error de conexión: " . $e->getMessage()
  ]);
  exit;
}
?>
