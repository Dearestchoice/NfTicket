import { useReadContract } from "wagmi";

import HeroSection from "@/components/Hero";
import EventCard from "@/components/Home/Events/EventCard";
import { Spinner } from "@/components/Spinner";

import { IEvent } from "@/types";
import { mdGrid, lgGrid } from "@/lib/utils";
import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";

const EventsPage = () => {
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

  return (
    <div className="font-poppins ">
      <HeroSection title="Events" />
      {eventsIsPending ? (
        <Spinner />
      ) : eventsIsError ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          An error occurred. Please try again
        </h3>
      ) : (
        <div
          className={`mx-auto grid gap-3 items-start grid-cols-1 sm:grid-cols-${mdGrid(eventsData)} lg:grid-cols-${lgGrid(eventsData)} px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14`}
        >
          {(eventsData as IEvent[]).map((event) => (
            <EventCard key={event.eventId} {...event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
