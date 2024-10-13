// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTicketing is ERC721URIStorage {
    address public owner;
    uint256 public nextTicketId = 1; // Manually manage the next ticket ID
    uint256 public nextEventId = 1; // Manually manage the next event ID

    struct Event {
        uint256 eventId;
        address organizer; // The organizer who created the event
        string eventDescription; // Event description
        string imageURI; // Single image URI for all tickets of the event
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
        uint256 eventId; // Reference to the event the ticket belongs to
    }

    Event[] public events; // Array to store all events as structs
    mapping(uint256 => Ticket) public tickets; // Mapping from ticket ID to ticket details
    mapping(address => uint256[]) public userTickets; // Mapping to track all tickets owned by a user

    event EventCreated(
        uint256 eventId,
        address organizer,
        uint256 maxTickets,
        string eventDescription
    );
    event TicketMinted(uint256 ticketId, address owner, uint256 eventId);
    event TicketUsed(uint256 ticketId, address owner);
    event TicketListedForSale(uint256 ticketId, uint256 price);
    event TicketSold(uint256 ticketId, address newOwner, uint256 price);

    constructor() ERC721("NFTTicket", "TIX") {
        owner = msg.sender; // Assign the contract creator as the initial owner
    }

    // Function for organizers to create an event with a single image and description
    function createEvent(
        string memory eventDescription,
        string memory imageURI,
        uint256 maxTickets
    ) public {
        require(maxTickets > 0, "Maximum tickets must be greater than 0");

        uint256 eventId = nextEventId;
        nextEventId++; // Manually increment the event ID

        Event memory newEvent = Event({
            eventId: eventId,
            organizer: msg.sender, // Set the event organizer
            eventDescription: eventDescription,
            imageURI: imageURI, // Store a single image URI for the event
            maxTickets: maxTickets,
            mintedTickets: 0,
            exists: true
        });

        events.push(newEvent); // Add the event struct to the events array

        emit EventCreated(eventId, msg.sender, maxTickets, eventDescription);
    }

    // Function to retrieve all events
    function getAllEvents() public view returns (Event[] memory) {
        return events;
    }

    // Function to mint multiple tickets with the same image URI for the same event
    function mintMultipleTickets(uint256 eventId, uint256 numberOfTickets)
        public
    {
        require(
            eventId > 0 && eventId <= events.length,
            "Event does not exist"
        );
        Event storage eventDetails = events[eventId - 1]; // Fetch the event details from the array
        require(
            eventDetails.organizer == msg.sender,
            "Only the event organizer can mint tickets"
        );
        require(
            eventDetails.mintedTickets + numberOfTickets <=
                eventDetails.maxTickets,
            "Not enough tickets available"
        );

        // Use the event's image URI for all minted tickets
        string memory eventImageURI = eventDetails.imageURI;

        for (uint256 i = 0; i < numberOfTickets; i++) {
            uint256 newTicketId = nextTicketId;
            nextTicketId++; // Manually increment the ticket ID

            _mint(msg.sender, newTicketId);

            // Set the same token URI (event image URI) for all tickets of the event
            _setTokenURI(newTicketId, eventImageURI);

            tickets[newTicketId] = Ticket({
                ticketId: newTicketId,
                ticketOwner: msg.sender,
                used: false,
                exists: true,
                listedForSale: false,
                price: 0,
                eventId: eventId // Associate the ticket with the event
            });

            // Track tickets owned by the user
            userTickets[msg.sender].push(newTicketId);

            eventDetails.mintedTickets += 1;

            emit TicketMinted(newTicketId, msg.sender, eventId);
        }

        // Approve this contract to transfer tokens on behalf of the owner
        setApprovalForAll(address(this), true);
    }

    // Function to retrieve all tickets owned by a specific user
    function getUserTickets(address user)
        public
        view
        returns (uint256[] memory)
    {
        return userTickets[user];
    }

    // Function to retrieve all tickets
    function getAllTickets() public view returns (Ticket[] memory) {
        Ticket[] memory allTickets = new Ticket[](nextTicketId - 1);
        for (uint256 i = 1; i < nextTicketId; i++) {
            allTickets[i - 1] = tickets[i];
        }
        return allTickets;
    }

    // Function to list a ticket for sale
    function listTicketForSale(uint256 ticketId, uint256 price) public {
        require(
            ownerOf(ticketId) == msg.sender,
            "Only the owner can list this ticket for sale"
        );
        require(!tickets[ticketId].used, "Cannot sell a used ticket");
        require(
            !tickets[ticketId].listedForSale,
            "Ticket is already listed for sale"
        );

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

        // Update the user tickets list
        userTickets[previousOwner][ticketId] = userTickets[previousOwner][
            userTickets[previousOwner].length - 1
        ];
        userTickets[previousOwner].pop();
        userTickets[msg.sender].push(ticketId);

        emit TicketSold(ticketId, msg.sender, msg.value);
    }

    // Function to mark a ticket as used
    function useTicket(uint256 ticketId) public {
        require(
            ownerOf(ticketId) == msg.sender,
            "Only the owner can use this ticket"
        );
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

    // Function to get the event's image URI for a specific ticket
    function getTicketEventImageURI(uint256 ticketId)
        public
        view
        returns (string memory)
    {
        require(tickets[ticketId].exists, "Ticket does not exist");
        uint256 eventId = tickets[ticketId].eventId;
        return events[eventId].imageURI;
    }

    // *Function to get detailed information about a specific ticket*
    function getTicketDetails(uint256 ticketId)
        public
        view
        returns (
            uint256 ticketID,
            address ticketOwner,
            bool used,
            bool listedForSale,
            uint256 price,
            uint256 eventID,
            string memory eventDescription,
            string memory eventImageURI
        )
    {
        require(tickets[ticketId].exists, "Ticket does not exist");

        Ticket memory ticket = tickets[ticketId];
        Event memory ticketEvent = events[ticket.eventId];

        return (
            ticket.ticketId,
            ticket.ticketOwner,
            ticket.used,
            ticket.listedForSale,
            ticket.price,
            ticket.eventId,
            ticketEvent.eventDescription,
            ticketEvent.imageURI
        );
    }
}
