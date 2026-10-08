import { apiClient } from "@/lib/api/api-client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import type { Product, Category, Brand } from "@/types";
import type { ApiResponse, PaginatedResponse } from "@/types";

export interface ProductFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  sort?: string;
  page?: number;
  limit?: number;
  q?: string;
}

export const productApi = {
  getProducts: (filters?: ProductFilters) =>
    apiClient.get<PaginatedResponse<Product>>(ENDPOINTS.products, {
      params: filters as Record<string, string | number | boolean | undefined | null>,
    }),

  getProduct: (slug: string) =>
    apiClient.get<ApiResponse<Product>>(ENDPOINTS.product(slug)),

  getCategories: () =>
    apiClient.get<ApiResponse<Category[]>>(ENDPOINTS.categories),

  getCategory: (slug: string) =>
    apiClient.get<ApiResponse<Category>>(ENDPOINTS.category(slug)),

  getBrands: () =>
    apiClient.get<ApiResponse<Brand[]>>(ENDPOINTS.brands),

  search: (query: string, filters?: Omit<ProductFilters, "q">) =>
    apiClient.get<PaginatedResponse<Product>>(ENDPOINTS.search, {
      params: { q: query, ...filters },
    }),
};
