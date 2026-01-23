// Component5
export interface Component5Props {
  id: string;
  label: string;
}

export const Component5 = ({id, label}: Component5Props) => (
  <div id={id}>{label}</div>
);
