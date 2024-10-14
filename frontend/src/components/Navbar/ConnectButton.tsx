import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import WalletWrapper from "./WalletWrapper";

const ConnectButton = () => {
  const [open, setOpen] = useState(false);
  return <ConnectButtonDisplay open={open} setOpen={setOpen} />;
};

export default ConnectButton;

const ConnectButtonDisplay = ({
  open,
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) => {
  return (
    <>
      <Button
        variant="connect"
        size="connect"
        className="font-semibold"
        onClick={() => setOpen(true)}
      >
        Connect Wallet
      </Button>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px] bg-nftBlack text-nftWhite border-nftBlack font-poppins flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              src="/images/connect.webp"
              alt=""
              className="h-40 w-full object-cover object-center"
            />
          </div>
          <DialogHeader className="!text-center">
            <DialogTitle className="text-xl font-semibold">
              Connect Wallet
            </DialogTitle>
            <DialogDescription className="text-[#B0B0B0]">
              If you are resident in Nigeria, you might need a VPN to connect
              your wallet
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex items-center justify-center mt-6 gap-4">
            <div onClick={() => setOpen(false)}>
              <WalletWrapper
                className="ockConnectWallet_Container p-2 sm:px-4 sm:py-3 sm:min-w-[90px] shrink bg-nftGreen !text-nftBlack"
                text="Sign up"
              />
            </div>

            <div onClick={() => setOpen(false)}>
              <WalletWrapper
                className="min-w-[90px]"
                text="Log in"
                withWalletAggregator={true}
              />
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
