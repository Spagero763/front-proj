// Transaction hook
import { useState, useCallback } from "react";

export type TransactionStatus = "idle" | "pending" | "success" | "error";

export interface TransactionState {
  hash: string | null;
  status: TransactionStatus;
  error: Error | null;
  confirmations: number;
}

export const useTransaction = () => {
  const [state, setState] = useState<TransactionState>({
    hash: null,
    status: "idle",
    error: null,
    confirmations: 0,
  });

  const reset = useCallback(() => {
    setState({
      hash: null,
      status: "idle",
      error: null,
      confirmations: 0,
    });
  }, []);

  const setHash = useCallback((hash: string) => {
    setState(prev => ({
      ...prev,
      hash,
      status: "pending",
    }));
  }, []);

  const setSuccess = useCallback((confirmations: number = 1) => {
    setState(prev => ({
      ...prev,
      status: "success",
      confirmations,
    }));
  }, []);

  const setError = useCallback((error: Error) => {
    setState(prev => ({
      ...prev,
      status: "error",
      error,
    }));
  }, []);

  return {
    ...state,
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    reset,
    setHash,
    setSuccess,
    setError,
  };
};
