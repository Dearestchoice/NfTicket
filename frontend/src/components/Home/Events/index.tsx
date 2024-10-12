import { useReadContract } from "wagmi";

import EventCard from "./EventCard";
import { Spinner } from "@/components/Spinner";

import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";
import { IEvent } from "@/types";

const mdGrid = (arr: any) => {
  if (!arr) return 2;
  if (arr.length < 2) return 1;
  return 2;
};

const lgGrid = (arr: any) => {
  if (!arr) return 4;
  if (arr.length < 4) return arr.length;
  return 4;
};

const UpcomingEvents = () => {
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
    <section className="font-poppins space-y-6 md:space-y-8 lg:space-y-10 py-10 md:py-14 lg:py-24 lg:pb-32">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
        Upcoming Events
      </h2>
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
    </section>
  );
};

export default UpcomingEvents;
