"use client";

import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import { EmptyState } from "@/components/feedback/empty-state";
import { SearchBar } from "@/components/navigation/search-bar";
import { mockProducts } from "@/lib/mock";
import { Search } from "lucide-react";

// TODO: Replace with TanStack Query + productApi.search(query)

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const results = query
    ? mockProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.tags?.some((t) => t.includes(query.toLowerCase()))
      )
    : [];

  return (
    <div>
      <div className="mb-6 max-w-xl">
        <SearchBar autoFocus />
      </div>

      {!query ? (
        <EmptyState
          icon={<Search size={28} />}
          title="Search for products"
          description="Enter a product name, category, or keyword to find what you're looking for."
        />
      ) : results.length === 0 ? (
        <EmptyState
          icon={<Search size={28} />}
          title={`No results for "${query}"`}
          description="Try a different keyword or browse our categories."
        />
      ) : (
        <>
          <p className="mb-4 text-sm text-neutral-500">
            <span className="font-semibold text-neutral-900">{results.length}</span> results for &ldquo;{query}&rdquo;
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
