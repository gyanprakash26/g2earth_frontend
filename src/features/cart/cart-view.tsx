"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/common/price";
import { formatPrice } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import { useRouter } from "next/navigation";

export function CartView() {
  const { cart, removeItem, updateQuantity } = useCartStore();
  const router = useRouter();

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ShoppingBag size={48} className="text-neutral-300 mb-4" />
        <h2 className="text-lg font-semibold text-neutral-900">Your cart is empty</h2>
        <p className="mt-1 text-sm text-neutral-500">Add some products to get started.</p>
        <Button className="mt-6" onClick={() => router.push(ROUTES.shop)}>Browse products</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Items */}
      <div className="lg:col-span-2 space-y-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
              {item.product.images[0] && (
                <Image
                  src={item.product.images[0].url}
                  alt={item.product.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1 min-w-0">
              <Link href={ROUTES.product(item.product.slug)} className="text-sm font-medium text-neutral-900 hover:text-green-700 line-clamp-2">
                {item.product.name}
              </Link>
              {item.variant && <p className="text-xs text-neutral-400">{item.variant.name}</p>}
              <Price sellingPrice={item.unitPrice} size="sm" />
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center rounded-lg border border-neutral-300">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="flex h-7 w-7 items-center justify-center text-neutral-600 hover:bg-neutral-50 rounded-l-lg text-sm" aria-label="Decrease">−</button>
                  <span className="flex h-7 w-8 items-center justify-center text-sm font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="flex h-7 w-7 items-center justify-center text-neutral-600 hover:bg-neutral-50 rounded-r-lg text-sm" aria-label="Increase">+</button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-neutral-900">{formatPrice(item.totalPrice)}</span>
                  <button onClick={() => removeItem(item.id)} className="text-neutral-400 hover:text-red-500 transition-colors" aria-label={`Remove ${item.product.name}`}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="lg:col-span-1">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 sticky top-24">
          <h2 className="mb-4 text-base font-semibold text-neutral-900">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-neutral-600">
              <span>Subtotal ({cart.itemCount} items)</span>
              <span>{formatPrice(cart.subtotal)}</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Shipping</span>
              <span className="text-green-600">{cart.shippingFee === 0 ? "Free" : formatPrice(cart.shippingFee)}</span>
            </div>
            {cart.couponDiscount && cart.couponDiscount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Coupon discount</span>
                <span>−{formatPrice(cart.couponDiscount)}</span>
              </div>
            )}
            <div className="border-t border-neutral-100 pt-2 flex justify-between font-semibold text-neutral-900">
              <span>Total</span>
              <span>{formatPrice(cart.total)}</span>
            </div>
          </div>
          <p className="mt-2 text-xs text-neutral-400">* Final price calculated at checkout. Backend is authoritative.</p>
          <Button fullWidth className="mt-4" onClick={() => router.push(ROUTES.checkout)}>
            Proceed to Checkout
          </Button>
          <Link href={ROUTES.shop} className="mt-3 block text-center text-sm text-neutral-500 hover:text-green-700">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
