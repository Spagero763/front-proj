// Token service
export const getTokenInfo = async (address: string) => ({address, symbol: "TOKEN", decimals: 18});
export const transferToken = async (to: string, amount: string) => ({success: true});
