import HeroSection from "@/components/Hero"
import EventCard from "@/components/Home/Events/EventCard"

const EventsPage = () => {
  return (
    <>
      <HeroSection title="Events" />
      <div className="mx-auto grid gap-3 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map(item => <EventCard key={item} />)}
      </div>
    </>
  )
}

export default EventsPage