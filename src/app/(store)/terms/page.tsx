import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({ title: "Terms & Conditions", description: "G2Earth terms and conditions.", path: "/terms" });
export default function TermsPage() {
  return (
    <div className="container py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-neutral-900">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-neutral-400">Last updated: January 2025</p>
        <div className="mt-6 space-y-6 text-neutral-600">
          <section><h2 className="text-xl font-semibold text-neutral-900">Acceptance of Terms</h2><p className="mt-2">By using G2Earth, you agree to these terms. If you do not agree, please do not use our services.</p></section>
          <section><h2 className="text-xl font-semibold text-neutral-900">Use of the Platform</h2><p className="mt-2">G2Earth is intended for personal, non-commercial use. You must not misuse our platform, attempt to gain unauthorised access, or engage in fraudulent activity.</p></section>
          <section><h2 className="text-xl font-semibold text-neutral-900">Pricing</h2><p className="mt-2">All prices are in Indian Rupees (INR) and inclusive of applicable taxes unless stated otherwise. Prices are subject to change without notice.</p></section>
          <section><h2 className="text-xl font-semibold text-neutral-900">Governing Law</h2><p className="mt-2">These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.</p></section>
        </div>
      </div>
    </div>
  );
}
