// Component1
export interface Component1Props {
  id: string;
  label: string;
}

export const Component1 = ({id, label}: Component1Props) => (
  <div id={id}>{label}</div>
);
