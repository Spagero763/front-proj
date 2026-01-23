// Retry logic utilities

export interface RetryOptions {
  maxRetries: number;
  initialDelayMs: number;
  maxDelayMs: number;
  backoffMultiplier: number;
}

export const retry = async <T>(
  fn: () => Promise<T>,
  options: Partial<RetryOptions> = {}
): Promise<T> => {
  const {
    maxRetries = 3,
    initialDelayMs = 1000,
    maxDelayMs = 30000,
    backoffMultiplier = 2,
  } = options;

  let lastError: Error | null = null;
  let delayMs = initialDelayMs;

  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
        delayMs = Math.min(delayMs * backoffMultiplier, maxDelayMs);
      }
    }
  }

  throw lastError;
};

export const retrySync = <T>(
  fn: () => T,
  maxRetries: number = 3
): T => {
  let lastError: Error | null = null;

  for (let i = 0; i <= maxRetries; i++) {
    try {
      return fn();
    } catch (error) {
      lastError = error as Error;
    }
  }

  throw lastError;
};
