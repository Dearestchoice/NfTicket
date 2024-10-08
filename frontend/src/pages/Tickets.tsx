import HeroSection from "@/components/Hero"
import TicketCard from "@/components/Tickets/TicketCard"

const TicketsPage = () => {
  return (
    <>
      <HeroSection title="My Tickets" />
      <div className="mx-auto grid gap-3 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map(item => <TicketCard key={item} />)}
      </div>
    </>
  )
}

export default TicketsPage