import { LineIcon } from "./Icons";

const Works = () => {
  return (
    <section className="font-poppins space-y-6 md:space-y-8 lg:space-y-10 py-12 md:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
        How It Works
      </h2>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 lg:max-h-[800px]">
        <div className="font-poppins space-y-4 lg:space-y-2">
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-3xl text-nftGreen">01</h3>
              <LineIcon />
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="font-semibold md:text-lg lg:text-xl">
                Connect your Wallet
              </h3>
              <p className="text-sm md:text-base">
                The first step is connecting your Web3 wallet, like MetaMask or
                WalletConnect, to authenticate and manage your NFT tickets. This
                ensures a seamless, secure interaction with the blockchain for
                storing and using your tickets.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-3xl text-nftGreen">02</h3>
              <LineIcon />
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="font-semibold md:text-lg lg:text-xl">
                Browse Upcoming Events
              </h3>
              <p className="text-sm md:text-base">
                After connecting your wallet, you can view the latest events on
                the platform. Browse event details, availability, and pricing,
                with easy access to buy NFT tickets directly.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-3xl text-nftGreen">03</h3>
              <LineIcon />
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="font-semibold md:text-lg lg:text-xl">
                Buy Your NFT Ticket
              </h3>
              <p className="text-sm md:text-base">
                Once you've selected an event, you can purchase an NFT ticket
                from the marketplace. The NFT ticket is securely stored in your
                wallet and represents your entry pass.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-3xl text-nftGreen">04</h3>
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="font-semibold md:text-lg lg:text-xl">
                Enjoy Entry with QR Code
              </h3>
              <p className="text-sm md:text-base">
                On the day of the event, your NFT ticket will include a QR code
                for easy verification at the venue. Simply scan the QR code to
                gain entry, with real-time verification of ownership on the
                blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="relative -top-40 xl:-top-52 hidden lg:flex">
          <img src="/images/works.webp" alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Works;
