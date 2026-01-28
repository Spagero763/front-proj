// Wallet hook
import { useCallback, useState } from "react";

export interface WalletState {
  isConnected: boolean;
  isConnecting: boolean;
  address: string | null;
  error: Error | null;
}

export const useWallet = () => {
  const [state, setState] = useState<WalletState>({
    isConnected: false,
    isConnecting: false,
    address: null,
    error: null,
  });

  const connect = useCallback(async () => {
    setState(prev => ({ ...prev, isConnecting: true, error: null }));
    try {
      // Simulated connection - in production this would use wagmi
      await new Promise(resolve => setTimeout(resolve, 500));
      setState({
        isConnected: true,
        isConnecting: false,
        address: "0x...",
        error: null,
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        isConnecting: false,
        error: err instanceof Error ? err : new Error("Failed to connect"),
      }));
    }
  }, []);

  const disconnect = useCallback(() => {
    setState({
      isConnected: false,
      isConnecting: false,
      address: null,
      error: null,
    });
  }, []);

  return {
    ...state,
    connect,
    disconnect,
  };
};
