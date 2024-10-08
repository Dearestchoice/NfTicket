import React from 'react'
import ReactDOM from 'react-dom/client'
import { Buffer } from 'buffer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { base } from 'wagmi/chains';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App.tsx'
import { config } from './wagmi.ts'

import '@rainbow-me/rainbowkit/styles.css';
import '@coinbase/onchainkit/styles.css';
import './index.css'

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <OnchainKitProvider
            apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY}
            chain={base}
          >
            <RainbowKitProvider modalSize="compact">
              <App />
            </RainbowKitProvider>
          </OnchainKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Router>
  </React.StrictMode>,
)
