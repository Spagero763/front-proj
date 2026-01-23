// Custom hook 9
import { useState } from 'react';
export const use09 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
