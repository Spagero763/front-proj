// Custom hook 7
import { useState } from 'react';
export const use07 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
