export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"
  | "return_requested"
  | "returned"
  | "refunded";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded" | "partially_refunded";

export type PaymentMethod = "razorpay" | "cashfree" | "cod" | "upi" | "card" | "netbanking";

export interface Address {
  id?: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isDefault?: boolean;
  label?: "home" | "work" | "other";
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productSlug: string;
  variantId?: string;
  variantName?: string;
  image?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  mrp: number;
  discount: number;
}

export interface Shipment {
  id: string;
  trackingNumber?: string;
  carrier?: string;
  status: string;
  estimatedDelivery?: string;
  trackingUrl?: string;
  events?: ShipmentEvent[];
}

export interface ShipmentEvent {
  status: string;
  description: string;
  location?: string;
  timestamp: string;
}

export interface Payment {
  id: string;
  method: PaymentMethod;
  status: PaymentStatus;
  amount: number;
  transactionId?: string;
  paidAt?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress?: Address;
  payment?: Payment;
  shipment?: Shipment;
  subtotal: number;
  discount: number;
  shippingFee: number;
  tax: number;
  total: number;
  couponCode?: string;
  couponDiscount?: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Return {
  id: string;
  orderId: string;
  orderNumber: string;
  items: OrderItem[];
  reason: string;
  status: "requested" | "approved" | "rejected" | "picked_up" | "completed";
  createdAt: string;
}

export interface Refund {
  id: string;
  orderId: string;
  amount: number;
  status: "pending" | "processed" | "failed";
  method: string;
  processedAt?: string;
  createdAt: string;
}
