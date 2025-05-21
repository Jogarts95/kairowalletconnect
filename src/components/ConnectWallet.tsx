// src/ConnectWallet.tsx
import React, { useEffect } from "react";
import { useAccount, useConnect } from "@starknet-react/core";

export function ConnectWallet() {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();

  const handleConnect = async () => {
    const connector = connectors[0]; // Usa Argent o Braavos
    await connect({ connector });
  };

  useEffect(() => {
    if (address) {
      // Redirige a Unity (si usas app nativa con esquema personalizado)
      window.location.href = `myunityapp://wallet-connected?address=${address}`;

      // O guardar en localStorage (ideal para WebGL)
      // localStorage.setItem("wallet_address", address);
    }
  }, [address]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Conectar Wallet de Starknet</h1>
      <button
        onClick={handleConnect}
        style={{
          fontSize: "20px",
          padding: "12px 32px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Conectar Wallet
      </button>
    </div>
  );
}
