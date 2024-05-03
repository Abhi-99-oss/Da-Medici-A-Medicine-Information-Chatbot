// server.js
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai-api');

const app = express();
const port = 3000;

// Initialize OpenAI with your API key
const openai = new OpenAI('YOUR_OPENAI_API_KEY');

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Endpoint for handling chat requests
app.post('/api/chat', async (req, res) => {
    const userInput = req.body.message;
    
    try {
        // Send user input to OpenAI for processing
        const response = await openai.complete({
            engine: 'text-davinci-003',
            prompt: userInput,
            max_tokens: 150
        });

        // Send response from OpenAI back to client
        res.json({ message: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error interacting with OpenAI:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});