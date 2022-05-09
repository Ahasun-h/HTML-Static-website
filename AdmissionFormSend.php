<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";















  $StudentName = $_POST['StudentName'];
  $FatherName = $_POST['FatherName'];
  $MotherName = $_POST['MotherName'];
  $PresentAddress = $_POST['PresentAddress'];

  $PermanentAddress = $_POST['PermanentAddress'];
  $BirthDate = $_POST['BirthDate'];
  $Nationality = $_POST['Nationality'];
  $NationalID = $_POST['NationalID'];
  $Occupation = $_POST['Occupation'];
  $BloodGroup = $_POST['BloodGroup'];
  $Gender = $_POST['Gender'];
  $Email = $_POST['Email'];
  $Phone = $_POST['Phone'];
  $GuardiansPhone = $_POST['GuardiansPhone'];
  $RelationshipGuardian = $_POST['RelationshipGuardian'];
  $SSCInstituteName = $_POST['SSCInstituteName'];

  $SSCBord = $_POST['SSCBord'];
  $SSCPassingYear = $_POST['SSCPassingYear'];
  $SSCGPA = $_POST['SSCGPA'];
  $SSCInstituteName = $_POST['SSCInstituteName'];

  $HSCName = $_POST['HSCName'];
  $HSCBord = $_POST['HSCBord'];
  $HSCPassingYear = $_POST['HSCPassingYear'];
  $HSCGPA = $_POST['HSCGPA'];

  $GraduationInstuteName = $_POST['GraduationInstuteName'];
  $GraduationBord = $_POST['GraduationBord'];
  $GraduationPassingYear = $_POST['GraduationPassingYear'];
  $GraduationCGPA = $_POST['GraduationCGPA'];

  $PostGraduationInstuteName = $_POST['PostGraduationInstuteName'];
  $PostGraduationBord = $_POST['PostGraduationBord'];
  $PostGraduationPassingYear = $_POST['PostGraduationPassingYear'];
  $PostGraduationCGPA = $_POST['PostGraduationCGPA'];


  $ReferenceName = $_POST['ReferenceName'];
  $ReferenceNumber = $_POST['ReferenceNumber'];

  $ReferenceBatch = $_POST['ReferenceBatch'];
  $ReferenceId = $_POST['ReferenceId'];
  $ReferenceRelationWithStudent = $_POST['ReferenceRelationWithStudent'];


  $formcontent="From: $name \n Subject: $subject \n Message: $message  ";
  $recipient = "habibahasun019@gmail.com";
  $mailheader = "From: $email \r\n";

  if(empty($name) || empty($email) || empty($subject) || empty($message)){
    header('location:error_dialog.php?error');

  }else{
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    header('location:Success_Dialog.php?error');  
  }

?>