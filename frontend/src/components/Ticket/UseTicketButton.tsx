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

import UseTicketTransaction from "./UseTicketTransaction";

export default function UseTicketButton({
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        {address === ticketOwner ? (
          <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2">
            Claim Ticket
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
                Claim ticket to gain access to event
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="flex items-center justify-center mt-6 gap-4">
              <UseTicketTransaction ticketId={ticketId} />
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
