NFT Ticketing Backend
This repository contains the backend system for an NFT-based ticketing platform. The backend is responsible for generating QR codes and hashing metadata related to each ticket. The hashed data is then stored on the blockchain, while the original QR code metadata is used for off-chain verification.

Overview
This backend system serves two primary purposes:

QR Code Generation: Generates a QR code for each NFT ticket based on the ticket's ID, event ID, and image URI.
Metadata Hashing: Hashes the QR code metadata for secure storage on the blockchain.
The frontend communicates with the backend to generate QR codes and retrieve metadata that will be hashed and stored in the smart contract on the blockchain.