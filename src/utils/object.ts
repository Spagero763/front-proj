// Object manipulation utilities

export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result as Omit<T, K>;
};

export const merge = <T extends object>(
  target: T,
  ...sources: Partial<T>[]
): T => {
  const result = { ...target };
  for (const source of sources) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = source[key] as T[Extract<keyof T, string>];
      }
    }
  }
  return result;
};

export const deepMerge = <T extends object>(
  target: T,
  ...sources: Partial<T>[]
): T => {
  if (sources.length === 0) return target;
  
  const source = sources[0];
  const result = { ...target };
  
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const sourceValue = source[key];
      const targetValue = result[key];
      
      if (
        sourceValue &&
        typeof sourceValue === 'object' &&
        !Array.isArray(sourceValue) &&
        targetValue &&
        typeof targetValue === 'object' &&
        !Array.isArray(targetValue)
      ) {
        result[key] = deepMerge(
          targetValue as any,
          sourceValue as any
        ) as T[Extract<keyof T, string>];
      } else {
        result[key] = sourceValue as T[Extract<keyof T, string>];
      }
    }
  }
  
  return deepMerge(result, ...sources.slice(1));
};

export const keys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

export const values = <T extends object>(obj: T): T[keyof T][] => {
  return Object.values(obj);
};

export const entries = <T extends object>(obj: T): [keyof T, T[keyof T]][] => {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
};

export const invert = <T extends object>(
  obj: T
): Record<string, keyof T> => {
  const result: Record<string, keyof T> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = String(obj[key]);
      result[value] = key as keyof T;
    }
  }
  return result;
};

export const mapValues = <T extends object, R>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => R
): Record<keyof T, R> => {
  const result = {} as Record<keyof T, R>;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key as keyof T] = fn(obj[key as keyof T], key as keyof T);
    }
  }
  return result;
};

export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export const isEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;
  if (obj1 == null || obj2 == null) return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    
    const val1 = obj1[key];
    const val2 = obj2[key];
    
    if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!isEqual(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }
  
  return true;
};
