<?php

// File path to the CSV file containing medicine names
$medicineCsvFile = 'medicine_box.csv';

// Check if the file exists
if (!file_exists($medicineCsvFile)) {
    die("Medicine box file not found.");
}

// Open the medicine box CSV file for reading
$medicineHandle = fopen($medicineCsvFile, 'r');

// Check if the file opened successfully
if (!$medicineHandle) {
    die("Could not open the medicine box file.");
}

// Initialize an empty array to store medicine names
$medicineNames = [];

// Read each line of the medicine box CSV file
while (($row = fgetcsv($medicineHandle, 1000, ',')) !== false) {
    // Add each medicine name to the array
    $medicineNames[] = $row[0]; // Assuming the medicine name is in the first column
}

// Close the file handle
fclose($medicineHandle);

// Now, $medicineNames contains all the medicine names from the CSV file

// Example message
$message = "I have a headache. Can I take aspirin?";

// Check if the message contains any medicine names
foreach ($medicineNames as $medicine) {
    if (stripos($message, $medicine) !== false) {
        echo "Information for " . $medicine . ":\n";
        // Here you can display relevant information about the medicine
        // For example:
        echo "Aspirin is commonly used to relieve minor aches and pains, such as headaches.\n";
        break; // Stop checking further once a match is found
    }
}
?>