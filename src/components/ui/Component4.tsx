// Component4
export interface Component4Props {
  id: string;
  label: string;
}

export const Component4 = ({id, label}: Component4Props) => (
  <div id={id}>{label}</div>
);
