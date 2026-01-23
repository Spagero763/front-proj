// Error types
export interface AppErrorData {code: string; message: string; statusCode: number;}
export type ErrorHandler = (error: Error) => void;
