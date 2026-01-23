// Application-wide constants
export const APP_NAME = 'OWN Protocol';
export const APP_DESCRIPTION = 'Decentralized asset pool and liquidity management protocol';

// Network constants
export const DEFAULT_CHAIN_ID = 1;
export const SUPPORTED_CHAINS = [1, 42161, 137];

// UI Constants
export const TOAST_DURATION = 5000;
export const MODAL_ANIMATION_DURATION = 300;
export const DEFAULT_DEBOUNCE_MS = 300;

// Polling intervals (in milliseconds)
export const POOL_DATA_REFRESH_INTERVAL = 30000;
export const MARKET_DATA_REFRESH_INTERVAL = 60000;
export const BALANCE_REFRESH_INTERVAL = 15000;

// Numeric constants
export const DECIMAL_PRECISION = 18;
export const DEFAULT_SLIPPAGE = 0.005;
export const MIN_TRANSACTION_AMOUNT = '0.001';
export const MAX_UINT256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

// API constants
export const YAHOO_FINANCE_API_ENDPOINT = '/api/yahoo-finance';
export const REQUEST_TIMEOUT = 30000;

// Cache constants
export const CACHE_DURATION = 300000;
export const POOL_CACHE_KEY = 'pool_data';
export const USER_CACHE_KEY = 'user_data';

// Error messages
export const ERROR_MESSAGES = {
  WALLET_NOT_CONNECTED: 'Wallet not connected. Please connect your wallet.',
  INVALID_AMOUNT: 'Please enter a valid amount.',
  INSUFFICIENT_BALANCE: 'Insufficient balance for this transaction.',
  TRANSACTION_FAILED: 'Transaction failed. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNKNOWN_ERROR: 'An unknown error occurred.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  TRANSACTION_CONFIRMED: 'Transaction confirmed successfully!',
  DATA_UPDATED: 'Data updated successfully!',
  OPERATION_COMPLETED: 'Operation completed successfully!',
} as const;

// Loading messages
export const LOADING_MESSAGES = {
  FETCHING_DATA: 'Fetching data...',
  PROCESSING_TRANSACTION: 'Processing transaction...',
  CONNECTING_WALLET: 'Connecting wallet...',
} as const;
