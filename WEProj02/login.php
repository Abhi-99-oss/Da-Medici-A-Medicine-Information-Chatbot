<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["name"] ?? "";
    $password = $_POST["password"] ?? "";

    // Read the CSV file
    $file = fopen("data99.csv", "r");

    // Check if file opened successfully
    if ($file) {
        // Read the header line
        $headers = fgetcsv($file);

        // Check if required headers exist
        if ($headers !== false && in_array("Name", $headers) && in_array("Password", $headers)) {
            $nameIndex = array_search("Name", $headers);
            $passwordIndex = array_search("Password", $headers);

            // Loop through each line in the file
            while (($line = fgetcsv($file)) !== false) {
                $storedUsername = $line[$nameIndex];
                $storedPassword = $line[$passwordIndex];

                // Check if the submitted username and password match the stored ones
                if ($username === $storedUsername && $password === $storedPassword) {
                    // Redirect to Bot.html if credentials are correct
                    fclose($file); // Close the file
                    header("Location: Home.html");
                    exit();
                }
            }

            // If no match is found, redirect to trying_action.html
            fclose($file); // Close the file
            header("Location: Trying_Again.html");
            exit();
        } else {
            fclose($file); // Close the file
            echo "Required fields not found in CSV.";
        }
    } else {
        echo "Error: Unable to open file for reading.";
    }
}
?>