
<?php
$to = "lyapina.natalya@ukr.net";
$subject = "Подтверждение присутствия на свадьбе";
$message = "Имя: ".$_POST['fio']."
Email: ".$_POST['mail']."
Сообщение: ".$_POST['mas'];
$header = "Content-type:text/plain; charset = UTF-8\r\nReply-To:\r\nFrom: <contact>";
if (mail($to, $subject, $message, $header)) {
  echo ('Спасибо! Мы будем рады вас видеть!');
}
else {
  echo ('Ошибка! Попробуйте снова');
}
?>