export interface IEvent {
  eventId: string; // ID of the event
  organizer: string; // Ethereum address of the event organizer
  eventDescription: string; // Description of the event
  imageURI: string; // URL of the image related to the event
  maxTickets: string; // Maximum number of tickets that can be minted
  mintedTickets: string; // Number of tickets that have been minted so far
  exists: boolean; // Boolean flag indicating if the event exists
}
