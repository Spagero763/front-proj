// Debounce and throttle utilities

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delayMs: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delayMs);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delayMs: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delayMs) {
      func(...args);
      lastCall = now;
    }
  };
};

export const debounceAsync = <T extends (...args: any[]) => Promise<any>>(
  func: T,
  delayMs: number
): ((...args: Parameters<T>) => Promise<any>) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    return new Promise(resolve => {
      timeoutId = setTimeout(() => {
        func(...args).then(resolve);
      }, delayMs);
    });
  };
};
