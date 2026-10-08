import { apiClient } from "@/lib/api/api-client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiResponse } from "@/types";

export interface PaymentOrderPayload {
  orderId: string;
  amount: number;
  currency?: string;
}

export interface PaymentOrderResponse {
  paymentOrderId: string;
  amount: number;
  currency: string;
  provider: string;
  providerData: Record<string, unknown>;
}

/**
 * Payment provider abstraction.
 * The UI never directly calls Razorpay/Cashfree — it calls this service.
 * The backend decides which provider to use and returns provider-specific data.
 */
export const paymentApi = {
  createPaymentOrder: (payload: PaymentOrderPayload) =>
    apiClient.post<ApiResponse<PaymentOrderResponse>>(ENDPOINTS.paymentsCreate, payload),

  verifyPayment: (paymentData: Record<string, unknown>) =>
    apiClient.post<ApiResponse<{ verified: boolean; orderId: string }>>(
      `${process.env.NEXT_PUBLIC_API_URL}/payments/verify`,
      paymentData
    ),
};
