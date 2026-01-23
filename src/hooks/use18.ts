// Custom hook 18
import { useState } from 'react';
export const use18 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
