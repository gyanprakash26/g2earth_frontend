import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({ title: "Shipping Policy", description: "G2Earth shipping policy and delivery information.", path: "/shipping-policy" });

export default function ShippingPolicyPage() {
  return (
    <div className="container py-10 sm:py-16">
      <div className="mx-auto max-w-3xl prose prose-neutral">
        <h1 className="text-3xl font-bold text-neutral-900">Shipping Policy</h1>
        <p className="mt-4 text-neutral-600">Last updated: January 2025</p>
        <div className="mt-6 space-y-6 text-neutral-600">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Delivery Timeframes</h2>
            <p className="mt-2">Standard delivery: 3–7 business days. Express delivery options may be available at checkout depending on your location.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Free Shipping</h2>
            <p className="mt-2">Free shipping is available on all orders above ₹499. Orders below ₹499 attract a nominal shipping fee calculated at checkout.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Shipping Partners</h2>
            <p className="mt-2">We ship via trusted logistics partners including Delhivery, BlueDart, and India Post depending on your location.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Order Tracking</h2>
            <p className="mt-2">Once your order is shipped, you will receive a tracking number via SMS and email. You can also track your order from My Account.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
