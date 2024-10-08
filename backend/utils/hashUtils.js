const crypto = require('crypto');

// Function to hash the QR code metadata
const hashMetadata = (metadata) => {
    const hash = crypto.createHash('sha256');
    hash.update(metadata);
    return hash.digest('hex');
};

module.exports = {
    hashMetadata
};
