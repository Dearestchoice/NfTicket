import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";

import HeroSection from "@/components/Hero";
import MintCard from "@/components/Mint/MintCard";
import { Spinner } from "@/components/Spinner";

import { IEvent } from "@/types";
import { mdGrid, lgGrid } from "@/lib/utils";
import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";

const MintPage = () => {
  const { address } = useAccount();

  const {
    data: eventsData,
    isError: eventsIsError,
    isPending: eventsIsPending,
  } = useReadContract({
    address: contractAddress,
    abi: abi,
    chainId: BASE_SEPOLIA_CHAIN_ID,
    functionName: "getAllEvents",
  });

  const eventsToDisplay = (eventsData as IEvent[])?.filter(
    (event) => event.organizer === address
  );

  return (
    <div className="font-poppins">
      <HeroSection title="My Events" />
      {eventsIsPending ? (
        <Spinner />
      ) : eventsIsError ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          An error occurred. Please try again
        </h3>
      ) : (
        <div
          className={`mx-auto grid gap-3 items-start grid-cols-1 sm:grid-cols-${mdGrid(eventsToDisplay)} lg:grid-cols-${lgGrid(eventsToDisplay)} px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14`}
        >
          {eventsToDisplay.map((event) => (
            <MintCard key={event.eventId} {...event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MintPage;
