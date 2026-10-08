import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({ title: "Return & Refund Policy", description: "G2Earth return and refund policy.", path: "/return-refund" });

export default function ReturnRefundPage() {
  return (
    <div className="container py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-neutral-900">Return &amp; Refund Policy</h1>
        <p className="mt-4 text-sm text-neutral-400">Last updated: January 2025</p>
        <div className="mt-6 space-y-6 text-neutral-600">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Return Window</h2>
            <p className="mt-2">You may return most items within 7 days of delivery. Items must be unused, unopened, and in original packaging.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Non-Returnable Items</h2>
            <p className="mt-2">Opened food products, perishable items, and products marked as non-returnable at the time of purchase cannot be returned.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Refund Process</h2>
            <p className="mt-2">Approved refunds are processed within 5–7 business days to the original payment method. COD refunds are processed via bank transfer.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">How to Initiate a Return</h2>
            <p className="mt-2">Go to My Account &gt; Orders, select the order, and click &ldquo;Request Return&rdquo;. Our team will review and respond within 24 hours.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
