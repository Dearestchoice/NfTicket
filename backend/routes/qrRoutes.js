const express = require('express');
const { getQRCodeMetadata, verifyTicket } = require('../controller/qrController');

const router = express.Router();

// POST request to generate a QR code and return the hash/metadata
router.post('/generate', getQRCodeMetadata);

// POST request to verify a ticket
router.post('/verify', verifyTicket);

module.exports = router;