// Component20
export interface Component20Props {
  id: string;
  label: string;
}

export const Component20 = ({id, label}: Component20Props) => (
  <div id={id}>{label}</div>
);
