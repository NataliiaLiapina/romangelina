<?php	
	// строка, которую будем записывать
$text1 = $_POST['name'];
$text2 = $_POST['age'];
 
// открываем файл, если файл не существует,
//делается попытка создать его
$fp = fopen("poz/".date("m.d.y").date("H:i:s").".txt", "w");
 
// записываем в файл текст
fwrite($fp, $text1. PHP_EOL);
fwrite($fp, $text2. PHP_EOL);

 
// закрываем
?>