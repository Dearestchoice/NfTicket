import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BuyTransaction from "./BuyTransaction";

export default function BuyButton({
  ticketId,
  eventDescription,
  imageURI,
  price
}: {
  ticketId: string;
  ticketOwner: string;
  imageURI: string;
  eventDescription: string;
  price: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2">
          Buy Ticket
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-nftBlack text-nftWhite border-nftBlack font-poppins flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            src={imageURI}
            alt=""
            className="h-40 w-full object-cover object-center"
          />
        </div>
        <DialogHeader className="!text-center">
          <DialogTitle className="text-xl font-semibold">
            Purchase {eventDescription} ticket
          </DialogTitle>
          <DialogDescription className="text-[#B0B0B0] text-center">
            Click the button to proceed
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex items-center justify-center mt-6 gap-4">
          <BuyTransaction ticketId={ticketId} price={price} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
