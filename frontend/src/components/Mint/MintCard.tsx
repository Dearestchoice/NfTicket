import MintButton from "./MintButton";

import { IEvent } from "@/types";

const MintCard = (props: IEvent) => {
  const { imageURI, maxTickets, mintedTickets } = props;

  return (
    <div className="flex flex-col gap-2">
      <img
        src={imageURI}
        alt=""
        className="h-96 w-full object-cover object-center rounded-lg border-2 border-nftGreen overflow-hidden"
      />
      <div className="flex gap-2">
        <p>Tickets Available for minting:</p>
        <p className="font-semibold">
          {Number(maxTickets) - Number(mintedTickets)}
        </p>
      </div>
      <MintButton {...props} />
    </div>
  );
};

export default MintCard;
