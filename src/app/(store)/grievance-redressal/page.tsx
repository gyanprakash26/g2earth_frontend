import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
export const metadata: Metadata = buildMetadata({ title: "Grievance Redressal", description: "G2Earth grievance redressal mechanism.", path: "/grievance-redressal" });
export default function GrievancePage() {
  return (
    <div className="container py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-neutral-900">Grievance Redressal</h1>
        <p className="mt-4 text-sm text-neutral-400">As per the Consumer Protection (E-Commerce) Rules, 2020</p>
        <div className="mt-6 space-y-4 text-neutral-600">
          <p>If you have any grievance regarding our products or services, please contact our Grievance Officer:</p>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <p className="font-semibold text-neutral-900">Grievance Officer</p>
            <p className="mt-1">G2Earth Private Limited</p>
            <p>Email: <a href={`mailto:grievance@g2earth.com`} className="text-green-600 hover:text-green-700">grievance@g2earth.com</a></p>
            <p>Support: <a href={`mailto:${SITE_CONFIG.email}`} className="text-green-600 hover:text-green-700">{SITE_CONFIG.email}</a></p>
          </div>
          <p>We will acknowledge your grievance within 48 hours and resolve it within 30 days of receipt.</p>
        </div>
      </div>
    </div>
  );
}
