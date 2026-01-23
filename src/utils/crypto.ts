// Crypto and blockchain utilities

export const formatGwei = (value: string | bigint): string => {
  const numValue = typeof value === 'string' ? value : value.toString();
  const asNumber = parseFloat(numValue) / 1e9;
  return asNumber.toFixed(9).replace(/\.?0+$/, '');
};

export const parseGwei = (value: string): bigint => {
  const asNumber = parseFloat(value);
  return BigInt(Math.round(asNumber * 1e9));
};

export const formatWei = (value: string | bigint, decimals = 18): string => {
  const numValue = typeof value === 'string' ? value : value.toString();
  const asNumber = parseFloat(numValue) / Math.pow(10, decimals);
  return asNumber.toFixed(decimals).replace(/\.?0+$/, '');
};

export const parseWei = (value: string, decimals = 18): bigint => {
  const asNumber = parseFloat(value);
  return BigInt(Math.round(asNumber * Math.pow(10, decimals)));
};

export const isEthereumAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const isValidHash = (hash: string): boolean => {
  return /^0x[a-fA-F0-9]{64}$/.test(hash);
};

export const normalizeAddress = (address: string): string => {
  if (!isEthereumAddress(address)) {
    throw new Error('Invalid Ethereum address');
  }
  return address.toLowerCase();
};

export const checksumAddress = (address: string): string => {
  const addr = address.toLowerCase().replace(/^0x/, '');
  const hash = Array.from(addr).map(c => c.charCodeAt(0).toString(16)).join('');
  let checksummed = '0x';
  
  for (let i = 0; i < addr.length; i++) {
    const hashValue = parseInt(hash[i], 16);
    checksummed += hashValue >= 8 ? addr[i].toUpperCase() : addr[i];
  }
  
  return checksummed;
};

export const getTokenSymbolFromAddress = (address: string): string => {
  return `0x${address.slice(-4).toUpperCase()}`;
};

export const isSmartContract = (code: string): boolean => {
  return code !== '0x' && code.length > 2;
};
