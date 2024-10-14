import { useReadContract } from "wagmi";

import HeroSection from "@/components/Hero";
import { Spinner } from "@/components/Spinner";

import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";
import TicketCard from "@/components/Tickets/TicketCard";

interface ITicket {
  ticketId: string; // ID of the ticket
  ticketOwner: string; // Ethereum address of the ticket owner
  used: boolean; // Whether the ticket has been used
  exists: boolean; // Whether the ticket exists
  listedForSale: boolean; // Whether the ticket is listed for sale
  price: string; // Price of the ticket (in wei or other denomination)
  eventId: string; // ID of the event this ticket is associated with
}

const MarketplacePage = () => {
  const {
    data: ticketsData,
    isError: ticketsIsError,
    isPending: ticketsIsPending,
  } = useReadContract({
    address: contractAddress,
    abi: abi,
    chainId: BASE_SEPOLIA_CHAIN_ID,
    functionName: "getAllTickets",
  });

  const ticketsToDisplay = (ticketsData as ITicket[])?.filter(
    (ticket) => ticket.listedForSale
  );

  return (
    <div className="font-poppins ">
      <HeroSection title="Tickets" />
      {ticketsIsPending ? (
        <Spinner />
      ) : ticketsIsError ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          An error occurred. Please try again
        </h3>
      ) : !ticketsToDisplay || !ticketsToDisplay.length ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          There are currently no tickets available
        </h3>
      ) : ticketsToDisplay.length ? (
        <div
          className={`mx-auto w-full grid gap-3 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14`}
        >
          {ticketsToDisplay.map((ticket) => (
            <TicketCard key={ticket.ticketId} ticketId={ticket.ticketId} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MarketplacePage;
