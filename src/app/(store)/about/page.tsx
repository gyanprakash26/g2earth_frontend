import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({ title: "About Us", description: `Learn about ${SITE_CONFIG.name} — our story, mission, and values.`, path: "/about" });

export default function AboutPage() {
  return (
    <div className="container py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">About G2Earth</h1>
        <p className="mt-4 text-lg text-neutral-600">
          G2Earth Private Limited is an Indian e-commerce company committed to bringing you the highest quality products at fair, transparent prices.
        </p>
        <div className="mt-8 space-y-6 text-neutral-600">
          <p>We started with a simple belief: everyone deserves access to premium quality products without compromise. From our first category — dry fruits and nuts — we are building a platform that will grow to serve all your everyday needs.</p>
          <p>Every product on G2Earth is carefully sourced, quality-checked, and delivered with care. We work directly with trusted suppliers and farms to ensure freshness, authenticity, and value.</p>
          <p>Our mission is to be India&apos;s most trusted online store — not just for what we sell, but for how we do business: transparently, responsibly, and with genuine care for our customers.</p>
        </div>
      </div>
    </div>
  );
}
