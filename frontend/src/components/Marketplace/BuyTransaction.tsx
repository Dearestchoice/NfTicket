import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
  TransactionToast,
  TransactionToastAction,
  TransactionToastIcon,
  TransactionToastLabel,
} from "@coinbase/onchainkit/transaction";
import type {
  TransactionError,
  TransactionResponse,
} from "@coinbase/onchainkit/transaction";
import { encodeFunctionData } from "viem";

import { BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";

const BuyTransaction = ({
  ticketId,
  price,
}: {
  ticketId: string;
  price: string;
}) => {
  const buyContractAbi = [
    {
      type: "function",
      name: "buyTicket",
      inputs: [{ name: "ticketId", type: "uint256" }],
      outputs: [],
      stateMutability: "payable",
    },
  ] as const;

  const encodedBuyData = encodeFunctionData({
    abi: buyContractAbi,
    functionName: "buyTicket",
    args: [BigInt(ticketId)],
  });

  const calls = [
    {
      to: contractAddress as `0x${string}`,
      data: encodedBuyData,
      value: BigInt(price),
    },
  ];

  const handleError = (err: TransactionError) => {
    console.error("Transaction error:", JSON.stringify(err));
  };

  const handleSuccess = (response: TransactionResponse) => {
    console.log("Transaction successful", response);
    setTimeout(() => {
      window.location.reload()
    }, 3000);
  };

  return (
    <Transaction
      calls={calls}
      chainId={BASE_SEPOLIA_CHAIN_ID}
      onError={handleError}
      onSuccess={handleSuccess}
    >
      <TransactionButton
        disabled={!ticketId || !price}
        className="bg-nftGreen text-nftBlack hover:bg-nftGreen"
        text="Buy Ticket"
      />
      <TransactionStatus className="text-nftGreen">
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
      <TransactionToast>
        <TransactionToastIcon />
        <TransactionToastLabel />
        <TransactionToastAction />
      </TransactionToast>
    </Transaction>
  );
};

export default BuyTransaction;
