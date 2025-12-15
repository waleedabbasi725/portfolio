<?php
// Function to sanitize form inputs
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize form inputs
    $name = sanitize_input($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) ? $_POST["email"] : "";
    $subject = sanitize_input($_POST["subject"]);
    $message = sanitize_input($_POST["message"]);

    // Check if all required fields are filled
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Error: All fields are required.";
        exit;
    }

    // SPAM protection: Check if CAPTCHA is correct (replace 'YOUR_CAPTCHA_SECRET_KEY' with your actual CAPTCHA secret key)
    $captcha_secret_key = "YOUR_CAPTCHA_SECRET_KEY";
    $captcha_response = $_POST["g-recaptcha-response"];
    $captcha_url = "https://www.google.com/recaptcha/api/siteverify?secret={$captcha_secret_key}&response={$captcha_response}";
    $captcha_data = json_decode(file_get_contents($captcha_url));
    if (!$captcha_data->success) {
        echo "Error: CAPTCHA verification failed.";
        exit;
    }

    // Email configuration
    $to = "waleedabbasi725@gmail.com"; // Add your email address here
    $subject = "New Form Submission: " . $subject;
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message: " . $message;

    // Send email
    if (mail($to, $subject, $body)) {
        // Send confirmation email to the sender
        $confirmation_subject = "Thank you for contacting us";
        $confirmation_body = "Dear {$name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nYour Website Team";
        mail($email, $confirmation_subject, $confirmation_body);

        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong.";
    }
} else {
    // If accessed directly without form submission
    echo "Error: Access denied.";
}
?>
