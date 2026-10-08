import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DISCOVERY_CONFIG } from "@/lib/mock/mock-homepage";

export function PromoBanner() {
  return (
    <section aria-labelledby="discovery-heading" className="py-12 sm:py-16">
      <div className="container">
        <div className="grid overflow-hidden rounded-2xl bg-stone-900 text-white lg:grid-cols-2">
          <div className="relative min-h-64">
            <Image src={DISCOVERY_CONFIG.image.src} alt={DISCOVERY_CONFIG.image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{DISCOVERY_CONFIG.eyebrow}</p>
            <h2 id="discovery-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{DISCOVERY_CONFIG.heading}</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-stone-300">{DISCOVERY_CONFIG.description}</p>
            <Link href={DISCOVERY_CONFIG.cta.href} className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white hover:text-amber-200">
              {DISCOVERY_CONFIG.cta.label} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
