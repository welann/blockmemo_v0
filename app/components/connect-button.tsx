"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ConnectButton() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // Here you would typically integrate with a Web3 wallet
    setIsConnected(!isConnected);
  };

  return (
    <Button
      onClick={handleConnect}
      className={
        isConnected
          ? "bg-green-600 hover:bg-green-700"
          : "bg-cyan-600 hover:bg-cyan-700"
      }
    >
      {isConnected ? "Connected" : "Connect Wallet"}
    </Button>
  );
}
