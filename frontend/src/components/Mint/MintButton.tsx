import { useState } from "react";
import { useAccount } from "wagmi";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import MintTransaction from "./MintTransaction";

import { IEvent } from "@/types";

export default function MintButton({
  eventDescription,
  eventId,
  imageURI,
  maxTickets,
  mintedTickets,
  organizer,
}: IEvent) {
  const { address } = useAccount();
  const [numOfTickets, setNumOfTickets] = useState<number>();

  const ticketsLeft = Number(maxTickets) - Number(mintedTickets);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {address === organizer ? (
          <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2">
            Mint Ticket
          </button>
        ) : null}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-nftBlack text-nftWhite border-nftBlack font-poppins flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            src={imageURI}
            alt=""
            className="h-40 w-full object-cover object-center"
          />
        </div>
        {address !== organizer ? (
          <>
            <DialogHeader className="!text-center">
              <DialogTitle className="text-xl font-semibold">
                {eventDescription}
              </DialogTitle>
              <DialogDescription className="text-[#B0B0B0] text-center">
                You cannot carry out this action
              </DialogDescription>
            </DialogHeader>
          </>
        ) : (
          <>
            <DialogHeader className="!text-center">
              <DialogTitle className="text-xl font-semibold">
                {eventDescription}
              </DialogTitle>
              <DialogDescription className="text-[#B0B0B0] text-center">
                You can mint some or all of your tickets. Minting tickets makes
                them available for sale
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-2 w-full my-2">
              <Label htmlFor="name">Number of Tickets</Label>
              <Input
                type="number"
                min={0.00}
                className="text-nftBlack"
                value={numOfTickets}
                onChange={(e) => {
                  if (+e.target.value > ticketsLeft) {
                    setNumOfTickets(ticketsLeft);
                  } else {
                    setNumOfTickets(e.target.value as unknown as number);
                  }
                }}
              />
              <span className="text-xs">{ticketsLeft} unminted tickets</span>
            </div>

            <DialogFooter className="flex items-center justify-center mt-6 gap-4">
              <MintTransaction eventId={eventId} numOfTickets={+numOfTickets!} />
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
