export type CustomerRole = "customer";
export type AdminRole = "SUPER_ADMIN" | "PRODUCT_MANAGER" | "ORDER_MANAGER" | "CUSTOMER_SUPPORT" | "INVENTORY_MANAGER";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  role: CustomerRole;
  createdAt: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  permissions: string[];
  avatar?: string;
  lastLogin?: string;
}

export interface AuthSession {
  user: Customer | AdminUser;
  accessToken?: string; // Only if not using HTTP-only cookies
  expiresAt?: string;
}
