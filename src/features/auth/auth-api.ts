import { apiClient } from "@/lib/api/api-client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import type { Customer, Address } from "@/types";
import type { ApiResponse } from "@/types";

export const authApi = {
  login: (email: string, password: string) =>
    apiClient.post<ApiResponse<Customer>>(ENDPOINTS.authLogin, { email, password }),

  register: (name: string, email: string, phone: string, password: string) =>
    apiClient.post<ApiResponse<Customer>>(ENDPOINTS.authRegister, { name, email, phone, password }),

  sendOtp: (phone: string) =>
    apiClient.post<ApiResponse<{ message: string }>>(ENDPOINTS.authSendOtp, { phone }),

  verifyOtp: (phone: string, otp: string) =>
    apiClient.post<ApiResponse<Customer>>(ENDPOINTS.authVerifyOtp, { phone, otp }),

  logout: () =>
    apiClient.post<ApiResponse<{ message: string }>>(ENDPOINTS.authLogout),

  getMe: () =>
    apiClient.get<ApiResponse<Customer>>(ENDPOINTS.authMe),

  getAddresses: () =>
    apiClient.get<ApiResponse<Address[]>>(ENDPOINTS.customerAddresses),

  addAddress: (address: Omit<Address, "id">) =>
    apiClient.post<ApiResponse<Address>>(ENDPOINTS.customerAddresses, address),

  updateAddress: (id: string, address: Partial<Address>) =>
    apiClient.put<ApiResponse<Address>>(ENDPOINTS.customerAddress(id), address),

  deleteAddress: (id: string) =>
    apiClient.delete<ApiResponse<{ message: string }>>(ENDPOINTS.customerAddress(id)),
};
