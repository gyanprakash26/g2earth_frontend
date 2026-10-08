const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

export const ENDPOINTS = {
  // Products
  products: `${BASE_URL}/products`,
  product: (slug: string) => `${BASE_URL}/products/${slug}`,
  // Categories
  categories: `${BASE_URL}/categories`,
  category: (slug: string) => `${BASE_URL}/categories/${slug}`,
  // Brands
  brands: `${BASE_URL}/brands`,
  brand: (slug: string) => `${BASE_URL}/brands/${slug}`,
  // Search
  search: `${BASE_URL}/search`,
  // Auth
  authLogin: `${BASE_URL}/auth/login`,
  authRegister: `${BASE_URL}/auth/register`,
  authSendOtp: `${BASE_URL}/auth/send-otp`,
  authVerifyOtp: `${BASE_URL}/auth/verify-otp`,
  authLogout: `${BASE_URL}/auth/logout`,
  authMe: `${BASE_URL}/auth/me`,
  // Cart
  cart: `${BASE_URL}/cart`,
  cartItems: `${BASE_URL}/cart/items`,
  cartItem: (id: string) => `${BASE_URL}/cart/items/${id}`,
  // Checkout
  checkout: `${BASE_URL}/checkout`,
  // Orders
  orders: `${BASE_URL}/orders`,
  order: (orderNumber: string) => `${BASE_URL}/orders/${orderNumber}`,
  // Payments
  paymentsCreate: `${BASE_URL}/payments/create`,
  // Customer
  customerProfile: `${BASE_URL}/customer/profile`,
  customerAddresses: `${BASE_URL}/customer/addresses`,
  customerAddress: (id: string) => `${BASE_URL}/customer/addresses/${id}`,
  // Wishlist
  wishlist: `${BASE_URL}/wishlist`,
  wishlistItem: (productId: string) => `${BASE_URL}/wishlist/${productId}`,
  // Reviews
  productReviews: (productId: string) => `${BASE_URL}/products/${productId}/reviews`,
  // Admin
  adminProducts: `${BASE_URL}/admin/products`,
  adminProduct: (id: string) => `${BASE_URL}/admin/products/${id}`,
  adminCategories: `${BASE_URL}/admin/categories`,
  adminOrders: `${BASE_URL}/admin/orders`,
  adminCustomers: `${BASE_URL}/admin/customers`,
  adminDashboard: `${BASE_URL}/admin/dashboard`,
  adminCoupons: `${BASE_URL}/admin/coupons`,
  adminInventory: `${BASE_URL}/admin/inventory`,
} as const;
