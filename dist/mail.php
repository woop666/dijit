 <?php
if ($_POST) {

$name = htmlspecialchars($_POST['pole1']); 
 
$email = htmlspecialchars($_POST['pole2']); 

$app = array();

$app[] = $_POST['app_design'];
$app[] = $_POST['graphic_design'];
$app[] = $_POST['motion_design'];
$app[] = $_POST['ux_design'];
$app[] = $_POST['webdesign'];
$app[] = $_POST['marketing'];

for($i = count($app);$i > 0; $i--){
	if($app[$i] == ''){
		unset($app[$i]);
	}
}

$array_app = implode(", ", $app);

$to .= "kola666@ukr.net";

$subject = "Oder by ". $name ."";

$message = 'От: '. $name .'  Email: '. $email .'. Список заказываемых услуг '. $array_app . '.';

mail($to, $subject, $message, $headers);

}
