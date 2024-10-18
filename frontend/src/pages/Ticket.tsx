import { CircleUser } from "lucide-react";
import { useParams } from "react-router-dom";
import { useReadContract } from "wagmi";

import HeroSection from "@/components/Hero";
import { Spinner } from "@/components/Spinner";

import { ITicketData } from "@/types";
import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";
import { useAccount } from "wagmi";
import UseTicketButton from "@/components/Ticket/UseTicketButton";

const TicketPage = () => {
  const { id } = useParams();
  const {
    data: ticketData,
    isError: ticketIsError,
    isPending: ticketIsPending,
  } = useReadContract({
    address: contractAddress,
    abi: abi,
    chainId: BASE_SEPOLIA_CHAIN_ID,
    functionName: "getTicketDetails",
    args: [id],
  });

  return (
    <div className="font-poppins ">
      <HeroSection title="Ticket" />
      {ticketIsPending ? (
        <Spinner />
      ) : ticketIsError ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          An error occurred. Please try again
        </h3>
      ) : !ticketData ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          Ticket does not exist
        </h3>
      ) : ticketData ? (
        <TicketCardDisplay ticketData={ticketData as ITicketData} />
      ) : null}
    </div>
  );
};

const TicketCardDisplay = ({ ticketData }: { ticketData: ITicketData }) => {
  const { address } = useAccount();

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
    <div className="flex flex-col gap-4 lg:gap-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
      <div className="rounded-md overflow-hidden flex justify-center items-center max-h-[450px]">
        <img
          src={ticketDetails.eventImageURI}
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="font-poppins flex gap-4 flex-col justify-between lg:w-1/2">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {ticketDetails.eventDescription}
          </h2>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2 items-center">
            <CircleUser />
            <p>{ticketDetails.ticketOwner}</p>
          </div>
        </div>
        {ticketDetails.used ? (
          <p>Ticket has been used</p>
        ) : ticketDetails.listedForSale ? (
          <p>This ticket is currently listed for sale</p>
        ) : address === ticketDetails.ticketOwner ? (
          <UseTicketButton
            ticketId={ticketDetails.ticketId}
            ticketOwner={ticketDetails.ticketOwner}
            eventDescription={ticketDetails.eventDescription}
            imageURI={ticketDetails.eventImageURI}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TicketPage;
