// Component7
export interface Component7Props {
  id: string;
  label: string;
}

export const Component7 = ({id, label}: Component7Props) => (
  <div id={id}>{label}</div>
);
