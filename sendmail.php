<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'твой@email.com';
    $subject = 'Новое письмо от ' . $name;
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Письмо ебнуло на сервер!";
} else {
    echo "Чё-то пошло не так, братан.";
}
?>