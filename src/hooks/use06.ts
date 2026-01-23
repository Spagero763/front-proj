// Custom hook 6
import { useState } from 'react';
export const use06 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
