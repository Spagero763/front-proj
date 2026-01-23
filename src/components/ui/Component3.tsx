// Component3
export interface Component3Props {
  id: string;
  label: string;
}

export const Component3 = ({id, label}: Component3Props) => (
  <div id={id}>{label}</div>
);
