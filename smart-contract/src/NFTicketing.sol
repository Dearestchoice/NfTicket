// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTicketing is ERC721URIStorage {
    uint256 private _ticketIds;  // Manually incrementing ticket ID
    address owner;

    struct Event {
        uint256 eventId;
        string[] imageURIs;  // List of image URIs provided by the organizer
        uint256 maxTickets;
        uint256 mintedTickets;
        bool exists;
    }

    struct Ticket {
        uint256 ticketId;
        address ticketOwner;
        bool used;
        bool exists;
        bool listedForSale;
        uint256 price;
    }

    mapping(uint256 => Event) public events;  // Mapping from event ID to event details
    mapping(uint256 => Ticket) public tickets;  // Mapping from ticket ID to ticket details

    event EventCreated(uint256 eventId, address organizer, uint256 maxTickets);
    event TicketMinted(uint256 ticketId, address owner, uint256 eventId);
    event TicketUsed(uint256 ticketId, address owner);
    event TicketListedForSale(uint256 ticketId, uint256 price);
    event TicketSold(uint256 ticketId, address newOwner, uint256 price);

    constructor() ERC721("NFTTicket", "TIX") {
        owner = msg.sender;
        _ticketIds = 0;  // Initialize ticket ID to 0
    }

    // Modifier to restrict access to only the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    // Function for organizers to create an event with images
    function createEvent(uint256 eventId, string[] memory imageURIs, uint256 maxTickets) public onlyOwner {
        require(!events[eventId].exists, "Event already exists");

        events[eventId] = Event({
            eventId: eventId,
            imageURIs: imageURIs,
            maxTickets: maxTickets,
            mintedTickets: 0,
            exists: true
        });

        emit EventCreated(eventId, msg.sender, maxTickets);
    }

    // Function to mint a ticket with a specified image URI or generated image
    function mintTicket(uint256 eventId, address to, string memory tokenURI) public {
        require(events[eventId].exists, "Event does not exist");
        require(events[eventId].mintedTickets < events[eventId].maxTickets, "No more tickets available");

        _ticketIds++;  // Manually increment the ticket ID
        uint256 newTicketId = _ticketIds;
        _mint(to, newTicketId);

        // Assign the provided or generated image URI to the ticket
        _setTokenURI(newTicketId, tokenURI);

        tickets[newTicketId] = Ticket({
            ticketId: newTicketId,
            ticketOwner: to,
            used: false,
            exists: true,
            listedForSale: false,
            price: 0
        });
        
        setApprovalForAll(address(this), true);

        events[eventId].mintedTickets += 1;

        emit TicketMinted(newTicketId, to, eventId);
    }

    // Function to list a ticket for sale
    function listTicketForSale(uint256 ticketId, uint256 price) public {
        require(ownerOf(ticketId) == msg.sender, "Only the owner can list this ticket for sale");
        require(!tickets[ticketId].used, "Cannot sell a used ticket");
        require(price > 0, "Price must be greater than 0");

        tickets[ticketId].listedForSale = true;
        tickets[ticketId].price = price;

        emit TicketListedForSale(ticketId, price);
    }

    // Function to buy a ticket from the marketplace
    function buyTicket(uint256 ticketId) public payable {
        require(tickets[ticketId].listedForSale, "This ticket is not for sale");
        require(msg.value == tickets[ticketId].price, "Incorrect price sent");
        require(!tickets[ticketId].used, "Cannot buy a used ticket");

        address previousOwner = ownerOf(ticketId);

        // Transfer the funds to the previous owner
        payable(previousOwner).transfer(msg.value);

        // Transfer the ticket to the buyer
        _transfer(previousOwner, msg.sender, ticketId);

        // Update ticket details
        tickets[ticketId].ticketOwner = msg.sender;
        tickets[ticketId].listedForSale = false;
        tickets[ticketId].price = 0;

        emit TicketSold(ticketId, msg.sender, msg.value);
    }

    // Function to mark a ticket as used
    function useTicket(uint256 ticketId) public {
        require(ownerOf(ticketId) == msg.sender, "Only the owner can use this ticket");
        require(!tickets[ticketId].used, "Ticket has already been used");
        require(tickets[ticketId].exists, "Ticket does not exist");

        tickets[ticketId].used = true;

        emit TicketUsed(ticketId, msg.sender);
    }

    // Function to check if a ticket has been used
    function isTicketUsed(uint256 ticketId) public view returns (bool) {
        require(tickets[ticketId].exists, "Ticket does not exist");
        return tickets[ticketId].used;
    }

    // Function to check if a ticket exists
    function ticketExists(uint256 ticketId) public view returns (bool) {
        return tickets[ticketId].exists;
    }
}
