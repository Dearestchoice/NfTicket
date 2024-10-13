import MintButton from "./MintButton";

import { IEvent } from "@/types";

const MintCard = (props: IEvent) => {
  const { imageURI } = props;

  return (
    <div className="flex flex-col gap-2">
      <img
        src={imageURI}
        alt=""
        className="h-96 w-full object-cover object-center rounded-lg border-2 border-nftGreen overflow-hidden"
      />
      <MintButton {...props} />
    </div>
  );
};

export default MintCard;
