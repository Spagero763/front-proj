// Token hook
import {useState} from "react";
export const useToken = (address: string) => {
  const [balance, setBalance] = useState("0");
  return {balance};
};
