import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";

import HeroSection from "@/components/Hero";
import TicketsComp from "@/components/Tickets/TicketsComp";
import ConnectButton from "@/components/Navbar/ConnectButton";
import { Spinner } from "@/components/Spinner";

import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";

const TicketsPage = () => {
  const { address } = useAccount();

  return (
    <>
      {address ? (
        <TicketsPageDisplay address={address} />
      ) : (
        <div className="my-8 flex flex-col gap-2 items-center justify-center text-center font-poppins">
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

const TicketsPageDisplay = ({ address }: { address: `0x${string}` }) => {

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
      ) : ticketsData ? (
        <TicketsComp ticketsData={(ticketsData as string[])} />
      ) : null}
    </div>
  );
};

export default TicketsPage;
