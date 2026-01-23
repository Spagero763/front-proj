// URL and query string utilities
export const parseUrl = (urlString: string) => new URL(urlString);
export const getQueryParam = (param: string): string | null => {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get(param);
};
export const buildQueryString = (params: Record<string, any>): string => {
  return new URLSearchParams(Object.entries(params).filter(([_, v]) => v != null).map(([k, v]) => [k, String(v)])).toString();
};
export const addQueryParams = (url: string, params: Record<string, any>): string => {
  const u = new URL(url);
  Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, String(v)));
  return u.toString();
};
