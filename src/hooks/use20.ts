// Custom hook 20
import { useState } from 'react';
export const use20 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
