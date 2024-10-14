import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";

import HeroSection from "@/components/Hero";
import MintCard from "@/components/Mint/MintCard";
import ConnectButton from "@/components/Navbar/ConnectButton";
import { Spinner } from "@/components/Spinner";

import { IEvent } from "@/types";
import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";

const MintPage = () => {
  const { address } = useAccount();

  return (
    <>
      {address ? (
        <MintPageDisplay address={address} />
      ) : (
        <div className="my-8 flex flex-col gap-2 items-center justify-center text-center font-poppins px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-lg md:text-2xl">Connect Wallet</h3>
          <p className="text-[#B0B0B0] md:text-lg">
            To proceed with this action, kindly connect your wallet.
          </p>
          <div className="my-4">
            <ConnectButton />
          </div>
        </div>
      )}
    </>
  );
};

const MintPageDisplay = ({ address }: { address: `0x${string}` }) => {
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
      ) : !eventsToDisplay || !eventsToDisplay.length ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          There are currently no events available
        </h3>
      ) : eventsToDisplay.length ? (
        <div
          className={`mx-auto grid gap-3 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14`}
        >
          {eventsToDisplay.map((event) => (
            <MintCard key={event.eventId} {...event} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MintPage;
