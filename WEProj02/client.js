// client.js
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from server
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
});