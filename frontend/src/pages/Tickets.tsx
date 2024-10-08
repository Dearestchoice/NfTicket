import HeroSection from "@/components/Hero"
import TicketCard from "@/components/Tickets/TicketCard"

const TicketsPage = () => {
  return (
    <div className="font-poppins">
      <HeroSection title="My Tickets" />
      <div className="mx-auto grid gap-3 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8">
        {[1, 2, 3, 4].map(item => <TicketCard key={item} />)}
      </div>
    </div>
  )
}

export default TicketsPage