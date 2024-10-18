// import { Link } from "react-router-dom";

import { IEvent } from "@/types";
import { formatCreatorAddress } from "@/lib/utils";

const EventCard = ({
  eventDescription,
  // eventId,
  imageURI,
  // maxTickets,
  mintedTickets,
  organizer,
}: IEvent) => {
  return (
    <div
      // to={`/events/${eventId}`}
      className="p-2 rounded-md flex flex-col gap-2 border border-white/10"
    >
      <div className="flex items-center justify-center overflow-hidden rounded">
        <img src={imageURI} alt="" className="h-96 w-full object-cover" />
      </div>
      <div className="flex items-center justify-between font-semibold">
        <h4 className="md:text-lg">{eventDescription}</h4>
        {/* <p className="text-nftGreen text-sm md:text-base">50 ETH</p> */}
      </div>
      <div className="flex gap-2">
        <p>Creator:</p>
        <p className="font-semibold">{formatCreatorAddress(organizer)}</p>
      </div>
      <div className="flex gap-2">
        <p>Tickets Available:</p>
        <p className="font-semibold">
          {Number(mintedTickets)}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
