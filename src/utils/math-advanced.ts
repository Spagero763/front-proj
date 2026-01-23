// Advanced math utilities
export const isEven = (n: number): boolean => n % 2 === 0;
export const isOdd = (n: number): boolean => n % 2 !== 0;
export const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
};
export const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
export const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
export const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
export const fibonacci = (n: number): number => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));
export const sum = (numbers: number[]): number => numbers.reduce((a, b) => a + b, 0);
export const average = (numbers: number[]): number => sum(numbers) / numbers.length;
