// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {NFTicketing} from "../src/NFTicketing.sol";

contract TicketingScript is Script {
    NFTicketing public nfticketing;

    function setUp() public {}

    function run() public {
        // Load private key from env file
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);  // Start broadcasting

        // Deploy the contract
        nfticketing = new NFTicketing();

        console.log("NFTicketing Contract deployed at:", address(nfticketing));

        vm.stopBroadcast();  // Stop broadcasting
    }
}
