import EventCard from "./EventCard"

const UpcomingEvents = () => {
  return (
    <section className="font-poppins space-y-6 md:space-y-8 lg:space-y-10 py-10 md:py-14 lg:py-20">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Upcoming Events</h2>
      <div className="mx-auto grid gap-3 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map(item => <EventCard key={item} />)}
      </div>
    </section>
  )
}

export default UpcomingEvents
