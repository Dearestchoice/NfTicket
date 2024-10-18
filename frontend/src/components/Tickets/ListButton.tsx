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
  imageURI,
}: {
  ticketId: string;
  ticketOwner: string;
  imageURI: string;
  eventDescription: string;
}) {
  const { address } = useAccount();
  const [price, setPrice] = useState("");

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
              <Label htmlFor="name">
                Ticket Price <span className="text-xs">(in ETH)</span>
              </Label>
              <Input
                type="number"
                min={0.0}
                className="text-nftBlack"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <DialogFooter className="flex items-center justify-center mt-6 gap-4">
              {price ? (
                <ListTransaction ticketId={ticketId} price={price!} />
              ) : (
                <div className="flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 flex items-center justify-center gap-4 opacity-70">
                  <div className="flex w-full flex-col gap-2">
                    <button
                      className="cursor-pointer active:bg-ock-primary-active w-full rounded-xl px-4 py-3 font-bold font-sans text-base leading-normal bg-nftGreen text-nftBlack hover:bg-nftGreen"
                      type="button"
                      disabled
                    >
                      <span className="font-bold font-sans text-base leading-normal text-ock-inverse flex justify-center">
                        List Ticket
                      </span>
                    </button>
                    <div className="flex justify-between text-nftGreen">
                      <div className="font-sans text-ock-foreground text-sm leading-5">
                        <p className="text-ock-foreground-muted"></p>
                      </div>
                      <div className="font-sans text-ock-foreground text-sm leading-5 min-w-[70px]"></div>
                    </div>
                  </div>
                </div>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
