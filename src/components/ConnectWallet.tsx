// src/ConnectWallet.tsx
import React, { useEffect } from "react";
import { useAccount, useConnect } from "@starknet-react/core";
import argentXLogo from "../assets/ArgenntX.webp";

export function ConnectWallet() {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();

  const handleConnect = async () => {
    const connector = connectors[0];
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
    <div className="flex flex-col items-center">
      <button
        onClick={handleConnect}
        className="group flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 
          rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10
          hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
      >
        <img
          src={argentXLogo}
          alt="Argent X Logo"
          className="rounded-lg w-8 h-8 group-hover:scale-110 transition-transform duration-300"
        />
        <span className="text-white/90 text-lg font-medium group-hover:text-white transition-colors duration-300">
          Conectar con Argent X
        </span>
      </button>
    </div>
  );
}
