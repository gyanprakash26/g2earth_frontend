import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ContactForm } from "@/features/account/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({ title: "Contact Us", description: "Get in touch with the G2Earth team.", path: "/contact" });

export default function ContactPage() {
  return (
    <div className="container py-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-neutral-900">Contact Us</h1>
        <p className="mt-2 text-neutral-500">We&apos;re here to help. Reach out and we&apos;ll respond as soon as possible.</p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Send us a message</h2>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-neutral-900">Get in touch</h2>
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-green-600 shrink-0" />
              <div>
                <p className="text-sm font-medium text-neutral-900">Email</p>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-neutral-500 hover:text-green-700">{SITE_CONFIG.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-green-600 shrink-0" />
              <div>
                <p className="text-sm font-medium text-neutral-900">Phone</p>
                <p className="text-sm text-neutral-500">{SITE_CONFIG.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-green-600 shrink-0" />
              <div>
                <p className="text-sm font-medium text-neutral-900">Location</p>
                <p className="text-sm text-neutral-500">{SITE_CONFIG.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
