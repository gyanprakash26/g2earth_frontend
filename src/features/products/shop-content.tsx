"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { ProductCard } from "@/components/product/product-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Pagination } from "@/components/ui/pagination";
import { ProductGridSkeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/feedback/empty-state";
import { SORT_OPTIONS } from "@/lib/constants";
import { mockProducts } from "@/lib/mock";
import { SlidersHorizontal } from "lucide-react";

// TODO: Replace mockProducts with TanStack Query + productApi.getProducts(filters)

export function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sort = searchParams.get("sort") ?? "relevance";
  const page = Number(searchParams.get("page") ?? 1);

  const setParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      if (key !== "page") params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  // Mock: use all products (backend will handle real filtering/pagination)
  const products = mockProducts;
  const totalPages = 1;

  return (
    <>
      <Breadcrumb items={[{ label: "Shop" }]} className="mb-4" />

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Filters sidebar — architecture ready, filters connect to URL params */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal size={16} className="text-neutral-500" />
              <h2 className="text-sm font-semibold text-neutral-900">Filters</h2>
            </div>
            {/* TODO: Connect filter groups to URL params */}
            <p className="text-xs text-neutral-400">Filters connect to backend via URL params: /shop?category=&minPrice=&maxPrice=&brand=</p>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              <span className="font-semibold text-neutral-900">{products.length}</span> products
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-sm text-neutral-500 whitespace-nowrap">Sort by</label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setParam("sort", e.target.value)}
                className="h-9 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-700 focus:border-green-600 focus:outline-none"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {products.length === 0 ? (
            <EmptyState title="No products found" description="Try adjusting your filters." />
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4 sm:gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={(p) => setParam("page", String(p))}
              className="mt-8"
            />
          )}
        </div>
      </div>
    </>
  );
}

export { ProductGridSkeleton as ShopSkeleton };
