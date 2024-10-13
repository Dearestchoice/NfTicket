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

import ListTransaction from "./ListTransaction";

export default function ListButton({
  ticketId,
  ticketOwner,
  eventDescription,
  imageURI
}: {
  ticketId: string;
  ticketOwner: string;
  imageURI: string;
  eventDescription: string;
}) {
  const { address } = useAccount();
  const [price, setPrice] = useState<number>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {address === ticketOwner ? (
          <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2">
            List for Sale
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
        {address !== ticketOwner ? (
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
                Set a price for this ticket
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-2 w-full my-2">
              <Label htmlFor="name">Ticket Price</Label>
              <Input
                type="number"
                min={0.0}
                className="text-nftBlack"
                value={price}
                onChange={(e) => setPrice(e.target.value as unknown as number)}
              />
            </div>

            <DialogFooter className="flex items-center justify-center mt-6 gap-4">
              <ListTransaction ticketId={ticketId} price={+price!} />
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
