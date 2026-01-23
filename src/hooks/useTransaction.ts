// Transaction hook
import {useState} from "react";
export const useTransaction = () => {
  const [hash, setHash] = useState<string | null>(null);
  return {hash};
};
