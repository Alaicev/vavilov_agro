<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $fam = $_POST['fam'];
    $otc = $_POST['otc'];
    
    $to = "altarev12345@gmail.com"; 
    $subject = "Новое сообщение с формы";
    $message = "Имя: $name\nФамилия: $fam\nОтчество: $otc";
    $headers = "From: morshnev199@mail.ru";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>