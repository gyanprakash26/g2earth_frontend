import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({ title: "Cancellation Policy", description: "G2Earth order cancellation policy.", path: "/cancellation" });
export default function CancellationPage() {
  return (
    <div className="container py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-neutral-900">Cancellation Policy</h1>
        <p className="mt-4 text-sm text-neutral-400">Last updated: January 2025</p>
        <div className="mt-6 space-y-4 text-neutral-600">
          <p>Orders can be cancelled before they are dispatched. Once an order is shipped, it cannot be cancelled — you may initiate a return after delivery.</p>
          <p>To cancel an order, go to My Account &gt; Orders and select &ldquo;Cancel Order&rdquo;. Cancellations are processed immediately and refunds are issued within 5–7 business days.</p>
          <p>G2Earth reserves the right to cancel orders in cases of pricing errors, stock unavailability, or suspected fraudulent activity. In such cases, a full refund will be issued.</p>
        </div>
      </div>
    </div>
  );
}
