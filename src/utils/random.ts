// Random utilities
export const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
export const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min;
export const randomBoolean = (): boolean => Math.random() > 0.5;
export const randomUUID = (): string => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  const r = Math.random() * 16 | 0;
  return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
});
export const randomString = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};
