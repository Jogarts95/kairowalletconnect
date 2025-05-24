import React from "react";
import { StarknetProvider } from "./providers/StarknetProvider";
import { WalletConnector } from "./features/wallet/components/WalletConnector";

function App() {
  return (
    <StarknetProvider>
      <main className="app-container">
        <WalletConnector />
      </main>
    </StarknetProvider>
  );
}

export default App;