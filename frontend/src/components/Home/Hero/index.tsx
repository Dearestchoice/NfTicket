import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

import ConnectButton from "@/components/Navbar/ConnectButton";
import { Button } from "@/components/ui/button";
import { DesktopSwiper, MobileSwiper } from "./SwiperSection";
import MarqueeSection from "./MarqueeSection";

const Hero = () => {
  const { address } = useAccount();

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
            {address ? null : (
              <ConnectButton />
            )}
            <Link to={"/events"}>
              <Button variant="browse" size="connect">
                Browse Events
              </Button>
            </Link>
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
