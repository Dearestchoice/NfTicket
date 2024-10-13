import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCreatorAddress(address: string): string {
  // Ensure the input is a valid Ethereum address (42 characters, starting with '0x')
  if (address?.length !== 42 || !address?.startsWith("0x")) {
    throw new Error("Invalid Ethereum address");
  }

  const firstFour = address.slice(0, 6); // "0x" plus first 4 characters
  const lastFour = address.slice(-6); // Last 4 characters

  return `${firstFour}...${lastFour}`;
}

export const mdGrid = (arr: any) => {
  if (!arr) return 2;
  if (arr.length < 2) return 1;
  return 2;
};

export const lgGrid = (arr: any) => {
  if (!arr) return 4;
  if (arr.length < 4) return arr.length;
  return 4;
};