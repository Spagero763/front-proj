// Wallet hook
import {useCallback, useState} from "react";
export const useWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const connect = useCallback(async () => {setIsConnected(true)}, []);
  return {isConnected, connect};
};
