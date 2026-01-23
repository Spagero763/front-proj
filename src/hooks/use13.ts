// Custom hook 13
import { useState } from 'react';
export const use13 = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
