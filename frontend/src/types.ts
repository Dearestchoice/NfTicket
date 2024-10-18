export interface IEvent {
  eventId: string; // ID of the event
  organizer: string; // Ethereum address of the event organizer
  eventDescription: string; // Description of the event
  imageURI: string; // URL of the image related to the event
  maxTickets: string; // Maximum number of tickets that can be minted
  mintedTickets: string; // Number of tickets that have been minted so far
  exists: boolean; // Boolean flag indicating if the event exists
}

export interface ITicketData {
  [index: number]: string | number | boolean;
  0: string; // ID (assuming string)
  1: string; // Address (assuming string)
  2: boolean;
  3: boolean;
  4: string; // Possibly a count (assuming string)
  5: string; // Possibly a version (assuming string)
  6: string; // Name
  7: string; // Image URL
}