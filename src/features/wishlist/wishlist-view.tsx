"use client";

import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist-store";
import { ProductCard } from "@/components/product/product-card";
import { EmptyState } from "@/components/feedback/empty-state";
import { mockProducts } from "@/lib/mock";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";

export function WishlistView() {
  const { productIds } = useWishlistStore();
  const router = useRouter();

  // TODO: Replace with API call to GET /api/v1/wishlist
  const products = mockProducts.filter((p) => productIds.includes(p.id));

  if (products.length === 0) {
    return (
      <EmptyState
        icon={<Heart size={28} />}
        title="Your wishlist is empty"
        description="Save products you love to your wishlist."
        action={{ label: "Browse products", onClick: () => router.push(ROUTES.shop) }}
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
