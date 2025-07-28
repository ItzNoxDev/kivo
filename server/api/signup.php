<?php
header("Access-Control-Allow-Origin: *"); // Permitir peticiones desde React
header("Content-Type: application/json");

include('../db/conn.php');

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['password'])) {
  echo json_encode([
    "status" => "error",
    "message" => "Faltan datos requeridos"
  ]);
  exit;
}

$name = $data['name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Encriptar contraseña

try {
  $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
  $stmt->execute([$name, $email, $password]);

  echo json_encode([
    "status" => "success",
    "message" => "Usuario registrado correctamente"
  ]);
} catch (PDOException $e) {
  echo json_encode([
    "status" => "error",
    "message" => "Error al registrar: " . $e->getMessage()
  ]);
}
?>
