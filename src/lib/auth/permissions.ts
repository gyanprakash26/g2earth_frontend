/**
 * Auth utilities — frontend side only.
 *
 * Authentication uses HTTP-only cookies set by the backend.
 * The frontend never stores tokens in localStorage.
 *
 * Flow:
 *   Customer: POST /api/v1/auth/login → backend sets httpOnly cookie
 *   Admin:    POST /api/v1/auth/admin/login → backend sets separate httpOnly cookie
 *
 * Route protection is enforced via Next.js middleware (see middleware.ts).
 * Frontend permission checks are UX only — backend is authoritative.
 */

import type { AdminRole } from "@/types";

export const ADMIN_ROLES: AdminRole[] = [
  "SUPER_ADMIN",
  "PRODUCT_MANAGER",
  "ORDER_MANAGER",
  "CUSTOMER_SUPPORT",
  "INVENTORY_MANAGER",
];

export const ROLE_PERMISSIONS: Record<AdminRole, string[]> = {
  SUPER_ADMIN: ["*"],
  PRODUCT_MANAGER: ["products:read", "products:write", "categories:read", "categories:write", "brands:read", "brands:write", "inventory:read", "inventory:write"],
  ORDER_MANAGER: ["orders:read", "orders:write", "returns:read", "returns:write", "refunds:read", "refunds:write"],
  CUSTOMER_SUPPORT: ["orders:read", "customers:read", "reviews:read"],
  INVENTORY_MANAGER: ["inventory:read", "inventory:write", "products:read"],
};

export function hasPermission(userPermissions: string[], required: string): boolean {
  if (userPermissions.includes("*")) return true;
  return userPermissions.includes(required);
}
