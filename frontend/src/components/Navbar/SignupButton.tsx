import WalletWrapper from './WalletWrapper';

export default function SignupButton() {
  return (
    <WalletWrapper
      className="ockConnectWallet_Container p-2 sm:px-4 sm:py-3 sm:min-w-[90px] shrink bg-nftGreen !text-nftBlack"
      text="Sign up"
    />
  );
}
