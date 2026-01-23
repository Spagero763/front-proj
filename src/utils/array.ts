// Array manipulation utilities

export const unique = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

export const uniqueBy = <T, K>(arr: T[], key: (item: T) => K): T[] => {
  const seen = new Set<K>();
  const result: T[] = [];
  
  for (const item of arr) {
    const k = key(item);
    if (!seen.has(k)) {
      seen.add(k);
      result.push(item);
    }
  }
  
  return result;
};

export const flatten = <T>(arr: (T | T[])[]): T[] => {
  return arr.reduce<T[]>((acc, val) => {
    return acc.concat(Array.isArray(val) ? val : [val]);
  }, []);
};

export const flattenDeep = <T>(arr: any[]): T[] => {
  return arr.reduce<T[]>((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenDeep(val) : [val]);
  }, []);
};

export const chunk = <T>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const shuffle = <T>(arr: T[]): T[] => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const sample = <T>(arr: T[]): T | undefined => {
  return arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : undefined;
};

export const sampleSize = <T>(arr: T[], size: number): T[] => {
  const shuffled = shuffle(arr);
  return shuffled.slice(0, size);
};

export const partition = <T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] => {
  const trueArr: T[] = [];
  const falseArr: T[] = [];
  
  for (const item of arr) {
    if (predicate(item)) {
      trueArr.push(item);
    } else {
      falseArr.push(item);
    }
  }
  
  return [trueArr, falseArr];
};

export const groupBy = <T, K extends string | number | symbol>(
  arr: T[],
  key: (item: T) => K
): Record<K, T[]> => {
  const result = {} as Record<K, T[]>;
  
  for (const item of arr) {
    const k = key(item);
    if (!result[k]) {
      result[k] = [];
    }
    result[k].push(item);
  }
  
  return result;
};

export const indexBy = <T, K extends string | number | symbol>(
  arr: T[],
  key: (item: T) => K
): Record<K, T> => {
  const result = {} as Record<K, T>;
  
  for (const item of arr) {
    result[key(item)] = item;
  }
  
  return result;
};

export const range = (start: number, end: number, step = 1): number[] => {
  const result: number[] = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
};

export const zip = <T extends any[][]>(...arrays: T): any[][] => {
  if (arrays.length === 0) return [];
  const length = Math.min(...arrays.map(arr => arr.length));
  
  const result: any[][] = [];
  for (let i = 0; i < length; i++) {
    result.push(arrays.map(arr => arr[i]));
  }
  
  return result;
};
