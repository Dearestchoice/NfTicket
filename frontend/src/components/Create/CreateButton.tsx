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
import { IFormData } from "./EventForm";

const CreateButton = ({ values }: { values: IFormData }) => {
  const contracts = [
    {
      address: contractAddress,
      abi: abi,
      functionName: "createEvent",
      args: [values.title, values.imageURL, values.numOfTickets],
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
        disabled={!values.imageURL || !values.title || !values.numOfTickets}
        className="bg-nftGreen text-nftBlack hover:bg-nftGreen"
        text="Create Event"
      />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  );
};

export default CreateButton;
