import { CodeIcon } from "./Icons";

const TicketCard = () => {
  return (
    <div className="p-2 rounded-md flex flex-col gap-2 border border-white/10">
      <div className="flex items-center justify-center overflow-hidden rounded">
        <img
          src="/images/nft.webp"
          alt=""
          className="h-52 w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between font-semibold">
        <h4 className="md:text-lg">Crypto Fest</h4>
        <button className="rounded-2xl border border-[#28A745] py-2 px-4 text-xs">
          Active
        </button>
      </div>
      <p className="text-xs md:text-sm font-medium">July 10, 2024</p>
      <p className="text-xs md:text-sm font-medium">Berlin, Germany</p>
      <div className="flex items-center justify-center py-4 border-b border-dashed ">
        <CodeIcon />
      </div>
      <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2 my-3">
        Sell
      </button>
    </div>
  );
};

export default TicketCard;
