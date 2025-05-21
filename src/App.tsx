// src/App.tsx
import React from "react";
import { StarknetProvider } from "./providers/StarknetProvider";
import { ConnectWallet } from "./components/ConnectWallet";

function App() {
  return (
    <StarknetProvider>
      <ConnectWallet />
    </StarknetProvider>
  );
}

export default App;
