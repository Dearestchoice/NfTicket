import { Link } from "react-router-dom"

const EventCard = () => {
  return (
    <Link to={`/events/${2}`} className="p-2 rounded-md flex flex-col gap-2 border border-white/10">
      <div className="flex items-center justify-center overflow-hidden rounded">
        <img src="/images/nft.webp" alt="" className="h-52 w-full object-cover" />
      </div>
      <div className="flex items-center justify-between font-semibold">
        <h4 className="md:text-lg">Crypto Fest</h4>
        <p className="text-nftGreen text-sm md:text-base">50 ETH</p>
      </div>
      <p className="text-xs md:text-sm font-medium">July 10, 2024</p>
      <p className="text-xs md:text-sm font-medium">Berlin, Germany</p>
      <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2">Buy Ticket</button>
    </Link>
  )
}

export default EventCard