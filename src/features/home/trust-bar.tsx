import { MessageCircle, Package, RefreshCw, ShieldCheck } from "lucide-react";
import { TRUST_FEATURES } from "@/lib/mock/mock-homepage";

const ICONS = { ShieldCheck, Package, RefreshCw, MessageCircle } as const;

export function TrustBar() {
  return (
    <section
      aria-label="Why shop with G2Earth"
      className="border-y border-neutral-200 bg-white"
    >
      <div className="container py-5">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4" role="list">
          {TRUST_FEATURES.map(({ icon, title, description }) => {
            const Icon = ICONS[icon];
            return (
            <li key={title} className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600"
              >
                <Icon size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{title}</p>
                <p className="text-xs text-neutral-500">{description}</p>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
