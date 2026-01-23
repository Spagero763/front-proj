// Custom hook 15
import { useState } from 'react';
export const use15 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
