import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

import { HeroSection } from "@/features/home/hero-section";
import { TrustBar } from "@/features/home/trust-bar";
import { WhySection } from "@/features/home/why-section";
import { FaqPreviewSection } from "@/features/home/faq-preview-section";
import { NewsletterSection } from "@/features/home/newsletter-section";
import { BrandSection } from "@/features/home/brand-section";

export const metadata: Metadata = buildMetadata({
  title: SITE_CONFIG.tagline,
  description: SITE_CONFIG.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      <WhySection />
      <BrandSection />
      <FaqPreviewSection />
      <NewsletterSection />
    </>
  );
}
