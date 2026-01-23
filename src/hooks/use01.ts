// Custom hook 1
import { useState } from 'react';
export const use01 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
