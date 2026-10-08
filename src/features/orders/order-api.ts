import { apiClient } from "@/lib/api/api-client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import type { Order, Address } from "@/types";
import type { ApiResponse, PaginatedResponse } from "@/types";

export interface CheckoutPayload {
  addressId?: string;
  address?: Address;
  paymentMethod: string;
  couponCode?: string;
}

export const orderApi = {
  getOrders: (page = 1, limit = 10) =>
    apiClient.get<PaginatedResponse<Order>>(ENDPOINTS.orders, { params: { page, limit } }),

  getOrder: (orderNumber: string) =>
    apiClient.get<ApiResponse<Order>>(ENDPOINTS.order(orderNumber)),

  createOrder: (payload: CheckoutPayload) =>
    apiClient.post<ApiResponse<Order>>(ENDPOINTS.checkout, payload),

  cancelOrder: (orderNumber: string, reason: string) =>
    apiClient.post<ApiResponse<Order>>(`${ENDPOINTS.order(orderNumber)}/cancel`, { reason }),

  requestReturn: (orderNumber: string, reason: string, itemIds: string[]) =>
    apiClient.post<ApiResponse<Order>>(`${ENDPOINTS.order(orderNumber)}/return`, { reason, itemIds }),
};
