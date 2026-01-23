// Custom hook 4
import { useState } from 'react';
export const use04 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
