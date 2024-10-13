import { useState } from "react";

import TicketCard from "./TicketCard";
import Paginator from "./Paginator";

const TicketsComp = ({ ticketsData }: { ticketsData: string[] }) => {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`mx-auto w-full grid gap-3 items-start grid-cols-4 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14`}
      >
        {ticketsData.map((ticket) => (
          <TicketCard key={ticket} ticketId={ticket} />
        ))}
      </div>
      <div className="flex justify-end">
        <Paginator
          currentPage={page}
          totalPages={ticketsData.length}
          onPageChange={(pageNumber) => setPage(pageNumber)}
          showPreviousNext
        />
      </div>
    </div>
  );
};

export default TicketsComp;
