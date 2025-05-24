import React, { useEffect } from "react";
import { useAccount, useConnect } from "@starknet-react/core";
import { useWalletStorage } from "../hooks/useWalletStorage";

export const WalletConnector = () => {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { saveWalletAddress } = useWalletStorage();

  const handleConnect = async () => {
    const connector = connectors[0];
    await connect({ connector });
  };

  useEffect(() => {
    if (address) {
      saveWalletAddress(address);
      window.location.href = "/game";
    }
  }, [address]);

  return (
    <section className="wallet-connector">
      <h1>Conectar Wallet de Starknet</h1>
      <button onClick={handleConnect} className="wallet-button">
        Conectar Wallet
      </button>
    </section>
  );
};