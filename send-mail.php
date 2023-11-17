<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate the data (perform necessary checks)

    // Prepare email content
    $to = 'konstantin@remicel.com';  // Recipient's email address
    $subject = 'New Message from Contact Form';  // Subject of the email
    $body = "Name: $fname $lname\nEmail: $email\n\n$message";  // Message content

    // Additional headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send the email
    $mailSent = mail($to, $subject, $body, $headers);

    if ($mailSent) {
        include "email-messages/email-success.php";
    } else {
        include "email-messages/email-fail.php";
    }
}
?>