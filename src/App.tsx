// src/App.tsx
import React from "react";
import { StarknetProvider } from "./providers/StarknetProvider";
import { ConnectWallet } from "./components/ConnectWallet";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <StarknetProvider>
      <LandingPage>
        <ConnectWallet />
      </LandingPage>
    </StarknetProvider>
  );
}

export default App;
