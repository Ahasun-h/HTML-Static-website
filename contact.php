<?php 
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];
  $formcontent="Contacts Email of TechnoOutSourceBD\n  From: $name \n Subject: $subject \n Message: $message";
  $recipient = "habibahasun019@gmail.com";
  $mailheader = "From: $email \r\n";

  if(empty($name) || empty($email) || empty($subject) || empty($message)){
    header('location:error_dialog.php?error');

  }else{
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    header('location:Success_Dialog.php?error');  
  }

?>
   