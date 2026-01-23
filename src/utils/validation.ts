// Type guards and validation utilities

export const isValidAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidNumberString = (value: string): boolean => {
  const numericRegex = /^\d+(\.\d+)?$/;
  return numericRegex.test(value);
};

export const isValidPercentage = (value: number): boolean => {
  return value >= 0 && value <= 100;
};

export const isPositiveNumber = (value: number): boolean => {
  return !isNaN(value) && value > 0;
};

export const isNonNegativeNumber = (value: number): boolean => {
  return !isNaN(value) && value >= 0;
};

export const hasProperty = <T extends object, K extends PropertyKey>(
  obj: T,
  key: K
): obj is T & Record<K, unknown> => {
  return key in obj;
};

export const isNullOrUndefined = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

export const isEmptyString = (value: string): boolean => {
  return value.trim().length === 0;
};

export const isEmptyArray = <T>(arr: T[]): arr is T[] => {
  return arr.length === 0;
};

export const isNonEmptyArray = <T>(arr: T[]): arr is T[] => {
  return arr.length > 0;
};
