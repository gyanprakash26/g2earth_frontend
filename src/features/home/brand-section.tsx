import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { FadeIn } from "@/lib/utils/animation";

export function BrandSection() {
  return (
    <section aria-labelledby="brand-heading" className="border-y border-stone-200 bg-[#f3f5ed] py-14 sm:py-20">
      <FadeIn className="container">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-green-800">
              <Compass size={18} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">The G2Earth point of view</span>
            </div>
            <h2 id="brand-heading" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">Commerce that keeps everyday life moving.</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-stone-600">G2Earth is building a modern shopping experience where discovering products, comparing options and placing an order feels simple.</p>
          </div>
          <Link href={ROUTES.about} className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-green-800 px-5 py-3 text-sm font-semibold text-green-900 transition-colors hover:bg-green-800 hover:text-white">About G2Earth <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </FadeIn>
    </section>
  );
}