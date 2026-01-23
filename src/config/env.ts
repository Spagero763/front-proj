// Environment configuration
export const config = {
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || "",
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || "1"),
};
