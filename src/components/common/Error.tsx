// Error component
export interface ErrorProps {message: string;}
export const Error = ({message}: ErrorProps) => <div>{message}</div>;
