// Custom hook 8
import { useState } from 'react';
export const use08 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
