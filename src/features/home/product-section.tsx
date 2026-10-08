import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types";

interface ProductSectionProps {
  id: string;
  heading: string;
  subheading?: string;
  products: Product[];
  viewAllHref: string;
  viewAllLabel?: string;
  background?: "white" | "subtle";
}

export function ProductSection({
  id,
  heading,
  subheading,
  products,
  viewAllHref,
  viewAllLabel = "View all",
  background = "white",
}: ProductSectionProps) {
  const bg = background === "subtle" ? "bg-neutral-50" : "bg-white";

  return (
    <section aria-labelledby={id} className={`${bg} py-12 sm:py-16`}>
      <div className="container">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2
              id={id}
              className="text-2xl font-bold text-neutral-900 sm:text-3xl"
            >
              {heading}
            </h2>
            {subheading && (
              <p className="mt-1 text-sm text-neutral-500">{subheading}</p>
            )}
          </div>
          <Link
            href={viewAllHref}
            className="flex shrink-0 items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
          >
            {viewAllLabel} <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <ul
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4"
          role="list"
        >
          {products.length > 0 ? products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          )) : (
            <li className="col-span-full rounded-xl border border-dashed border-stone-300 px-6 py-12 text-center text-sm text-stone-500">New products will appear here soon.</li>
          )}
        </ul>
      </div>
    </section>
  );
}
