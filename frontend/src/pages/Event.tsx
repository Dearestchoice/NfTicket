import { DateIcon, LocationIcon, TimeIcon } from "@/components/Icons"

const EventPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
      <div className="rounded-md overflow-hidden flex justify-center items-center max-h-[500px]">
        <img src="/images/event.webp" alt="" className="flex-1" />
      </div>
      <div className="font-poppins flex gap-4 flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Crypto Fest</h2>
          <p>Crypto Fest 2024 is a leading event focused on blockchain, cryptocurrencies, and decentralized tech. It brings together industry leaders, developers, investors, and enthusiasts to explore the latest trends, innovations, and applications in the crypto world. Expect keynote talks, panels, workshops, and networking sessions covering Web3, DeFi, NFTs, and more.</p>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2 items-center">
            <DateIcon />
            <p>July 10, 2024</p>
          </div>
          <div className="flex gap-2 items-center">
            <TimeIcon />
            <p>12:00</p>
          </div>
          <div className="flex gap-2 items-center">
            <LocationIcon />
            <p>New York, USA</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="border-2 border-nftGreen rounded-3xl flex flex-col justify-center items-center p-2 space-y-2">
            <p className="font-medium text-[#C5C5C5] text-xs md:text-sm">Reg</p>
            <h4 className="font-semibold text-sm md:text-base">0.5 ETH</h4>
          </div>
          <div className="border-2 border-nftGreen rounded-3xl flex flex-col justify-center items-center p-2 space-y-2">
            <p className="font-medium text-[#C5C5C5] text-xs md:text-sm">VIP</p>
            <h4 className="font-semibold text-sm md:text-base">0.5 ETH</h4>
          </div>
          <div className="border-2 border-nftGreen rounded-3xl flex flex-col justify-center items-center p-2 space-y-2">
            <p className="font-medium text-[#C5C5C5] text-xs md:text-sm">VVIP</p>
            <h4 className="font-semibold text-sm md:text-base">0.5 ETH</h4>
          </div>
        </div>
        <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-4 w-full">Buy Ticket</button>
      </div>
    </div>
  )
}

export default EventPage