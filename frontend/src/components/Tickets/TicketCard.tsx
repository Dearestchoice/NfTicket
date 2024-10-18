import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { ethers } from "ethers";
import QRCode from "qrcode";

import { Spinner } from "@/components/Spinner";
import ListButton from "./ListButton";

import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";
import { ITicketData } from "@/types";

const TicketCard = ({
  ticketId,
  checkOwner,
}: {
  ticketId: string;
  checkOwner: boolean;
}) => {
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
        <TicketCardDisplay
          ticketData={ticketData as ITicketData}
          checkOwner={checkOwner}
        />
      ) : null}
    </div>
  );
};

const TicketCardDisplay = ({
  ticketData,
  checkOwner,
}: {
  ticketData: ITicketData;
  checkOwner: boolean;
}) => {
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
  const { address } = useAccount();
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(
      `${import.meta.env.VITE_QR_URL}/tickets/${ticketDetails.ticketId}`,
      function (_: any, url: any) {
        setImgUrl(url);
      }
    );
  }, []);

  if (checkOwner && ticketDetails.ticketOwner !== address) return null;

  const amountInEther = ticketDetails.price
    ? ethers.utils.formatUnits(ticketDetails.price, 18)
    : 0;

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
        ) : ticketDetails.listedForSale ? (
          <button className="rounded-2xl border border-[#93ef2ac3] py-2 px-4 text-xs">
            On Sale
          </button>
        ) : (
          <button className="rounded-2xl border border-[#28A745] py-2 px-4 text-xs">
            Active
          </button>
        )}
      </div>
      {ticketDetails.listedForSale ? (
        <div>
          <img src={imgUrl} alt="" className="h-40 object-cover rounded overflow-hidden" />
        </div>
      ) : null}
      <div className="flex gap-2">
        <p>Price:</p>
        <p className="font-semibold">{amountInEther} ETH</p>
      </div>
      {ticketDetails.used ? (
        <p className="text-lg font-semibold text-[#DC3545]">
          Ticket has been used
        </p>
      ) : ticketDetails.listedForSale ? (
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
