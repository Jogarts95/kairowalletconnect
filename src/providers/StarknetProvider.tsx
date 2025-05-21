// src/StarknetProvider.tsx
import React from "react";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors
} from "@starknet-react/core";
import { sepolia } from "@starknet-react/chains";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={publicProvider()}
      connectors={connectors}
    >
      {children}
    </StarknetConfig>
  );
}
