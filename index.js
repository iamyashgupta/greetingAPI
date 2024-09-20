const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

// POST route to handle incoming JSON data
app.post('/postData', (req, res) => {
    const { greeting, name } = req.body;

    // Check if 'greeting' is missing or empty
    if (!greeting || greeting.trim() === '') {
        return res.status(400).json({ message: "Missing or empty 'greeting' in request body" });
    }

    // Respond with a welcome message including the 'name'
    res.status(200).json({ message: `Welcome, ${name}!` });
});

// GET route to send a welcome message
app.get('/getData', (req, res) => {
    const name = `Admin`; // Hardcoded 'name' for demonstration
    res.status(200).json({ message: `Welcome, ${name}!` });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
