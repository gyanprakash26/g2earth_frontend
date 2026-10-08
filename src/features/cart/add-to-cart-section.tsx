"use client";

import { useState } from "react";
import { ShoppingCart, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { cn } from "@/lib/utils";
import type { Product, ProductVariant } from "@/types";

interface AddToCartSectionProps {
  product: Product;
}

export function AddToCartSection({ product }: AddToCartSectionProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  const { toggle, has } = useWishlistStore();
  const isWishlisted = has(product.id);

  const activeVariant = selectedVariant ?? product.variants[0];
  const isOutOfStock = (activeVariant?.stockStatus ?? product.stockStatus) === "out_of_stock";

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${activeVariant?.id ?? "default"}-${Date.now()}`,
      product,
      variant: activeVariant,
      quantity,
      unitPrice: activeVariant?.sellingPrice ?? product.sellingPrice,
      totalPrice: (activeVariant?.sellingPrice ?? product.sellingPrice) * quantity,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Variant selector */}
      {product.variants.length > 1 && (
        <div>
          <p className="mb-2 text-sm font-medium text-neutral-700">
            {product.attributes?.[0]?.name ?? "Size"}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                  variant.id === activeVariant?.id
                    ? "border-green-600 bg-green-50 text-green-700"
                    : "border-neutral-300 text-neutral-600 hover:border-neutral-400",
                  variant.stockStatus === "out_of_stock" && "opacity-40 cursor-not-allowed"
                )}
                disabled={variant.stockStatus === "out_of_stock"}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-neutral-700">Quantity</p>
        <div className="flex items-center rounded-lg border border-neutral-300">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-9 w-9 items-center justify-center text-neutral-600 hover:bg-neutral-50 rounded-l-lg"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="flex h-9 w-10 items-center justify-center text-sm font-medium text-neutral-900">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-9 w-9 items-center justify-center text-neutral-600 hover:bg-neutral-50 rounded-r-lg"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          fullWidth
          className="gap-2"
        >
          <ShoppingCart size={16} />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
        <Button variant="secondary" fullWidth className="gap-2">
          <Zap size={16} />
          Buy Now
        </Button>
      </div>

      <button
        onClick={() => toggle(product.id)}
        className="flex items-center justify-center gap-2 text-sm text-neutral-500 hover:text-red-500 transition-colors"
      >
        <Heart size={16} className={cn(isWishlisted && "fill-red-500 text-red-500")} />
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
}
