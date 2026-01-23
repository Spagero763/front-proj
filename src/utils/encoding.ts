// Encoding and decoding utilities
export const btoa = (str: string): string => Buffer.from(str, 'utf8').toString('base64');
export const atob = (str: string): string => Buffer.from(str, 'base64').toString('utf8');
export const encodeURI = (str: string): string => globalThis.encodeURI(str);
export const decodeURI = (str: string): string => globalThis.decodeURI(str);
export const encodeURIComponent = (str: string): string => globalThis.encodeURIComponent(str);
export const decodeURIComponent = (str: string): string => globalThis.decodeURIComponent(str);
