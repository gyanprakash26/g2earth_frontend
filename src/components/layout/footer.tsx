import Link from "next/link";
import { Logo } from "@/components/navigation/logo";
import { SITE_CONFIG, ROUTES } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: ROUTES.about },
    { label: "Contact Us", href: ROUTES.contact },
    { label: "FAQ", href: ROUTES.faq },
  ],
  legal: [
    { label: "Privacy Policy", href: ROUTES.privacyPolicy },
    { label: "Terms & Conditions", href: ROUTES.terms },
    { label: "Shipping Policy", href: ROUTES.shippingPolicy },
    { label: "Return & Refund", href: ROUTES.returnRefund },
    { label: "Cancellation Policy", href: ROUTES.cancellation },
    { label: "Grievance Redressal", href: ROUTES.grievance },
  ],
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE_CONFIG.social.instagram },
  { label: "Facebook", href: SITE_CONFIG.social.facebook },
  { label: "YouTube", href: SITE_CONFIG.social.youtube },
  { label: "Twitter / X", href: SITE_CONFIG.social.twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-3 text-sm text-neutral-500 max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 hover:border-green-600 hover:text-green-600 transition-colors"
                >
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Company</h3>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-green-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Legal</h3>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-green-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-neutral-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <p>
            <a href={SITE_CONFIG.domains.primary} className="hover:text-green-600 transition-colors">
              {SITE_CONFIG.domains.primary.replace("https://", "")}
            </a>
            {" · "}
            <a href={SITE_CONFIG.domains.secondary} className="hover:text-green-600 transition-colors">
              {SITE_CONFIG.domains.secondary.replace("https://", "")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
