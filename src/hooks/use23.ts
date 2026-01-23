// use23 hook
import { useState, useCallback } from 'react';

export const use23 = (initialValue: any = null) => {
  const [state, setState] = useState(initialValue);
  const update = useCallback((newValue: any) => setState(newValue), []);
  return { state, update, setState };
};
