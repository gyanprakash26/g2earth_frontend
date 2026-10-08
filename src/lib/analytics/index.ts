/**
 * Analytics abstraction layer.
 * Never scatter analytics calls across components.
 * All tracking goes through this module.
 *
 * IMPORTANT: Do not fire any events before user consent is obtained.
 */

export type EcommerceEvent =
  | "view_item"
  | "view_item_list"
  | "search"
  | "add_to_cart"
  | "remove_from_cart"
  | "begin_checkout"
  | "add_payment_info"
  | "purchase"
  | "refund";

export interface TrackEventPayload {
  event: EcommerceEvent | string;
  data?: Record<string, unknown>;
}

let analyticsEnabled = false;

export function initAnalytics(hasConsent: boolean) {
  analyticsEnabled = hasConsent && process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
}

export function track({ event, data }: TrackEventPayload) {
  if (!analyticsEnabled) return;

  // TODO: Replace with real provider (GA4, GTM, Meta Pixel)
  if (process.env.NODE_ENV === "development") {
    console.debug("[Analytics]", event, data);
  }
}

export const analytics = {
  viewItem: (productId: string, productName: string, price: number) =>
    track({ event: "view_item", data: { productId, productName, price } }),

  viewItemList: (listName: string, items: { id: string; name: string }[]) =>
    track({ event: "view_item_list", data: { listName, items } }),

  search: (query: string) =>
    track({ event: "search", data: { search_term: query } }),

  addToCart: (productId: string, productName: string, price: number, quantity: number) =>
    track({ event: "add_to_cart", data: { productId, productName, price, quantity } }),

  removeFromCart: (productId: string) =>
    track({ event: "remove_from_cart", data: { productId } }),

  beginCheckout: (total: number) =>
    track({ event: "begin_checkout", data: { total } }),

  purchase: (orderId: string, total: number) =>
    track({ event: "purchase", data: { orderId, total } }),
};
