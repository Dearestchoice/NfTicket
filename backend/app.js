const express = require('express');
const bodyParser = require('body-parser');
const qrRoutes = require('./routes/qrRoutes');

const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Use the qrRoutes for handling QR code-related endpoints
app.use('/api/qr-code', qrRoutes);

// Basic health check route
app.get('/', (req, res) => {
    res.send('NFT Ticketing Backend is running!');
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});