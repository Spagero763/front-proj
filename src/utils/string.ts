// String manipulation utilities

export const capitalize = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
};

export const truncateString = (str: string, maxLength: number, suffix = '...'): string => {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength - suffix.length) + suffix;
};

export const truncateAddress = (address: string, startChars = 6, endChars = 4): string => {
  if (!address || address.length < startChars + endChars) return address;
  return `${address.substring(0, startChars)}...${address.substring(address.length - endChars)}`;
};

export const removeLeadingZeros = (str: string): string => {
  return str.replace(/^0+/, '') || '0';
};

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

export const kebabToCamel = (str: string): string => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

export const joinWithAnd = (items: string[], separator = ', '): string => {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  const lastItem = items[items.length - 1];
  const otherItems = items.slice(0, -1).join(separator);
  return `${otherItems} and ${lastItem}`;
};
