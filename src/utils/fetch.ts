// HTTP client utilities

export const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
  timeoutMs: number = 30000
) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

export const fetchJson = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetchWithTimeout(url, options);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

export const postJson = async <T>(url: string, data: any): Promise<T> => {
  return fetchJson<T>(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const putJson = async <T>(url: string, data: any): Promise<T> => {
  return fetchJson<T>(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const deleteJson = async <T>(url: string): Promise<T> => {
  return fetchJson<T>(url, { method: 'DELETE' });
};
