// Numeric utilities and formatting

import { DECIMAL_PRECISION } from '@/constants';

export const formatNumber = (value: number, decimals = 2): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

export const formatCurrency = (value: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
};

export const formatPercentage = (value: number, decimals = 2): string => {
  return `${formatNumber(value * 100, decimals)}%`;
};

export const formatCompactNumber = (value: number): string => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + 'M';
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(2) + 'K';
  }
  return formatNumber(value, 2);
};

export const parseNumberInput = (input: string): number => {
  const parsed = parseFloat(input);
  return isNaN(parsed) ? 0 : parsed;
};

export const toDecimals = (value: string | number, decimals = DECIMAL_PRECISION): bigint => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  return BigInt(Math.round(numValue * Math.pow(10, decimals)));
};

export const fromDecimals = (value: bigint | string, decimals = DECIMAL_PRECISION): number => {
  const bigIntValue = typeof value === 'string' ? BigInt(value) : value;
  return Number(bigIntValue) / Math.pow(10, decimals);
};

export const roundToDecimals = (value: number, decimals: number): number => {
  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
};

export const generateRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const generateRandomInteger = (min: number, max: number): number => {
  return Math.floor(generateRandomNumber(min, max + 1));
};
