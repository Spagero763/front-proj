// Custom hook 10
import { useState } from 'react';
export const use10 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
