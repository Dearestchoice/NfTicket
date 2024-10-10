import { Button } from "@/components/ui/button";

import { DesktopSwiper, MobileSwiper } from "./SwiperSection";
import MarqueeSection from "./MarqueeSection";

const Hero = () => {
  return (
    <div>
      <div className="heroSection mt-[90px] w-[80%] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold leading-[64px]">
            Unlock the Future of&nbsp;
            <span className="text-[#FF1D79]">Event Ticketing</span> with&nbsp;
            <span className="text-[#FF1D79]">NFTs</span>
          </h2>
          <div className="mt-6 mb-12 flex flex-col gap-4 md:flex-row items-center justify-center">
            <Button variant="connect" size="connect">
              Connect Wallet
            </Button>
            <Button variant="browse" size="connect">
              Browse Events
            </Button>
          </div>
        </div>

        <div className="lg:hidden">
          <MobileSwiper />
        </div>
        <div className="hidden lg:block">
          <DesktopSwiper />
        </div>
      </div>

      <div className="my-16">
        <MarqueeSection />
      </div>
    </div>
  );
};

export default Hero;
