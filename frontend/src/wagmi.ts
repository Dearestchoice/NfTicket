import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base, baseSepolia, mainnet, polygon, sepolia } from "wagmi/chains";

const projectId = import.meta.env.VITE_WC_PROJECT_ID ?? "";

export const config = getDefaultConfig({
  appName: "NFTicket",
  projectId,
  chains: [mainnet, polygon, sepolia, base, baseSepolia],
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
