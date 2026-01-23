// Custom hook 5
import { useState } from 'react';
export const use05 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
