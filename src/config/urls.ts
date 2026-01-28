// URL configuration
export const urls = {
  explorer: "https://sepolia.basescan.org",
  docs: "https://own-protocol.gitbook.io/docs",
  github: "https://github.com/own-protocol",
  twitter: "https://x.com/iownco",
  telegram: "https://t.me/+EX6VZh6rrPc5YmI9",
};

// Helper to generate block explorer URLs
export const getExplorerUrl = {
  tx: (hash: string) => `${urls.explorer}/tx/${hash}`,
  address: (addr: string) => `${urls.explorer}/address/${addr}`,
  token: (addr: string) => `${urls.explorer}/token/${addr}`,
};
