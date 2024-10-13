import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";

import HeroSection from "@/components/Hero";
import { Spinner } from "@/components/Spinner";
import TicketsComp from "@/components/Tickets/TicketsComp";

import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";

const TicketsPage = () => {
  const { address } = useAccount();

  const {
    data: ticketsData,
    isError: ticketsIsError,
    isPending: ticketsIsPending,
  } = useReadContract({
    address: contractAddress,
    abi: abi,
    chainId: BASE_SEPOLIA_CHAIN_ID,
    functionName: "getUserTickets",
    args: [address],
  });

  return (
    <div className="font-poppins">
      <HeroSection title="My Tickets" />
      {ticketsIsPending ? (
        <Spinner />
      ) : ticketsIsError ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          An error occurred. Please try again
        </h3>
      ) : (
        <TicketsComp ticketsData={ticketsData as string[]} />
      )}
    </div>
  );
};

export default TicketsPage;
