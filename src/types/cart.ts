import type { Product, ProductVariant } from "./product";

export interface CartItem {
  id: string;
  product: Product;
  variant?: ProductVariant;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  isAvailable?: boolean;
  priceChanged?: boolean;
}

export interface Cart {
  id?: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  tax: number;
  total: number;
  couponCode?: string;
  couponDiscount?: number;
  itemCount: number;
}

export interface CouponValidation {
  valid: boolean;
  code: string;
  discount: number;
  discountType: "flat" | "percent";
  message?: string;
}
