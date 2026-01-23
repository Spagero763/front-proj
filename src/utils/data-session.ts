// session utilities
export const issession = (val: any): boolean => typeof val === 'object';
export const getsession = (): any => ({});
export const setsession = (val: any): void => {};
