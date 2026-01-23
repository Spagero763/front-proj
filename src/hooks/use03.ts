// Custom hook 3
import { useState } from 'react';
export const use03 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
