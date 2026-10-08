export const SITE_CONFIG = {
  name: "G2Earth",
  legalName: "G2Earth Private Limited",
  tagline: "Quality You Can Trust",
  description:
    "G2Earth offers premium quality products delivered to your doorstep. Shop dry fruits, consumer goods, electronics, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://g2earth.com",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "https://api.g2earth.com/api/v1",
  email: "support@g2earth.com",
  phone: "+91-XXXXXXXXXX",
  address: "India",
  social: {
    instagram: "https://instagram.com/g2earth",
    facebook: "https://facebook.com/g2earth",
    twitter: "https://twitter.com/g2earth",
    youtube: "https://youtube.com/@g2earth",
  },
  domains: {
    primary: "https://g2earth.com",
    secondary: "https://g2earth.in",
  },
} as const;

export const PAGINATION_DEFAULTS = {
  page: 1,
  limit: 24,
} as const;

export const SORT_OPTIONS = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest First", value: "newest" },
  { label: "Best Rating", value: "rating-desc" },
  { label: "Most Popular", value: "popularity-desc" },
] as const;

export const ORDER_STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  processing: "Processing",
  shipped: "Shipped",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
  return_requested: "Return Requested",
  returned: "Returned",
  refunded: "Refunded",
};

export const PAYMENT_METHOD_LABELS: Record<string, string> = {
  razorpay: "Razorpay",
  cashfree: "Cashfree",
  cod: "Cash on Delivery",
  upi: "UPI",
  card: "Card",
  netbanking: "Net Banking",
};

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
] as const;
