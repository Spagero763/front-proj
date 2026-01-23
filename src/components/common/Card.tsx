// Card component
export interface CardProps {title: string; children: React.ReactNode;}
export const Card = ({title, children}: CardProps) => (
  <div><h2>{title}</h2><div>{children}</div></div>
);
