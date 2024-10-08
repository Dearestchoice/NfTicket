import HeroSection from "@/components/Hero";
import EventCard from "@/components/Home/Events/EventCard";

const EventsPage = () => {
  return (
    <div className="font-poppins ">
      <HeroSection title="Events" />
      <div className="mx-auto grid gap-3 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        {[1, 2, 3, 4].map((item) => (
          <EventCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
