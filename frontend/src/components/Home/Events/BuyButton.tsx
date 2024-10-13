// import { useAccount } from "wagmi";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { IEvent } from "@/types";
// import { abi, BASE_SEPOLIA_CHAIN_ID, contractAddress } from "@/constants";
// import { usePrepareTransactionRequest } from "wagmi";
// import { parseEther } from "viem";

// import { Transaction, TransactionButton } from '@coinbase/onchainkit/transaction';
// import { encodeFunctionData, Hex } from 'viem';
// import { baseSepolia } from 'wagmi/chains';

// // import { Button } from "@/components/ui/button";

// export default function BuyButton({
//   eventDescription,
//   eventId,
//   imageURI,
//   maxTickets,
//   mintedTickets,
//   organizer,
// }: IEvent) {
//   const { address } = useAccount();

//   // // Preparing the write contract
//   // const result = usePrepareTransactionRequest({
//   //   value: parseEther('1'),
//   // });

//   // console.log(result)

//   // // // Writing to the contract (i.e., calling the buyTicket function)
//   // const { write, isLoading, isSuccess } = useContractWrite(config);

//   const clickContractAddress: Hex =
//     "0x67c97D1FB8184F038592b2109F854dfb09C77C75";
//   const clickContractAbi = [
//     {
//       type: "function",
//       name: "click",
//       inputs: [],
//       outputs: [],
//       stateMutability: "nonpayable",
//     },
//   ] as const;

//   const encodedClickData = encodeFunctionData({
//     abi: clickContractAbi,
//     functionName: "click",
//   });

//   const calls = [
//     {
//       to: clickContractAddress,
//       data: encodedClickData,
//     },
//   ];

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2">
//           Buy Ticket
//         </button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px] bg-nftBlack text-nftWhite border-nftBlack font-poppins flex flex-col gap-4 items-center justify-center">
//         <div className="flex items-center justify-center">
//           <img
//             src={imageURI}
//             alt=""
//             className="h-40 w-full object-cover object-center"
//           />
//         </div>
//         {address === organizer ? (
//           <>
//             <DialogHeader className="!text-center">
//               <DialogTitle className="text-xl font-semibold">
//                 {eventDescription}
//               </DialogTitle>
//               <DialogDescription className="text-[#B0B0B0] text-center">
//                 You cannot purchase a ticket to your own event
//               </DialogDescription>
//             </DialogHeader>
//           </>
//         ) : (
//           <>
//             <DialogHeader className="!text-center">
//               <DialogTitle className="text-xl font-semibold">
//                 {eventDescription}
//               </DialogTitle>
//               <DialogDescription className="text-[#B0B0B0] text-center">
//                 Are you sure you want to purchase this ticket
//               </DialogDescription>
//             </DialogHeader>

//             <DialogFooter className="flex items-center justify-center mt-6 gap-4">
//               <button className="font-semibold text-nftBlack bg-nftGreen rounded-md p-2">
//                 Purchase
//               </button>
//             </DialogFooter>
//           </>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }
