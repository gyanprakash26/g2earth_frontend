"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Price } from "@/components/common/price";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

function StockBadge({ status }: { status: Product["stockStatus"] }) {
  if (status === "in_stock") return null;
  const map = {
    out_of_stock: { label: "Out of stock", variant: "error" as const },
    low_stock: { label: "Only a few left", variant: "warning" as const },
    preorder: { label: "Pre-order", variant: "info" as const },
  };
  const config = map[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}

export function ProductCard({ product, onAddToCart, className }: ProductCardProps) {
  const { toggle, has } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);
  const isWishlisted = has(product.id);
  const primaryImage = product.images.find((img) => img.isPrimary) ?? product.images[0];

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md",
        className
      )}
    >
      {/* Wishlist button */}
      <button
        onClick={() => toggle(product.id)}
        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:bg-white"
        aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
      >
        <Heart
          size={16}
          className={cn(isWishlisted ? "fill-red-500 text-red-500" : "text-neutral-400")}
        />
      </button>

      {/* Image */}
      <Link href={ROUTES.product(product.slug)} className="block aspect-square overflow-hidden bg-neutral-50">
        {primaryImage ? (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-300">
            <ShoppingCart size={40} />
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        {product.brand && (
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
            {product.brand.name}
          </p>
        )}
        <Link href={ROUTES.product(product.slug)}>
          <h3 className="line-clamp-2 text-sm font-medium text-neutral-900 hover:text-green-700 transition-colors">
            {product.name}
          </h3>
        </Link>

        {product.rating !== undefined && (
          <Rating value={product.rating} count={product.reviewCount} />
        )}

        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <Price sellingPrice={product.sellingPrice} mrp={product.mrp} size="sm" />
          <StockBadge status={product.stockStatus} />
        </div>

        {product.stockStatus !== "out_of_stock" && (
          <button
            onClick={() => {
              const variant = product.variants[0];
              addItem({ id: `${product.id}-${variant?.id ?? "default"}`, product, variant, quantity: 1, unitPrice: product.sellingPrice, totalPrice: product.sellingPrice });
              onAddToCart?.(product);
              setAdded(true);
            }}
            className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-green-600 text-xs font-medium text-white transition-colors hover:bg-green-700 active:bg-green-800"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={14} aria-hidden="true" />
            {added ? "Added" : "Add to cart"}
          </button>
        )}
      </div>
    </article>
  );
}
