"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Cart, CartItem } from "@/types";

interface CartState {
  cart: Cart;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  // Optimistic local updates — backend is authoritative on price/stock
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  setCart: (cart: Cart) => void;
}

const emptyCart: Cart = {
  items: [],
  subtotal: 0,
  discount: 0,
  shippingFee: 0,
  tax: 0,
  total: 0,
  itemCount: 0,
};

function recalculate(items: CartItem[]): Pick<Cart, "subtotal" | "total" | "itemCount"> {
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, total: subtotal, itemCount };
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: emptyCart,
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      setCart: (cart) => set({ cart }),

      addItem: (item) =>
        set((state) => {
          const existing = state.cart.items.find(
            (i) => i.product.id === item.product.id && i.variant?.id === item.variant?.id
          );
          let items: CartItem[];
          if (existing) {
            items = state.cart.items.map((i) =>
              i.id === existing.id
                ? { ...i, quantity: i.quantity + item.quantity, totalPrice: (i.quantity + item.quantity) * i.unitPrice }
                : i
            );
          } else {
            items = [...state.cart.items, item];
          }
          return { cart: { ...state.cart, items, ...recalculate(items) } };
        }),

      removeItem: (itemId) =>
        set((state) => {
          const items = state.cart.items.filter((i) => i.id !== itemId);
          return { cart: { ...state.cart, items, ...recalculate(items) } };
        }),

      updateQuantity: (itemId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            const items = state.cart.items.filter((i) => i.id !== itemId);
            return { cart: { ...state.cart, items, ...recalculate(items) } };
          }
          const items = state.cart.items.map((i) =>
            i.id === itemId ? { ...i, quantity, totalPrice: quantity * i.unitPrice } : i
          );
          return { cart: { ...state.cart, items, ...recalculate(items) } };
        }),

      clearCart: () => set({ cart: emptyCart }),
    }),
    { name: "g2earth-cart" }
  )
);
