import React from "react";
import ReactDOM from "react-dom/client";
import { Buffer } from "buffer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import { config } from "./wagmi.ts";

import "@rainbow-me/rainbowkit/styles.css";
import "@coinbase/onchainkit/styles.css";
import "./index.css";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact">
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Router>
  </React.StrictMode>
);
