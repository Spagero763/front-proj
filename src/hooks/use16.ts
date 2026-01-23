// Custom hook 16
import { useState } from 'react';
export const use16 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
