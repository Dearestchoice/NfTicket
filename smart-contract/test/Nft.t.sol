// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {NFTicketing} from "../src/NFTicketing.sol";

contract NfTicketTest is Test {
    NFTicketing public nfticketing;

    function setUp() public {
        nfticketing = new NFTicketing();        
    }

  
}
