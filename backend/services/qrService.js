const fs = require('fs');
const QRCode = require('qrcode');
const path = require('path');
const { hashMetadata } = require('../utils/hashUtils');



const generateQRCode = async (ticketId, eventId, imageURI) => {

    const qrContent = `Ticket ID: ${ticketId}, Event ID: ${eventId}, Image URI: ${imageURI}`;
    const qrDir = path.join(__dirname, '../qr_codes');
    const qrImagePath = path.join(qrDir, `ticket_${ticketId}.png`);


    if (!fs.existsSync(qrDir)) {
        fs.mkdirSync(qrDir);
    }
    // Generate the QR code image file
    await QRCode.toFile(qrImagePath, qrContent);

    // Hash the metadata for storage on the blockchain
    const qrHash = hashMetadata(qrContent);

    // Return the hash and original metadata
    return {
        ticketId,
        eventId,
        qrHash,     // Hash for blockchain storage
        qrContent   // Original metadata for off-chain verification
    };
};


const verifyQRCode = (scannedData, storedHash) => {
    // Generate a hash from the scanned QR code data
    const scannedHash = crypto.createHash('sha256').update(scannedData).digest('hex');

    // Compare the scanned hash with the one stored on the blockchain
    return scannedHash === storedHash;
};

module.exports = {
    generateQRCode,
    verifyQRCode
};