// Component6
export interface Component6Props {
  id: string;
  label: string;
}

export const Component6 = ({id, label}: Component6Props) => (
  <div id={id}>{label}</div>
);
