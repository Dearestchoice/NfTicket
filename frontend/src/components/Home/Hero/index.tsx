import { Button } from "@/components/ui/button"
import SwiperSection from "./SwiperSection";
import MarqueeSection from "./MarqueeSection";

const Hero = () => {
  return (
    <div>
      <div className="heroSection mt-[90px] w-[80%] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold leading-[64px]">Unlock the Future of <span className="text-[#FF1D79]">Event Ticketing</span> with <span className="text-[#FF1D79]">NFTs</span></h2>
          <div className="mt-6 mb-12">
          <Button variant="connect" size="connect" className="mr-6">Connect Wallet</Button>
          <Button variant="browse" size="connect">Browse Events</Button>
          </div>
        </div>
       
        <div>
        <SwiperSection />
        </div>
      </div>    

      <div className="mt-11">
      <MarqueeSection />
      </div>
    
    </div>
  )
}

export default Hero