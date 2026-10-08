import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO_CONFIG } from "@/lib/mock/mock-homepage";
import { FadeIn } from "@/lib/utils/animation";

const CASHEWS = [
  ["cashew--one", "cashew--float"],
  ["cashew--two", "cashew--drop"],
  ["cashew--three", "cashew--drift"],
  ["cashew--four", "cashew--float"],
  ["cashew--five", "cashew--drop"],
  // ["cashew--six", "cashew--drift"],
  // ["cashew--seven", "cashew--float"],
  // ["cashew--eight", "cashew--drop"],
  // ["cashew--nine", "cashew--drift"],
] as const;

const LEAVES = [
  ["leaf--one", "cashew--float", "/images/hero/leaf-orange.svg"],
  ["leaf--two", "cashew--float", "/images/hero/leaf-orange.svg"],
  ["leaf--three", "cashew--float", "/images/hero/leaf-orange.svg"],
  ["leaf--four", "cashew--drift", "/images/hero/leaf-green.svg"],
  ["leaf--five", "cashew--drift", "/images/hero/leaf-green.svg"],
  ["leaf--six", "cashew--drop", "/images/hero/leaf.svg"],
  ["leaf--seven", "cashew--drop", "/images/hero/leaf.svg"],
  ["leaf--eight", "cashew--drop", "/images/hero/leaf.svg"],
] as const;

function CashewScene() {
  return (
    <div className="cashew-scene" aria-hidden="true">
      <div className="cashew-scene__glow" />
      <div className="cashew-scene__surface" />
      <div className="cashew-scene__shadow cashew-scene__shadow--large" />
      {CASHEWS.map(([position, motion]) => (
        <span key={position} className={`cashew ${position} ${motion}`}>
          <Image src="/images/hero/leaf.svg" alt="" fill sizes="160px" />
        </span>
      ))}
      {LEAVES.map(([position, motion, source]) => (
        <span key={position} className={`cashew-leaf ${position} ${motion}`}>
          <Image src={source} alt="" fill sizes="180px" />
        </span>
      ))}
      <div className="cashew-scene__shadow cashew-scene__shadow--small" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to G2Earth"
      className="hero relative overflow-hidden"
    >
      <div className="container relative z-10 py-14 sm:py-20 lg:py-24">
        <div className="grid min-h-[32rem] grid-cols-1 items-center lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <FadeIn>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-800">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-amber-500"
              />
                {HERO_CONFIG.eyebrow}
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 sm:text-5xl lg:text-[4.25rem]">
                {HERO_CONFIG.heading} <span className="text-green-700">{HERO_CONFIG.headingAccent}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600 sm:text-lg">
                {HERO_CONFIG.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={HERO_CONFIG.primaryCta.href} className="inline-flex items-center gap-2 rounded-lg bg-green-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
                  {HERO_CONFIG.primaryCta.label} <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href={HERO_CONFIG.secondaryCta.href} className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-white">
                  {HERO_CONFIG.secondaryCta.label}
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="relative lg:-mr-16">
            <CashewScene />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
