// Custom hook 11
import { useState } from 'react';
export const use11 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
