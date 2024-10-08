const { generateQRCode, verifyQRCode } = require('../services/qrService');

const getQRCodeMetadata = async (req, res) => {
    const { ticketId, eventId, imageURI } = req.body;

    if (!ticketId || !eventId || !imageURI) {
        return res.status(400).json({ error: 'ticketId, eventId, and imageURI are required' });
    }

    try {
        const metadata = await generateQRCode(ticketId, eventId, imageURI);
        return res.status(200).json(metadata);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to generate QR code' });
    }
};

const verifyTicket = async (req, res) => {
    const { scannedData, storedHash } = req.body;

    if (!scannedData || !storedHash) {
        return res.status(400).json({ error: 'scannedData and storedHash are required' });
    }

    try {
        const isValid = verifyQRCode(scannedData, storedHash);

        if (isValid) {
            return res.status(200).json({ valid: true, message: 'Ticket is valid' });
        } else {
            return res.status(400).json({ valid: false, message: 'Ticket verification failed' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Failed to verify ticket' });
    }
};

module.exports = {
    getQRCodeMetadata,
    verifyTicket
};