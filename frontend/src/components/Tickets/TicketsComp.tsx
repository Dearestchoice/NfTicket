import TicketCard from "./TicketCard";

const TicketsComp = ({ ticketsData }: { ticketsData: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`mx-auto w-full grid gap-3 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14`}
      >
        {ticketsData.map((ticket) => (
          <TicketCard key={ticket} ticketId={ticket} checkOwner />
        ))}
      </div>
    </div>
  );
};

export default TicketsComp;
