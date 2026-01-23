// Input component
export interface InputProps {placeholder?: string; value: string; onChange: (v: string) => void;}
export const Input = ({placeholder, value, onChange}: InputProps) => (
  <input placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />
);
