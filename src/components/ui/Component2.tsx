// Component2
export interface Component2Props {
  id: string;
  label: string;
}

export const Component2 = ({id, label}: Component2Props) => (
  <div id={id}>{label}</div>
);
