// Component12
export interface Component12Props {
  id: string;
  label: string;
}

export const Component12 = ({id, label}: Component12Props) => (
  <div id={id}>{label}</div>
);
