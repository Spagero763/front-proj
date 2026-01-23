// Custom hook 12
import { useState } from 'react';
export const use12 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
