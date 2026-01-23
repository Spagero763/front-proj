// Transaction types
export interface Transaction {hash: string; status: "pending"|"success"|"failed"; from: string; to: string;}
export interface TransactionReceipt {transactionHash: string; status: number; blockNumber: number;}
