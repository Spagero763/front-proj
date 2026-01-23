// Promise utilities
export const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
export const timeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  return Promise.race([promise, new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms))]);
};
export const all = Promise.all;
export const race = Promise.race;
export const allSettled = Promise.allSettled;
