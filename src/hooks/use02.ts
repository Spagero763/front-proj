// Custom hook 2
import { useState } from 'react';
export const use02 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
