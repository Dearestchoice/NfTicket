## NFT Ticketing Platform
## Introduction
This repository contains the code for an NFT Ticketing Platform built on the Base blockchain technology, where each event ticket is represented as a non-fungible token (NFT). This platform provides event organizers with the ability to issue, sell, and verify tickets, while attendees can securely store and transfer their tickets on the blockchain.

## Key Features
NFT Tickets: Each event ticket is a unique NFT, ensuring secure and immutable ownership.

Immutable Ownership: Ownership is recorded on the blockchain and can only be transferred by the ticket holder.

Secondary Market Support: Attendees can resell their NFT tickets on supported secondary markets.

QR Code Verification: Easily verify the validity of tickets using QR codes and blockchain confirmation at event entrances.

Front-end Integration: A user-friendly interface allowing users to mint, view, and manage their tickets.

## Prerequisites
Before setting up the project, make sure you have the following installed:

Node.js: Download and install
Hardhat: Ethereum development environment
Metamask: Ethereum wallet for managing accounts and interacting with the dApp
React: Front-end framework for the user interface
Additionally, you will need a Base testnet or mainnet account to deploy the contracts.

## Setup and Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/your-repo/nft-ticketing-platform.git
cd nft-ticketing-platform
2. Install Dependencies
Install the required dependencies for both the smart contracts and the front-end.

## Smart Contract Overview
The smart contract is an ERC-721 token following the OpenZeppelin standard, with the following functionalities:

Mint NFT Tickets: Event organizers can mint unique NFT tickets for attendees.
Transfer Tickets: Ticket holders can transfer or sell their tickets to others.
QR Code Generation: Tickets come with metadata that includes a QR code for event verification.
Event Verification: The contract supports verifying ticket ownership and usage.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
