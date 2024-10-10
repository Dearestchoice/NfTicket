import Community from "@/components/Home/Community";
import UpcomingEvents from "@/components/Home/Events";
import Hero from "@/components/Home/Hero";
import Works from "@/components/Home/Works";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="px-4 sm:px-6 lg:px-8">
        <UpcomingEvents />
        <Works />
        <Community />
      </div>
    </>
  );
};

export default HomePage;
