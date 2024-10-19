// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {NFTicketing} from "../src/NFTicketing.sol";

contract NfTicketTest is Test {
    NFTicketing public nfticketing;
    address public organizer = address(1); // Organizer address
    address public buyer = address(2); // Buyer address

    function setUp() public {
        nfticketing = new NFTicketing();

        // Assign some initial ether balances to the accounts
        vm.deal(organizer, 10 ether);
        vm.deal(buyer, 10 ether);
    }

    function testCreateEvent() public {
        // Set organizer address
        vm.startPrank(organizer);

        string memory eventDescription = "Blockchain Summit";
        string memory imageURI = "ipfs://eventImageURI";
        uint256 maxTickets = 100;

        // Create an event
        nfticketing.createEvent(eventDescription, imageURI, maxTickets);

        // Get event details
        NFTicketing.Event[] memory allEvents = nfticketing.getAllEvents();
        assertEq(allEvents.length, 1);
        assertEq(allEvents[0].eventDescription, eventDescription);
        assertEq(allEvents[0].imageURI, imageURI);
        assertEq(allEvents[0].maxTickets, maxTickets);
        assertEq(allEvents[0].mintedTickets, 0);

        vm.stopPrank();
    }

    function testMintMultipleTickets() public {
        vm.startPrank(organizer);

        // Create an event
        string memory eventDescription = "Art Festival";
        string memory imageURI = "ipfs://artEventImage";
        uint256 maxTickets = 50;
        nfticketing.createEvent(eventDescription, imageURI, maxTickets);

        // Mint multiple tickets
        uint256 eventId = 1;
        nfticketing.mintMultipleTickets(eventId, 5);

        // Check tickets
        uint256[] memory organizerTickets = nfticketing.getUserTickets(organizer);
        assertEq(organizerTickets.length, 5);

        NFTicketing.Ticket[] memory allTickets = nfticketing.getAllTickets();
        assertEq(allTickets.length, 5);

        vm.stopPrank();
    }

    function testListTicketForSale() public {
        vm.startPrank(organizer);

        // Create an event and mint a ticket
        string memory eventDescription = "Music Concert";
        string memory imageURI = "ipfs://concertEventImage";
        uint256 maxTickets = 20;
        nfticketing.createEvent(eventDescription, imageURI, maxTickets);

        uint256 eventId = 1;
        nfticketing.mintMultipleTickets(eventId, 2);

        // List the first ticket for sale
        uint256 ticketId = 1;
        uint256 price = 1 ether;
        nfticketing.listTicketForSale(ticketId, price);

        // Check ticket listing details
        NFTicketing.Ticket memory ticketDetails = nfticketing.tickets(ticketId);
        assertEq(ticketDetails.listedForSale, true);
        assertEq(ticketDetails.price, price);

        vm.stopPrank();
    }

    function testBuyTicket() public {
        vm.startPrank(organizer);

        // Create an event and mint a ticket
        string memory eventDescription = "Tech Conference";
        string memory imageURI = "ipfs://techEventImage";
        uint256 maxTickets = 30;
        nfticketing.createEvent(eventDescription, imageURI, maxTickets);

        uint256 eventId = 1;
        nfticketing.mintMultipleTickets(eventId, 1);

        // List the ticket for sale
        uint256 ticketId = 1;
        uint256 price = 0.5 ether;
        nfticketing.listTicketForSale(ticketId, price);

        vm.stopPrank();

        // Buyer buys the ticket
        vm.startPrank(buyer);
        nfticketing.buyTicket{value: price}(ticketId);

        // Check new ownership
        NFTicketing.Ticket memory ticketDetails = nfticketing.tickets(ticketId);
        assertEq(ticketDetails.ticketOwner, buyer);
        assertEq(ticketDetails.listedForSale, false);

        vm.stopPrank();
    }

    function testMarkTicketAsUsed() public {
        vm.startPrank(organizer);

        // Create an event and mint a ticket
        string memory eventDescription = "Exclusive Gala";
        string memory imageURI = "ipfs://galaEventImage";
        uint256 maxTickets = 50;
        nfticketing.createEvent(eventDescription, imageURI, maxTickets);

        uint256 eventId = 1;
        nfticketing.mintMultipleTickets(eventId, 1);

        // Use the ticket
        uint256 ticketId = 1;
        nfticketing.useTicket(ticketId);

        // Check if the ticket is marked as used
        bool isUsed = nfticketing.isTicketUsed(ticketId);
        assertEq(isUsed, true);

        vm.stopPrank();
    }

    function testCannotSellUsedTicket() public {
        vm.startPrank(organizer);

        // Create an event and mint a ticket
        string memory eventDescription = "Festival";
        string memory imageURI = "ipfs://festivalEventImage";
        uint256 maxTickets = 10;
        nfticketing.createEvent(eventDescription, imageURI, maxTickets);

        uint256 eventId = 1;
        nfticketing.mintMultipleTickets(eventId, 1);

        // Use the ticket
        uint256 ticketId = 1;
        nfticketing.useTicket(ticketId);

        vm.expectRevert("Cannot sell a used ticket");
        nfticketing.listTicketForSale(ticketId, 1 ether);

        vm.stopPrank();
    }
}


// contract NfTicketTest is Test {
//     NFTicketing public nfticketing;

//     function setUp() public {
//         nfticketing = new NFTicketing();        
//     }

  
// }
