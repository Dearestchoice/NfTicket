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
import { ethers } from "ethers";

import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";

const ListTransaction = ({
  ticketId,
  price,
}: {
  ticketId: string;
  price: string;
}) => {
  const amtInBigNumber = ethers.BigNumber.from(ethers.utils.parseUnits(price));
  const value = ethers.utils.hexValue(amtInBigNumber);
  const contracts = [
    {
      address: contractAddress,
      abi: abi,
      functionName: "listTicketForSale",
      args: [ticketId, value],
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
        disabled={!ticketId || !price}
        className="bg-nftGreen text-nftBlack hover:bg-nftGreen"
        text="List Ticket"
      />
      <TransactionStatus className="text-nftGreen">
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  );
};

export default ListTransaction;
