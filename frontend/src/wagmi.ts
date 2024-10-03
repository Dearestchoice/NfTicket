import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { http, createConfig } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";


const projectId = import.meta.env.VITE_WC_PROJECT_ID ?? "";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended Wallet",
      wallets: [coinbaseWallet],
    },
    {
      groupName: "Other Wallets",
      wallets: [rainbowWallet, metaMaskWallet],
    },
  ],
  {
    appName: "onchainkit",
    projectId,
  }
);

export const config = createConfig({
  chains: [base, baseSepolia],
  // turn off injected provider discovery
  // multiInjectedProviderDiscovery: false,
  connectors,
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
