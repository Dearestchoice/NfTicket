import { useReadContract } from "wagmi";

import { Spinner } from "@/components/Spinner";
import ListButton from "./ListButton";

import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";
// import { CodeIcon } from "./Icons";

interface ITicketData {
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

const TicketCard = ({ ticketId }: { ticketId: string }) => {
  const {
    data: ticketData,
    isError: ticketIsError,
    isPending: ticketIsPending,
  } = useReadContract({
    address: contractAddress,
    abi: abi,
    chainId: BASE_SEPOLIA_CHAIN_ID,
    functionName: "getTicketDetails",
    args: [ticketId],
  });

  return (
    <div className="p-2 rounded-md flex flex-col gap-2 border border-white/10">
      {ticketIsPending ? (
        <Spinner />
      ) : ticketIsError ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          An error occurred. Please try again
        </h3>
      ) : ticketData ? (
        <TicketCardDisplay ticketData={ticketData as ITicketData} />
      ) : null}
    </div>
  );
};

const TicketCardDisplay = ({ ticketData }: { ticketData: ITicketData }) => {
  const ticketDetails = {
    ticketId: ticketData[0],
    ticketOwner: ticketData[1],
    used: ticketData[2],
    listedForSale: ticketData[3],
    price: ticketData[4],
    eventId: ticketData[5],
    eventDescription: ticketData[6],
    eventImageURI: ticketData[7],
  };

  return (
    <>
      <div className="flex items-center justify-center overflow-hidden rounded">
        <img
          src={ticketDetails.eventImageURI}
          alt=""
          className="h-52 w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between font-semibold">
        <h4 className="md:text-lg">{ticketDetails.eventDescription}</h4>
        {ticketDetails.used ? (
          <button className="rounded-2xl border border-[#DC3545] py-2 px-4 text-xs text-[#DC3545]">
            Used
          </button>
        ) : (
          <button className="rounded-2xl border border-[#28A745] py-2 px-4 text-xs">
            Active
          </button>
        )}
      </div>
      {/* <p className="text-xs md:text-sm font-medium">July 10, 2024</p>
    <p className="text-xs md:text-sm font-medium">Berlin, Germany</p>
    <div className="flex items-center justify-center py-4 border-b border-dashed ">
      <CodeIcon />
    </div> */}
      <div className="flex gap-2">
        <p>Price:</p>
        <p className="font-semibold">{Number(ticketDetails.price)}</p>
      </div>
      {ticketDetails.listedForSale ? (
        <p className="text-lg font-semibold">On Sale</p>
      ) : (
        <ListButton
          ticketId={ticketDetails.ticketId}
          ticketOwner={ticketDetails.ticketOwner}
          eventDescription={ticketDetails.eventDescription}
          imageURI={ticketDetails.eventImageURI}
        />
      )}
    </>
  );
};

export default TicketCard;
