import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { mockCategories } from "@/lib/mock";
import { ROUTES } from "@/lib/constants";
import { FadeIn } from "@/lib/utils/animation";

export function CategorySection() {
  const featured = mockCategories.filter((c) => c.isFeatured);

  return (
    <section aria-labelledby="categories-heading" className="py-12 sm:py-16">
      <div className="container">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2
              id="categories-heading"
              className="text-2xl font-bold text-neutral-900 sm:text-3xl"
            >
              Shop by Category
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Explore our growing range of product categories
            </p>
          </div>
          <Link
            href={ROUTES.shop}
            className="flex shrink-0 items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
          >
            View all <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <ul
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4"
          role="list"
        >
          {featured.map((category, index) => (
            <li key={category.id}>
              <Link
                href={ROUTES.category(category.slug)}
                className="group relative flex aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                aria-label={`${category.name}${category.productCount ? ` — ${category.productCount} products` : ""}`}
              >
                {category.image && (
                  <Image
                    src={category.image.url}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 2}
                  />
                )}
                {/* Gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                />
                <div className="absolute bottom-0 left-0 p-3">
                  <p className="text-sm font-semibold leading-tight text-white">
                    {category.name}
                  </p>
                  {category.productCount !== undefined && (
                    <p className="mt-0.5 text-xs text-white/70">
                      {category.productCount} products
                    </p>
                  )}
                  <ArrowRight size={15} aria-hidden="true" className="mt-2 text-white transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
