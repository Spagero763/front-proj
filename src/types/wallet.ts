// Wallet types
export interface Wallet {id: string; address: string; name: string; balance: string;}
export interface ConnectWalletOptions {autoConnect?: boolean;}
export interface DisconnectOptions {clearCache?: boolean;}
