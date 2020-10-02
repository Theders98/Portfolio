

<?php

$subject = $_POST['subject'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$to = 'djribellesclase@gmail.com';
$headers = 'From:' . $email;
$msg = $_POST['msg'] . "\nFrom: " . $email;
$headers = 'From: My contact form';
mb_language("uni");
mb_internal_encoding("UTF-8");
mb_send_mail($to,$subject,$msg,$headers);

// $respondMsg = 'message body.';
// $respondSubject = 'message subject';
// $respondHeaders = 'From: noreply@mail.com';
//          mb_send_mail($email,$respondSubject,$respondMsg,$respondHeaders);
// $to = "djribellesclase@gmail.com";
// $subject = "subject";
// $message = "<h1>xd</h1>";

// $headers = "From: The sender Name <djribelles@gmail.com>\r\n";
// $headers .= "Reply-To: djribellesclase@gmail.com\r\n";
// $headers .= "X-Mailer: PHP/". phpversion();


// $mail = @mail($to,$subject,$message,$headers);

?>