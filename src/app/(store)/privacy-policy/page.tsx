import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({ title: "Privacy Policy", description: "G2Earth privacy policy.", path: "/privacy-policy" });
export default function PrivacyPolicyPage() {
  return (
    <div className="container py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-neutral-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-neutral-400">Last updated: January 2025</p>
        <div className="mt-6 space-y-6 text-neutral-600">
          <section><h2 className="text-xl font-semibold text-neutral-900">Information We Collect</h2><p className="mt-2">We collect information you provide when creating an account, placing orders, or contacting us. This includes name, email, phone number, and delivery address.</p></section>
          <section><h2 className="text-xl font-semibold text-neutral-900">How We Use Your Information</h2><p className="mt-2">We use your information to process orders, provide customer support, send order updates, and improve our services. We do not sell your personal data to third parties.</p></section>
          <section><h2 className="text-xl font-semibold text-neutral-900">Data Security</h2><p className="mt-2">We implement industry-standard security measures to protect your data. Payment information is processed by certified payment gateways and never stored on our servers.</p></section>
          <section><h2 className="text-xl font-semibold text-neutral-900">Contact</h2><p className="mt-2">For privacy-related queries, contact us at support@g2earth.com.</p></section>
        </div>
      </div>
    </div>
  );
}
