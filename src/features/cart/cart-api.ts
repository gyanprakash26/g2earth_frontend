import { apiClient } from "@/lib/api/api-client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import type { Cart, CouponValidation } from "@/types";
import type { ApiResponse } from "@/types";

export const cartApi = {
  getCart: () =>
    apiClient.get<ApiResponse<Cart>>(ENDPOINTS.cart),

  addItem: (productId: string, variantId?: string, quantity = 1) =>
    apiClient.post<ApiResponse<Cart>>(ENDPOINTS.cartItems, { productId, variantId, quantity }),

  updateItem: (itemId: string, quantity: number) =>
    apiClient.patch<ApiResponse<Cart>>(ENDPOINTS.cartItem(itemId), { quantity }),

  removeItem: (itemId: string) =>
    apiClient.delete<ApiResponse<Cart>>(ENDPOINTS.cartItem(itemId)),

  applyCoupon: (code: string) =>
    apiClient.post<ApiResponse<CouponValidation>>(`${ENDPOINTS.cart}/coupon`, { code }),

  removeCoupon: () =>
    apiClient.delete<ApiResponse<Cart>>(`${ENDPOINTS.cart}/coupon`),
};
