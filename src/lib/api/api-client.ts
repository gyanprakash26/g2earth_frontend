import { AppApiError } from "./api-error";

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined | null>;
};

function buildUrl(url: string, params?: Record<string, string | number | boolean | undefined | null>): string {
  if (!params) return url;
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  }
  const qs = searchParams.toString();
  return qs ? `${url}?${qs}` : url;
}

async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const { body, params, headers, ...rest } = options;

  const finalUrl = buildUrl(url, params);

  const response = await fetch(finalUrl, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    credentials: "include", // Send HTTP-only cookies for auth
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    let errorData: { message?: string; code?: string; errors?: Record<string, string[]> } = {};
    try {
      errorData = await response.json();
    } catch {
      // ignore parse error
    }
    throw new AppApiError(
      errorData.message ?? `Request failed with status ${response.status}`,
      response.status,
      errorData.code,
      errorData.errors
    );
  }

  if (response.status === 204) return undefined as T;

  return response.json() as Promise<T>;
}

export const apiClient = {
  get: <T>(url: string, options?: Omit<RequestOptions, "method">) =>
    request<T>(url, { ...options, method: "GET" }),

  post: <T>(url: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) =>
    request<T>(url, { ...options, method: "POST", body }),

  put: <T>(url: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) =>
    request<T>(url, { ...options, method: "PUT", body }),

  patch: <T>(url: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) =>
    request<T>(url, { ...options, method: "PATCH", body }),

  delete: <T>(url: string, options?: Omit<RequestOptions, "method">) =>
    request<T>(url, { ...options, method: "DELETE" }),
};
