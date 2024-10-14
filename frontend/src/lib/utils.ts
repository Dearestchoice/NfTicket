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

  const firstSix = address.slice(0, 6); // "0x" plus first 4 characters
  const lastSix = address.slice(-6); // Last 4 characters

  return `${firstSix}...${lastSix}`;
}
