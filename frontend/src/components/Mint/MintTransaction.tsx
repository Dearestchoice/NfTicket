import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import type {
  TransactionError,
  TransactionResponse,
} from "@coinbase/onchainkit/transaction";
import type { ContractFunctionParameters } from "viem";

import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";

const MintTransaction = ({
  eventId,
  numOfTickets,
}: {
  eventId: string;
  numOfTickets: number;
}) => {
  const contracts = [
    {
      address: contractAddress,
      abi: abi,
      functionName: "mintMultipleTickets",
      args: [eventId, numOfTickets],
    },
  ] as unknown as ContractFunctionParameters[];

  const handleError = (err: TransactionError) => {
    console.error("Transaction error:", JSON.stringify(err));
  };

  const handleSuccess = (response: TransactionResponse) => {
    console.log("Transaction successful", response);
  };

  return (
    <Transaction
      contracts={contracts}
      chainId={BASE_SEPOLIA_CHAIN_ID}
      onError={handleError}
      onSuccess={handleSuccess}
    >
      <TransactionButton
        disabled={!eventId || !numOfTickets}
        className="bg-nftGreen text-nftBlack hover:bg-nftGreen"
        text="Mint Tickets"
      />
      <TransactionStatus className="text-nftGreen">
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  );
};

export default MintTransaction;
