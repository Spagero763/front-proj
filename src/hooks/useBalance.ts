// Balance hook
import {useState, useEffect} from "react";
export const useBalance = () => {
  const [balance, setBalance] = useState("0");
  useEffect(() => {setBalance("0")}, []);
  return balance;
};
